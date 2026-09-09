/* Lingua Fun · Juegos integrados por nivel · v3.9.0
   Cada nivel de francés e italiano pasa por los 6 tipos de juego antes del ejercicio principal.
*/
(function(){
'use strict';
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function lang(){return location.pathname.includes('frances')?'fr':'it'}
function getData(l,c,n){
  if(l==='fr'){
    const arr=c==='A1'?window.words:c==='A2'?window.a2Levels:window.b1Levels;
    return (arr&&arr[n])||[];
  }
  if(c==='A1') return (window.getItalianA1PracticeData&&window.getItalianA1PracticeData(n))||[];
  if(c==='A2') return (window.getItalianA2PracticeData&&window.getItalianA2PracticeData(n))||[];
  return (window.getItalianB1PracticeData&&window.getItalianB1PracticeData(n))||[];
}
function normalize(l,c,n){
  const raw=getData(l,c,n); const out=[];
  raw.forEach(x=>{
    if(!Array.isArray(x))return;
    if(typeof x[0]==='string'&&typeof x[1]==='string'){
      // A1 vocabulario o frases de A2/B1
      if(/[.!?¿¡]/.test(x[0])||x[0].split(/\s+/).length>4) out.push({term:x[0],es:x[1],sentence:x[0],sentenceEs:x[1]});
      else out.push({term:x[0],es:x[1],sentence:null,sentenceEs:null});
    }
  });
  if(l==='it'&&c==='A1'&&out.length){
    out.forEach(x=>{if(!x.sentence&&window.exampleFor){x.sentence=window.exampleFor(x.term);x.sentenceEs='';}});
  }
  return out;
}
function speak(l,t){if(!t)return;if(l==='fr'&&window.speakFrench)window.speakFrench(t);else if(l==='it'&&window.speakItalian)window.speakItalian(t)}
function speakEs(t){if(window.speakSpanish)window.speakSpanish(t)}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function host(title,body,l,back){
 const cls=l==='fr'?'fr-card':'it-card';
 document.getElementById('app').innerHTML=`<div class="${cls} required-level-games"><div class="it-top"><span>🎮 Práctica del nivel</span><b>${esc(title)}</b></div>${body}<div class="extra-progress" id="reqProgress"></div></div>`;
}
function nextButton(fn){const b=document.getElementById('reqNext');if(b)b.onclick=fn}
function runRequiredGames(l,c,n,done){
 if(window.__requiredGamesRunning)return; window.__requiredGamesRunning=true;
 const data=normalize(l,c,n); if(!data.length){window.__requiredGamesRunning=false;done();return;}
 const types=['pairs','listen','order','response','situation','meaning']; let gi=0;
 function finish(){window.__requiredGamesRunning=false;done()}
 function render(){
  const type=types[gi],x=data[gi%data.length],others=data.filter(y=>y!==x);
  document.getElementById('reqProgress').textContent=`Juego ${gi+1} de ${types.length}`;
  if(type==='pairs'){
   const opts=shuffle([x.term,x.es,...others.slice(0,2).flatMap(y=>[y.term,y.es])]).slice(0,6);
   host('🧩 Encuentra las parejas',`<p>Une la palabra con su significado.</p><div class="extra-pairs req-pairs">${shuffle(opts).map((o,j)=>`<button class="extra-pair" data-v="${esc(o)}">${esc(o)}</button>`).join('')}</div><div id="reqFb" class="extra-feedback"></div>`,l);
   const buttons=[...document.querySelectorAll('.req-pairs .extra-pair')];let selected=[];buttons.forEach(b=>b.onclick=()=>{if(b.disabled)return;b.classList.add('revealed');speak(l,b.textContent);selected.push(b);if(selected.length===2){const a=selected[0].textContent,z=selected[1].textContent;const ok=(a===x.term&&z===x.es)||(a===x.es&&z===x.term);if(ok){selected.forEach(q=>{q.classList.add('matched');q.disabled=true});document.getElementById('reqFb').innerHTML='✅ ¡Pareja correcta!';setTimeout(advance,900)}else{document.getElementById('reqFb').innerHTML='❌ No coinciden';setTimeout(()=>selected.forEach(q=>q.classList.remove('revealed')),650)}selected=[]}});
  } else if(type==='listen'){
   const opts=shuffle([x.es,...others.slice(0,3).map(y=>y.es)]);host('🎧 Escucha y elige',`<p>Escucha y elige la traducción.</p><button class="extra-game-btn" id="reqPlay">🔊 Escuchar</button><div class="extra-game-answers">${opts.map(o=>`<button>${esc(o)}</button>`).join('')}</div><div id="reqFb" class="extra-feedback"></div>`,l);document.getElementById('reqPlay').onclick=()=>speak(l,x.term);setTimeout(()=>speak(l,x.term),120);document.querySelectorAll('.extra-game-answers button').forEach(b=>b.onclick=()=>answer(b.textContent===x.es,b,`<b>${esc(x.term)}</b><br>🇪🇸 ${esc(x.es)}`));
  } else if(type==='order'){
   const sentence=x.sentence||x.term, clean=sentence.replace(/[¿?¡!.,]/g,'').split(/\s+/),chosen=[];host('🔤 Ordena la frase',`<p>Forma la frase correcta.</p><div id="reqChosen" class="extra-current">Toca las palabras en orden.</div><div class="extra-order">${shuffle(clean).map(w=>`<button class="extra-token">${esc(w)}</button>`).join('')}</div><button class="extra-game-btn" id="reqCheck">Comprobar</button><div id="reqFb" class="extra-feedback"></div>`,l);document.querySelectorAll('.extra-token').forEach(b=>b.onclick=()=>{if(b.disabled)return;b.disabled=true;chosen.push(b.textContent);document.getElementById('reqChosen').textContent=chosen.join(' ')});document.getElementById('reqCheck').onclick=()=>answer(chosen.join(' ')===clean.join(' '),null,`<b>${esc(sentence)}</b>${x.sentenceEs?`<br>🇪🇸 ${esc(x.sentenceEs)}`:''}`);
  } else if(type==='response'){
   const situation=x.es,opts=shuffle([x.sentence||x.term,...others.slice(0,3).map(y=>y.sentence||y.term)]);host('💬 ¿Qué responderías?',`<p>¿Qué dirías en esta situación?</p><h2>🇪🇸 ${esc(situation)}</h2><div class="extra-game-answers">${opts.map(o=>`<button>${esc(o)}</button>`).join('')}</div><div id="reqFb" class="extra-feedback"></div>`,l);document.querySelectorAll('.extra-game-answers button').forEach(b=>b.onclick=()=>answer(b.textContent===(x.sentence||x.term),b,`<b>${esc(x.sentence||x.term)}</b><br>🇪🇸 ${esc(x.sentenceEs||x.es)}`));
  } else if(type==='situation'){
   const sentence=x.sentence||x.term,opts=shuffle([x.es,...others.slice(0,3).map(y=>y.es)]);host('🎭 Situación real',`<p>Necesitas expresar esta idea:</p><h2>🇪🇸 ${esc(x.sentenceEs||x.es)}</h2><div class="extra-game-answers">${opts.map(o=>`<button>${esc(o)}</button>`).join('')}</div><div id="reqFb" class="extra-feedback"></div>`,l);document.querySelectorAll('.extra-game-answers button').forEach(b=>b.onclick=()=>answer(b.textContent===x.es,b,`<b>${esc(sentence)}</b><br>🇪🇸 ${esc(x.sentenceEs||x.es)}`));
  } else {
   const opts=shuffle([x.es,...others.slice(0,3).map(y=>y.es)]);host('🧠 ¿Qué palabra es?',`<p>Escucha la palabra y elige su significado.</p><h2>${esc(x.term)}</h2><button class="extra-game-btn" id="reqPlay">🔊 Escuchar</button><div class="extra-game-answers">${opts.map(o=>`<button>${esc(o)}</button>`).join('')}</div><div id="reqFb" class="extra-feedback"></div>`,l);document.getElementById('reqPlay').onclick=()=>speak(l,x.term);setTimeout(()=>speak(l,x.term),120);document.querySelectorAll('.extra-game-answers button').forEach(b=>b.onclick=()=>answer(b.textContent===x.es,b,`<b>${esc(x.term)}</b> = ${esc(x.es)}`));
  }
 }
 function answer(ok,b,msg){document.querySelectorAll('.extra-game-answers button,.extra-token,#reqCheck').forEach(q=>q.disabled=true);document.getElementById('reqFb').innerHTML=ok?'✅ ¡Correcto!<br>'+msg:'❌ Respuesta correcta:<br>'+msg;if(ok)speak(l, data[gi%data.length].sentence||data[gi%data.length].term);setTimeout(advance,1500)}
 function advance(){gi++;if(gi<types.length)render();else finish()}
 render();
}
window.runRequiredGames=runRequiredGames;
})();
