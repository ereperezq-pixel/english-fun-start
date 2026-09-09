/* English Fun Start · Ayuda de palabras
   Capa independiente: permite tocar palabras inglesas dentro de los textos
   de los ejercicios para ver una traducción breve y escucharla.
*/
(function(){
  const base={
    i:'yo',you:'tú / usted',he:'él',she:'ella',we:'nosotros',they:'ellos / ellas',it:'eso / ello',
    my:'mi',your:'tu / su',his:'su',her:'su',our:'nuestro',their:'su',this:'esto / este',that:'eso / ese',
    a:'un / una',an:'un / una',the:'el / la / los / las',and:'y',or:'o',but:'pero',because:'porque',so:'así que',
    if:'si',then:'entonces',than:'que',also:'también',very:'muy',too:'también / demasiado',just:'solo / justo',
    not:'no',yes:'sí',no:'no',please:'por favor',thanks:'gracias',thank:'agradecer / gracias',hello:'hola',hi:'hola',
    goodbye:'adiós',sorry:'lo siento',welcome:'bienvenido / de nada',
    what:'qué',where:'dónde',when:'cuándo',why:'por qué',who:'quién',how:'cómo',which:'cuál / qué',
    am:'soy / estoy',is:'es / está',are:'eres / estás / son / están',was:'era / estaba',were:'eras / estabas / eran / estaban',
    be:'ser / estar',been:'sido / estado',being:'siendo / estando',have:'tener / haber',has:'tiene / ha',had:'tenía / había',
    do:'hacer',does:'hace',did:'hizo / hizo',can:'poder',could:'podría / podía',will:'hará / será',would:'haría / sería',
    should:'debería',must:'deber / tener que',may:'puede que',might:'podría',
    go:'ir',come:'venir',get:'conseguir / llegar',make:'hacer / fabricar',take:'tomar / llevar',give:'dar',know:'saber / conocer',
    think:'pensar / creer',want:'querer',need:'necesitar',like:'gustar',love:'encantar / amar',use:'usar',find:'encontrar',
    look:'mirar',see:'ver',say:'decir',tell:'decir / contar',ask:'preguntar',answer:'responder',work:'trabajar',live:'vivir',
    eat:'comer',drink:'beber',sleep:'dormir',read:'leer',write:'escribir',speak:'hablar',listen:'escuchar',learn:'aprender',
    study:'estudiar',play:'jugar',help:'ayudar',try:'intentar',start:'empezar',finish:'terminar',open:'abrir',close:'cerrar',
    today:'hoy',tomorrow:'mañana',yesterday:'ayer',now:'ahora',later:'más tarde',always:'siempre',usually:'normalmente',
    often:'a menudo',sometimes:'a veces',never:'nunca',already:'ya',again:'otra vez',here:'aquí',there:'allí / ahí',
    good:'bueno',great:'genial',bad:'malo',easy:'fácil',difficult:'difícil',important:'importante',different:'diferente',
    same:'mismo',new:'nuevo',old:'viejo / antiguo',big:'grande',small:'pequeño',long:'largo',short:'corto',early:'temprano',
    late:'tarde',happy:'feliz',tired:'cansado',busy:'ocupado',ready:'preparado',right:'correcto / derecha',wrong:'incorrecto',
    day:'día',week:'semana',month:'mes',year:'año',time:'tiempo / hora',morning:'mañana',afternoon:'tarde',evening:'tarde / noche',
    night:'noche',home:'casa',school:'escuela',work:'trabajo',friend:'amigo / amiga',family:'familia',person:'persona',people:'gente / personas',
    place:'lugar',city:'ciudad',country:'país',street:'calle',car:'coche',bus:'autobús',train:'tren',food:'comida',water:'agua',
    money:'dinero',shop:'tienda',store:'tienda',restaurant:'restaurante',hotel:'hotel',problem:'problema',question:'pregunta',answer:'respuesta',
    idea:'idea',thing:'cosa',way:'forma / manera',life:'vida',world:'mundo',story:'historia',experience:'experiencia',
    today:'hoy',before:'antes',after:'después',first:'primero',last:'último',next:'siguiente',every:'cada',more:'más',less:'menos',
    some:'alguno / algo de',any:'algún / ninguno',many:'muchos',much:'mucho',few:'pocos',little:'poco',
    in:'en / dentro de',on:'en / sobre',at:'en / a',to:'a / hacia',from:'de / desde',for:'para / durante',with:'con',without:'sin',
    about:'sobre / acerca de',before:'antes de',after:'después de',between:'entre',under:'debajo de',over:'encima de',near:'cerca de',
    around:'alrededor de',by:'por / junto a',through:'a través de',during:'durante'
  };

  function buildDictionary(){
    const d=Object.assign({},base);
    if(typeof levels!=='undefined' && Array.isArray(levels)){
      levels.forEach(l=>{
        (l.vocab||[]).forEach(x=>{if(x&&x[0]&&x[1])d[String(x[0]).toLowerCase()]=x[1];});
      });
    }
    return d;
  }

  function cleanToken(t){return t.toLowerCase().replace(/[’']/g,"'");}
  function isEnglishWord(s,d){return !!d[cleanToken(s)] || /^\w+(?:['’]\w+)?$/u.test(s) && !!d[cleanToken(s)];}

  function wrap(root){
    if(!root || root.nodeType!==1 || root.closest('.word-help-popup'))return;
    if(root.dataset.wordHelpDone==='1')return;
    const d=buildDictionary();
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){
      const p=node.parentElement;
      if(!p || p.closest('button,a,input,textarea,select,script,style,.word-help,.word-help-popup,[data-no-word-help]'))return NodeFilter.FILTER_REJECT;
      if(!node.nodeValue.trim())return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    const nodes=[];let n;while(n=walker.nextNode())nodes.push(n);
    nodes.forEach(node=>{
      const text=node.nodeValue;
      const parts=text.split(/([A-Za-z]+(?:['’][A-Za-z]+)?)/g);
      if(parts.length<2)return;
      const frag=document.createDocumentFragment();let changed=false;
      parts.forEach(part=>{
        const key=cleanToken(part);
        if(/^[A-Za-z]+(?:['’][A-Za-z]+)?$/.test(part) && d[key]){
          const span=document.createElement('span');span.className='word-help';span.textContent=part;
          span.dataset.word=part;span.dataset.meaning=d[key];span.title='Toca para ver el significado';
          frag.appendChild(span);changed=true;
        }else frag.appendChild(document.createTextNode(part));
      });
      if(changed)node.parentNode.replaceChild(frag,node);
    });
    root.dataset.wordHelpDone='1';
  }

  function scan(){
    const selectors='#gameContent .question,#gameContent .feedback,#gameContent .listen-box,#gameContent .conversation-line,#gameContent .explanation';
    document.querySelectorAll(selectors).forEach(wrap);
  }

  function popup(word,meaning,anchor){
    document.querySelectorAll('.word-help-popup').forEach(x=>x.remove());
    const box=document.createElement('div');box.className='word-help-popup';
    box.innerHTML='<div class="word-help-popup-word"></div><div class="word-help-popup-meaning"></div><button type="button" class="word-help-popup-speak">🔊 Escuchar</button>';
    box.querySelector('.word-help-popup-word').textContent=word;
    box.querySelector('.word-help-popup-meaning').textContent=meaning;
    box.querySelector('.word-help-popup-speak').onclick=()=>{if(typeof speakEnglish==='function')speakEnglish(word)};
    document.body.appendChild(box);
    const r=anchor.getBoundingClientRect();const bw=Math.min(280,window.innerWidth-20);
    box.style.maxWidth=bw+'px';
    let left=Math.max(10,Math.min(window.innerWidth-bw-10,r.left+r.width/2-bw/2));
    let top=r.bottom+8;
    if(top+box.offsetHeight>window.innerHeight-10)top=Math.max(10,r.top-box.offsetHeight-8);
    box.style.left=left+'px';box.style.top=top+'px';
    setTimeout(()=>document.addEventListener('click',function close(e){if(!box.contains(e.target)&&e.target!==anchor){box.remove();document.removeEventListener('click',close)}},{once:false}),0);
  }

  document.addEventListener('click',e=>{const w=e.target.closest('.word-help');if(w){e.preventDefault();e.stopPropagation();popup(w.dataset.word,w.dataset.meaning,w)}});
  const observer=new MutationObserver(()=>{clearTimeout(observer._t);observer._t=setTimeout(scan,80)});
  window.addEventListener('load',()=>{scan();observer.observe(document.getElementById('gameContent')||document.body,{childList:true,subtree:true})});
  window.wordHelpScan=scan;
})();
