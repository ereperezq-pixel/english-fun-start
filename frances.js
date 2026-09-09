const FRENCH_STATE_KEY='englishFunFrenchState';

// FRANCÉS A1 — se conserva para no perder progreso.
const words=[
['Bonjour','Hola'],['Salut','Hola / Adiós'],['Merci','Gracias'],['S’il vous plaît','Por favor'],['Au revoir','Adiós'],
['oui','sí'],['non','no'],['ami','amigo'],['famille','familia'],['maison','casa'],['école','escuela'],['travail','trabajo'],
['eau','agua'],['pain','pan'],['café','café'],['ville','ciudad'],['rue','calle'],['voiture','coche'],['livre','libro'],['jour','día'],
['nuit','noche'],['matin','mañana'],['soir','tarde / noche'],['aujourd’hui','hoy'],['demain','mañana'],['hier','ayer'],
['être','ser / estar'],['avoir','tener'],['aller','ir'],['faire','hacer'],['aimer','gustar / querer'],['parler','hablar'],['écouter','escuchar'],
['manger','comer'],['boire','beber'],['dormir','dormir'],['lire','leer'],['écrire','escribir'],['comprendre','entender'],['apprendre','aprender'],
['grand','grande'],['petit','pequeño'],['bon','bueno'],['mauvais','malo'],['facile','fácil'],['difficile','difícil'],['heureux','feliz'],['fatigué','cansado'],
['aujourd’hui je travaille','hoy trabajo'],['j’aime le café','me gusta el café'],['je vais à l’école','voy a la escuela'],['je parle français','hablo francés']
];

const a1Topics=['Saludos y cortesía','Personas y familia','Casa','Ciudad','Comida y bebida','Rutinas','Tiempo','Verbos básicos','Adjetivos','Repaso 1','Viajes','Compras','Restaurante','Trabajo y estudios','Tiempo libre','Opiniones sencillas','Pasado básico','Planes','Situaciones prácticas','Misión final'];

// FRANCÉS A2 — 20 niveles, con vocabulario y frases progresivamente más complejas.
const a2Topics=[
 'Rutinas y frecuencia','Mi ciudad y servicios','Compras y ropa','Restaurante y comida','Pasado: passé composé','Viajes y alojamiento','Planes y futuro','Comparaciones','Salud y bienestar','Trabajo y estudios','Comunicación y tecnología','Tiempo y clima','Casa y problemas cotidianos','Personas y relaciones','Tiempo libre y cultura','Opiniones y conectores','Pasado: imparfait básico','Obligaciones y consejos','Situaciones prácticas','Misión final A2'
];

const a2Levels=[
 [['souvent','a menudo'],['parfois','a veces'],['toujours','siempre'],['jamais','nunca'],['se lever','levantarse'],['prendre le petit-déjeuner','desayunar'],['Je me lève à sept heures.','Me levanto a las siete.'],['Je travaille souvent le soir.','Trabajo a menudo por la noche.']],
 [['pharmacie','farmacia'],['poste','correos'],['gare','estación de tren'],['banque','banco'],['mairie','ayuntamiento'],['boulangerie','panadería'],['près de','cerca de'],['loin de','lejos de']],
 [['vêtement','prenda de ropa'],['chemise','camisa'],['pantalon','pantalón'],['chaussures','zapatos'],['taille','talla'],['cher','caro'],['bon marché','barato'],['Je voudrais essayer cette veste.','Quisiera probarme esta chaqueta.']],
 [['menu','menú'],['serveur','camarero'],['addition','cuenta'],['entrée','entrante / primer plato'],['plat principal','plato principal'],['dessert','postre'],['sans','sin'],['Je voudrais l’addition, s’il vous plaît.','Quisiera la cuenta, por favor.']],
 [['j’ai mangé','he comido / comí'],['j’ai vu','he visto / vi'],['j’ai fait','he hecho / hice'],['j’ai pris','he tomado / tomé'],['hier soir','anoche'],['la semaine dernière','la semana pasada'],['déjà','ya'],['Je suis allé au cinéma.','Fui al cine.']],
 [['voyage','viaje'],['billet','billete'],['réservation','reserva'],['hôtel','hotel'],['chambre','habitación'],['valise','maleta'],['retard','retraso'],['Notre train a du retard.','Nuestro tren lleva retraso.']],
 [['bientôt','pronto'],['plus tard','más tarde'],['ce week-end','este fin de semana'],['prévoir','tener previsto / planear'],['rendez-vous','cita'],['vacances','vacaciones'],['la semaine prochaine','la semana que viene'],['Je vais visiter Paris.','Voy a visitar París.']],
 [['plus grand','más grande'],['moins cher','más barato'],['meilleur','mejor'],['pire','peor'],['aussi… que','tan… como'],['plus… que','más… que'],['moins… que','menos… que'],['Ce restaurant est meilleur que l’autre.','Este restaurante es mejor que el otro.']],
 [['malade','enfermo'],['douleur','dolor'],['fièvre','fiebre'],['médecin','médico'],['rendez-vous médical','cita médica'],['se reposer','descansar'],['faire attention','tener cuidado'],['Je ne me sens pas bien.','No me siento bien.']],
 [['réunion','reunión'],['collègue','compañero de trabajo'],['projet','proyecto'],['examen','examen'],['cours','clase / curso'],['réussir','aprobar / conseguir'],['emploi','empleo'],['Je dois terminer ce projet aujourd’hui.','Tengo que terminar este proyecto hoy.']],
 [['message','mensaje'],['appel','llamada'],['courriel','correo electrónico'],['écran','pantalla'],['télécharger','descargar'],['envoyer','enviar'],['répondre','responder'],['Je t’envoie le document.','Te envío el documento.']],
 [['soleil','sol'],['pluie','lluvia'],['neige','nieve'],['nuageux','nublado'],['chaud','caluroso'],['froid','frío'],['vent','viento'],['Il va pleuvoir demain.','Mañana va a llover.']],
 [['panne','avería'],['réparer','reparar'],['chauffage','calefacción'],['ascenseur','ascensor'],['voisin','vecino'],['bruit','ruido'],['propre','limpio'],['Il y a un problème dans ma salle de bains.','Hay un problema en mi cuarto de baño.']],
 [['confiance','confianza'],['inquiet','preocupado'],['content','contento'],['fâché','enfadado'],['sympathique','simpático'],['généreux','generoso'],['se disputer','discutir / pelearse'],['On s’entend très bien.','Nos llevamos muy bien.']],
 [['film','película'],['concert','concierto'],['musée','museo'],['exposition','exposición'],['randonnée','senderismo'],['jouer aux cartes','jugar a las cartas'],['sortir','salir'],['Ça me plaît beaucoup.','Me gusta mucho.']],
 [['à mon avis','en mi opinión'],['je pense que','pienso que'],['parce que','porque'],['mais','pero'],['donc','por lo tanto / así que'],['cependant','sin embargo'],['en plus','además'],['Je préfère rester chez moi parce qu’il pleut.','Prefiero quedarme en casa porque llueve.']],
 [['quand j’étais petit','cuando era pequeño'],['avant','antes'],['autrefois','antes / antiguamente'],['d’habitude','normalmente'],['je faisais','hacía'],['j’habitais','vivía'],['je jouais','jugaba'],['Quand j’étais petit, je jouais dehors.','Cuando era pequeño, jugaba fuera.']],
 [['devoir','deber / tener que'],['il faut','hay que'],['conseil','consejo'],['pouvoir','poder'],['interdire','prohibir'],['obligatoire','obligatorio'],['faire attention à','tener cuidado con'],['Tu devrais consulter un médecin.','Deberías consultar a un médico.']],
 [['excusez-moi','perdone / disculpe'],['je cherche','busco'],['pourriez-vous','¿podría usted…?'],['je voudrais','quisiera'],['ça dépend','depende'],['ce n’est pas grave','no pasa nada'],['j’ai besoin de','necesito'],['Pouvez-vous m’aider, s’il vous plaît ?','¿Puede ayudarme, por favor?']],
 [['cependant','sin embargo'],['pourtant','sin embargo / aun así'],['depuis','desde / desde hace'],['pendant','durante'],['environ','aproximadamente'],['en général','en general'],['finalement','finalmente'],['Je parle français depuis deux ans.','Hablo francés desde hace dos años.']]
];

const a1Test=[
 ['Bonjour','Hola'],['Merci','Gracias'],['maison','casa'],['école','escuela'],['eau','agua'],['ville','ciudad'],['avoir','tener'],['aller','ir'],['manger','comer'],['dormir','dormir'],['heureux','feliz'],['fatigué','cansado'],['au revoir','Adiós'],['apprendre','aprender'],['je parle français','hablo francés']
];

let state=JSON.parse(localStorage.getItem(FRENCH_STATE_KEY)||'null')||{course:'A1',level:0,completed:[],xp:0,a2Unlocked:false,a2Level:0,a2Completed:[],a2TestPassed:false};
// Migración de partidas A1 antiguas.
state.course=state.course||'A1'; state.level=Number.isInteger(state.level)?state.level:0; state.completed=Array.isArray(state.completed)?state.completed:[];
state.xp=Number(state.xp||0); state.a2Unlocked=!!state.a2Unlocked; state.a2Level=Number.isInteger(state.a2Level)?state.a2Level:0; state.a2Completed=Array.isArray(state.a2Completed)?state.a2Completed:[]; state.a2TestPassed=!!state.a2TestPassed;
if(state.completed.length>=20)state.a2Unlocked=true;

function save(){localStorage.setItem(FRENCH_STATE_KEY,JSON.stringify(state));update();}
function update(){const xp=document.getElementById('xp');const progress=document.getElementById('progress');const levelText=document.getElementById('levelText');if(xp)xp.textContent=state.xp;if(progress){const done=state.course==='A2'?state.a2Completed.length:state.completed.length;progress.style.width=((done/20)*100)+'%';}if(levelText)levelText.textContent='Nivel '+((state.course==='A2'?state.a2Level:state.level)+1)+' / 20';}
function courseCompleteA1(){return state.completed.length>=20;}

function showMap(){
  if(courseCompleteA1())state.a2Unlocked=true;
  const a1Open=state.course==='A1';
  const topics=a1Open?a1Topics:a2Topics;
  const completed=a1Open?state.completed:state.a2Completed;
  const current=a1Open?state.level:state.a2Level;
  const title=a1Open?'Francés A1':'Francés A2';
  document.getElementById('app').innerHTML=`<div class="fr-card">
    <div class="fr-header"><div><h1>🇫🇷 ${title}</h1><p>${a1Open?'Primer módulo de francés.':'Segundo módulo: francés básico alto, con frases y situaciones más completas.'}</p></div><div class="fr-stats"><span>⭐ <b id="xp">${state.xp}</b> XP</span></div></div>
    <div class="fr-course-tabs"><button class="fr-tab ${a1Open?'active':''}" id="tabA1">A1</button><button class="fr-tab ${!a1Open?'active':''} ${state.a2Unlocked?'':'locked'}" id="tabA2" ${state.a2Unlocked?'':'disabled'}>A2 ${state.a2Unlocked?'':'🔒'}</button></div>
    ${!state.a2Unlocked&&courseCompleteA1()?'':(!state.a2Unlocked?`<div class="fr-unlock"><h3>🔒 A2 bloqueado</h3><p>Completa los 20 niveles de A1 o supera la prueba final con <strong>14 de 15</strong> aciertos.</p><button class="fr-main" id="frTestA1">📝 Hacer prueba final A1</button><button class="fr-back" id="frCode">🔑 Introducir código 1111</button></div>`:'')}
    ${state.a2Unlocked&&!a1Open?'': ''}
    <div class="fr-progress"><div id="progress"></div></div>
    <div class="fr-levels">${topics.map((t,i)=>`<button class="fr-level ${completed.includes(i)?'done':''} ${i<=current?'open':'locked'}" ${i<=current?'':'disabled'} data-level="${i}"><b>${i+1}</b><span>${t}</span><small>${completed.includes(i)?'✓ Completado':i===current?'▶ Empezar':'🔒 Bloqueado'}</small></button>`).join('')}</div>
    ${a1Open&&state.a2Unlocked?'<div class="fr-unlock"><h3>🎉 ¡A2 desbloqueado!</h3><p>Ya puedes empezar el segundo curso.</p><button class="fr-main" id="goA2">🇫🇷 Entrar en A2</button></div>':''}
    ${!a1Open?'<div class="fr-unlock"><p>Para volver al primer curso:</p><button class="fr-back" id="goA1">← Volver a A1</button></div>':''}
    <button class="fr-back" id="frBackHome">🇬🇧 Volver a inglés</button>
  </div>`;
  update();
  document.querySelectorAll('.fr-level[data-level]').forEach(btn=>btn.addEventListener('click',()=>startLevel(Number(btn.dataset.level))));
  document.getElementById('tabA1').addEventListener('click',()=>{state.course='A1';showMap();});
  document.getElementById('tabA2').addEventListener('click',()=>{if(state.a2Unlocked){state.course='A2';showMap();}});
  const goA2=document.getElementById('goA2'); if(goA2)goA2.addEventListener('click',()=>{state.course='A2';showMap();});
  const goA1=document.getElementById('goA1'); if(goA1)goA1.addEventListener('click',()=>{state.course='A1';showMap();});
  const test=document.getElementById('frTestA1'); if(test)test.addEventListener('click',showA1Test);
  const code=document.getElementById('frCode'); if(code)code.addEventListener('click',()=>{const c=prompt('Introduce el código para desbloquear A2:');if(c==='1111'){state.a2Unlocked=true;state.course='A2';save();showMap();}else if(c!==null)alert('Código incorrecto.');});
  document.getElementById('frBackHome').addEventListener('click',()=>location.href='index.html');
}

function speakFrench(text){if(!('speechSynthesis' in window))return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='fr-FR';u.rate=0.78;const voices=window.speechSynthesis.getVoices();const voice=voices.find(v=>/^fr-FR$/i.test(v.lang))||voices.find(v=>/^fr[-_]/i.test(v.lang));if(voice)u.voice=voice;window.speechSynthesis.speak(u);}

function getCourseData(){return state.course==='A2'?a2Levels:words;}
function getCourseTopics(){return state.course==='A2'?a2Topics:a1Topics;}
function getCourseCompleted(){return state.course==='A2'?state.a2Completed:state.completed;}

function startLevel(n){
  const course=state.course; const topics=getCourseTopics(); const data=getCourseData();
  if(course==='A1')state.level=n;else state.a2Level=n;
  let q;
  if(course==='A2')q=shuffle(data[n]||data[0]).slice(0,4);
  else {const startIndex=(n*2)%Math.max(1,words.length-12);q=shuffle(words.slice(startIndex,startIndex+12)).slice(0,4);}
  let i=0,correct=0,answerLocked=false,advanceTimer=null;
  function render(){
    answerLocked=false; const [fr,es]=q[i];
    const all=course==='A2'?data.flat():words;
    const opts=shuffle([es,...shuffle(all).filter(x=>x[1]!==es).slice(0,3).map(x=>x[1])]);
    document.getElementById('app').innerHTML=`<div class="fr-card"><div class="fr-top"><button class="fr-back" id="frBack">← Niveles</button><span>🇫🇷 ${course} · ${topics[n]}</span></div><div class="fr-question-tag">${course==='A2'?'Nivel A2 · Comprensión':'Nivel A1 · Vocabulario'}</div><h2>${fr}</h2><button type="button" class="fr-listen" id="frListen">🔊 Escuchar en francés</button><p>¿Qué significa?</p><div class="fr-answers" id="frAnswers">${opts.map((o,k)=>`<button type="button" data-answer-index="${k}">${o}</button>`).join('')}</div><div id="frFeedback"></div><small>Pregunta ${i+1} de ${q.length}</small></div>`;
    document.getElementById('frBack').addEventListener('click',()=>{if(advanceTimer)clearTimeout(advanceTimer);if(window.speechSynthesis)window.speechSynthesis.cancel();showMap();});
    document.getElementById('frListen').addEventListener('click',()=>speakFrench(fr));
    setTimeout(()=>speakFrench(fr),180);
    document.querySelectorAll('#frAnswers button').forEach(btn=>btn.addEventListener('click',()=>{if(answerLocked)return;answerLocked=true;document.querySelectorAll('#frAnswers button').forEach(b=>b.disabled=true);answer(btn.textContent,es,n);}));
  }
  function answer(a,c,ln){
    const fb=document.getElementById('frFeedback');if(!fb)return;
    const example=getFrenchExample(c);const audioText=getFrenchExampleSentence(c);
    const ok=a===c;
    if(ok){correct++;state.xp+=10;fb.innerHTML='<div class="ok">✅ ¡Muy bien!</div>'+example+'<button type="button" class="fr-listen" id="frExampleListen">🔊 Escuchar la frase</button><div class="fr-next">⏱️ Siguiente pregunta en 4 segundos…</div>'}
    else fb.innerHTML='<div class="bad">❌ Correcto: <strong>'+c+'</strong></div>'+example+'<button type="button" class="fr-listen" id="frExampleListen">🔊 Escuchar la frase</button><div class="fr-next">⏱️ Siguiente pregunta en 4 segundos…</div>';
    const eb=document.getElementById('frExampleListen');if(eb)eb.addEventListener('click',()=>speakFrench(audioText));
    speakFrench(audioText);save();
    advanceTimer=setTimeout(()=>{advanceTimer=null;i++;if(i<q.length){render();}else completeLevel(ln,correct,q.length);},4000);
  }
  render();
}

function completeLevel(ln,correct,total){
  if(state.course==='A2'){if(!state.a2Completed.includes(ln))state.a2Completed.push(ln);if(ln<19)state.a2Level=Math.max(state.a2Level,ln+1);}
  else {if(!state.completed.includes(ln))state.completed.push(ln);if(ln<19)state.level=Math.max(state.level,ln+1);}
  state.xp+=50;save();
  const last=state.course==='A2'?state.a2Completed.length>=20:state.completed.length>=20;
  document.getElementById('app').innerHTML=`<div class="fr-card center"><div class="fr-big">🎉</div><h2>¡Nivel completado!</h2><p>Has acertado ${correct} de ${total}.</p><p>⭐ +50 XP</p>${last?`<div class="fr-unlock"><h3>🏆 ¡Has terminado ${state.course}!</h3><p>${state.course==='A1'?'A2 ya está disponible.':'Has completado todo el contenido A2.'}</p></div>`:''}<button class="fr-main" id="frContinue">Continuar</button></div>`;
  document.getElementById('frContinue').addEventListener('click',()=>{if(state.course==='A1'&&state.completed.length>=20){state.a2Unlocked=true;}showMap();});
}

function showA1Test(){
  let i=0,score=0,locked=false;const q=shuffle(a1Test);
  function render(){locked=false;const [fr,es]=q[i];const opts=shuffle([es,...shuffle(a1Test).filter(x=>x[1]!==es).slice(0,3).map(x=>x[1])]);document.getElementById('app').innerHTML=`<div class="fr-card"><div class="fr-top"><button class="fr-back" id="testBack">← Volver</button><span>🇫🇷 Prueba final A1</span></div><h2>${fr}</h2><button class="fr-listen" id="testListen">🔊 Escuchar</button><p>¿Qué significa?</p><div class="fr-answers" id="testAnswers">${opts.map((o,k)=>`<button type="button" data-k="${k}">${o}</button>`).join('')}</div><div id="testFeedback"></div><small>Pregunta ${i+1} de 15 · Necesitas 14/15</small></div>`;document.getElementById('testBack').addEventListener('click',showMap);document.getElementById('testListen').addEventListener('click',()=>speakFrench(fr));setTimeout(()=>speakFrench(fr),180);document.querySelectorAll('#testAnswers button').forEach(b=>b.addEventListener('click',()=>{if(locked)return;locked=true;document.querySelectorAll('#testAnswers button').forEach(x=>x.disabled=true);if(b.textContent===es)score++;const fb=document.getElementById('testFeedback');fb.innerHTML=b.textContent===es?'<div class="ok">✅ Correcto</div>':'<div class="bad">❌ Correcto: <strong>'+es+'</strong></div>';setTimeout(()=>{i++;if(i<15)render();else finish();},1200);}));}
  function finish(){const passed=score>=14;if(passed){state.a2Unlocked=true;state.a2TestPassed=true;state.course='A2';state.xp+=100;save();document.getElementById('app').innerHTML=`<div class="fr-card center"><div class="fr-big">🏆</div><h2>¡Prueba superada!</h2><p>${score}/15 correctas.</p><p>🇫🇷 A2 está desbloqueado.</p><button class="fr-main" id="goA2Test">Entrar en A2</button></div>`;document.getElementById('goA2Test').addEventListener('click',showMap);}else{document.getElementById('app').innerHTML=`<div class="fr-card center"><div class="fr-big">📚</div><h2>Aún no has llegado a 90 %</h2><p>Resultado: ${score}/15. Necesitas 14/15.</p><button class="fr-main" id="retryTest">Repetir prueba</button><button class="fr-back" id="backTest">Volver al mapa</button></div>`;document.getElementById('retryTest').addEventListener('click',showA1Test);document.getElementById('backTest').addEventListener('click',showMap);}}
  render();
}

function getFrenchExampleSentence(fr){
  const all={
    'Bonjour':'Bonjour, comment ça va ?','Salut':'Salut, à demain !','Merci':'Merci beaucoup pour ton aide.','S’il vous plaît':'Un café, s’il vous plaît.','Au revoir':'Au revoir, à demain !','oui':'Oui, je comprends.','non':'Non, je ne sais pas.','ami':'C’est mon ami.','famille':'Ma famille habite ici.','maison':'Ma maison est petite.','école':'Je vais à l’école.','travail':'Je suis au travail.','eau':'Je bois de l’eau.','pain':'Je mange du pain.','café':'J’aime le café.','ville':'J’habite dans une grande ville.','rue':'La rue est calme.','voiture':'Ma voiture est devant la maison.','livre':'Je lis un livre.','jour':'Bonne journée !','nuit':'Bonne nuit !','matin':'Je travaille le matin.','soir':'Je regarde la télé le soir.','aujourd’hui':'Aujourd’hui, je travaille.','demain':'Demain, je vais à l’école.','hier':'Hier, j’étais à la maison.','être':'Je suis fatigué.','avoir':'J’ai un livre.','aller':'Je vais au travail.','faire':'Je fais mes devoirs.','aimer':'J’aime le français.','parler':'Je parle français.','écouter':'J’écoute de la musique.','manger':'J’aime manger du pain.','boire':'Je veux boire de l’eau.','dormir':'Je vais dormir.','lire':'J’aime lire.','écrire':'J’aime écrire.','comprendre':'Je comprends la question.','apprendre':'J’apprends le français.','grand':'Mon appartement est grand.','petit':'Le café est petit.','bon':'C’est très bon !','mauvais':'Ce n’est pas mauvais.','facile':'C’est facile.','difficile':'C’est difficile.','heureux':'Je suis heureux aujourd’hui.','fatigué':'Je suis très fatigué.'
  };
  if(all[fr])return all[fr];
  for(const level of a2Levels){const hit=level.find(x=>x[0]===fr);if(hit)return hit[0].includes(' ')?hit[0]:`J’utilise le mot « ${hit[0]} » dans une phrase.`;}
  return fr;
}
function getFrenchExample(fr){
  const sentence=getFrenchExampleSentence(fr);const item=[...words,...a2Levels.flat()].find(x=>x[0]===fr);const meaning=item?item[1]:'';return `<div class="fr-example"><b>🗣️ En una frase:</b><br>${sentence}${meaning?`<br><span class="fr-meaning">${meaning}</span>`:''}</div>`;
}
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

showMap();
