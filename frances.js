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


// FRANCÉS B1 — 20 niveles, más natural y orientado a comunicación real.
const b1Topics=[
 'Historias y experiencias','Opiniones y argumentos','Trabajo y proyectos','Tecnología y comunicación','Viajes y problemas',
 'Salud y consejos','Medio ambiente','Educación y aprendizaje','Relaciones y personalidad','Tiempo libre y cultura',
 'Noticias y medios','Condicionales','Pasado y narración','Futuro y decisiones','Modales y obligaciones',
 'Expresiones frecuentes','Comparar y explicar','Solucionar problemas','Conversación real','Repaso y misión final'
];
const b1Levels=[
 [['expérience','experiencia'],['souvenir','recuerdo'],['raconter','contar'],['arriver','suceder / llegar'],['réussir','conseguir / tener éxito'],['échouer','fracasar'],['pendant que','mientras'],['Quand je suis arrivé, ils avaient déjà commencé.','Cuando llegué, ya habían empezado.']],
 [['cependant','sin embargo'],['pourtant','sin embargo / aun así'],['en revanche','en cambio'],['à mon avis','en mi opinión'],['selon moi','según yo'],['être d’accord','estar de acuerdo'],['convaincre','convencer'],['Je ne suis pas d’accord avec cette idée.','No estoy de acuerdo con esta idea.']],
 [['réunion','reunión'],['équipe','equipo'],['objectif','objetivo'],['délai','plazo'],['tâche','tarea'],['responsable','responsable'],['améliorer','mejorar'],['Nous devons terminer le projet avant vendredi.','Tenemos que terminar el proyecto antes del viernes.']],
 [['réseau social','red social'],['confidentialité','privacidad'],['mot de passe','contraseña'],['fichier','archivo'],['mettre à jour','actualizar'],['partager','compartir'],['connexion','conexión'],['Je préfère vérifier les informations avant de les partager.','Prefiero comprobar la información antes de compartirla.']],
 [['annulation','cancelación'],['correspondance','conexión / enlace'],['bagage','equipaje'],['réception','recepción'],['se perdre','perderse'],['se tromper de','equivocarse de'],['rembourser','reembolsar'],['Nous avons raté notre correspondance.','Hemos perdido nuestra conexión.']],
 [['symptôme','síntoma'],['traitement','tratamiento'],['rendez-vous','cita'],['guérir','curarse'],['éviter','evitar'],['conseiller','aconsejar'],['se sentir mieux','sentirse mejor'],['Tu ferais mieux de te reposer quelques jours.','Harías mejor en descansar unos días.']],
 [['déchet','residuo'],['pollution','contaminación'],['recycler','reciclar'],['énergie','energía'],['économiser','ahorrar'],['réduire','reducir'],['protéger','proteger'],['Il faudrait réduire notre consommation d’énergie.','Habría que reducir nuestro consumo de energía.']],
 [['apprentissage','aprendizaje'],['compétence','habilidad'],['formation','formación'],['matière','asignatura'],['devoir','deber / tarea'],['réviser','repasar'],['progresser','progresar'],['Je fais des progrès depuis que je pratique tous les jours.','Progreso desde que practico todos los días.']],
 [['confiant','seguro de sí mismo'],['généreux','generoso'],['patient','paciente'],['timide','tímido'],['fiable','fiable'],['se fier à','fiarse de'],['se mettre à la place de','ponerse en el lugar de'],['Il faut essayer de comprendre le point de vue des autres.','Hay que intentar comprender el punto de vista de los demás.']],
 [['spectacle','espectáculo'],['roman','novela'],['réalisateur','director'],['œuvre','obra'],['public','público'],['jouer un rôle','interpretar un papel'],['profiter de','disfrutar de / aprovechar'],['Le film m’a beaucoup fait réfléchir.','La película me hizo reflexionar mucho.']],
 [['actualité','actualidad'],['reportage','reportaje'],['source','fuente'],['titre','titular'],['débat','debate'],['annoncer','anunciar'],['fiable','fiable'],['Il est important de vérifier la source d’une information.','Es importante comprobar la fuente de una información.']],
 [['condition','condición'],['si','si'],['possibilité','posibilidad'],['probablement','probablemente'],['à ta place','en tu lugar'],['cela dépend','eso depende'],['faire face à','hacer frente a'],['Si j’avais plus de temps, je voyagerais davantage.','Si tuviera más tiempo, viajaría más.']],
 [['alors que','mientras que'],['tout à coup','de repente'],['finalement','finalmente'],['au début','al principio'],['ensuite','después'],['pendant ce temps','mientras tanto'],['se rendre compte','darse cuenta'],['Je me suis rendu compte que j’avais oublié mes clés.','Me di cuenta de que había olvidado mis llaves.']],
 [['décision','decisión'],['prévoir','prever / planear'],['avenir','futuro'],['objectif','objetivo'],['probable','probable'],['être sur le point de','estar a punto de'],['finir par','acabar por'],['Je vais changer de travail si je trouve une meilleure offre.','Voy a cambiar de trabajo si encuentro una oferta mejor.']],
 [['obligation','obligación'],['interdiction','prohibición'],['autoriser','autorizar'],['devoir','deber'],['falloir','hacer falta / haber que'],['être censé','se supone que'],['avoir le droit de','tener derecho a'],['Vous êtes censé arriver avant huit heures.','Se supone que debe llegar antes de las ocho.']],
 [['se débrouiller','apañárselas'],['avoir hâte de','tener ganas de'],['ça vaut le coup','merece la pena'],['tant pis','qué le vamos a hacer'],['à vrai dire','a decir verdad'],['quand même','de todos modos'],['en fait','en realidad'],['À vrai dire, je ne m’y attendais pas.','A decir verdad, no me lo esperaba.']],
 [['semblable','parecido'],['différent','diferente'],['contrairement à','a diferencia de'],['plus efficace','más eficaz'],['moins pratique','menos práctico'],['environ','aproximadamente'],['autrement dit','dicho de otro modo'],['Cette solution est plus simple que la précédente.','Esta solución es más sencilla que la anterior.']],
 [['panne','avería'],['plainte','queja'],['solution','solución'],['problème','problema'],['urgent','urgente'],['régler','resolver'],['s’occuper de','encargarse de'],['Je vais m’en occuper dès que possible.','Me ocuparé de ello lo antes posible.']],
 [['prendre une décision','tomar una decisión'],['poser une question','hacer una pregunta'],['donner son avis','dar su opinión'],['faire attention','tener cuidado'],['tenir au courant','mantener informado'],['ça marche','de acuerdo / funciona'],['je vois ce que tu veux dire','entiendo lo que quieres decir'],['Je vois ce que tu veux dire, mais je pense autrement.','Entiendo lo que quieres decir, pero pienso de otra manera.']],
 [['bilan','balance / repaso'],['défi','reto'],['habitude','hábito'],['progrès','progreso'],['objectif','objetivo'],['confiance','confianza'],['réussite','éxito'],['Même si je fais des erreurs, je continue à pratiquer.','Aunque cometa errores, sigo practicando.']]
];

const a1Test=[
 ['Bonjour','Hola'],['Merci','Gracias'],['maison','casa'],['école','escuela'],['eau','agua'],['ville','ciudad'],['avoir','tener'],['aller','ir'],['manger','comer'],['dormir','dormir'],['heureux','feliz'],['fatigué','cansado'],['au revoir','Adiós'],['apprendre','aprender'],['je parle français','hablo francés']
];

let state=JSON.parse(localStorage.getItem(FRENCH_STATE_KEY)||'null')||{course:'A1',level:0,completed:[],xp:0,a2Unlocked:false,a2Level:0,a2Completed:[],a2TestPassed:false,b1Unlocked:false,b1Level:0,b1Completed:[],b1TestPassed:false};
// Migración de partidas A1 antiguas.
state.course=state.course||'A1'; state.level=Number.isInteger(state.level)?state.level:0; state.completed=Array.isArray(state.completed)?state.completed:[];
state.xp=Number(state.xp||0); state.a2Unlocked=!!state.a2Unlocked; state.a2Level=Number.isInteger(state.a2Level)?state.a2Level:0; state.a2Completed=Array.isArray(state.a2Completed)?state.a2Completed:[]; state.a2TestPassed=!!state.a2TestPassed; state.b1Unlocked=!!state.b1Unlocked; state.b1Level=Number.isInteger(state.b1Level)?state.b1Level:0; state.b1Completed=Array.isArray(state.b1Completed)?state.b1Completed:[]; state.b1TestPassed=!!state.b1TestPassed;
if(state.completed.length>=20)state.a2Unlocked=true; if(state.a2Completed.length>=20)state.b1Unlocked=true;

function save(){localStorage.setItem(FRENCH_STATE_KEY,JSON.stringify(state));update();}
function update(){const xp=document.getElementById('xp');const progress=document.getElementById('progress');const levelText=document.getElementById('levelText');if(xp)xp.textContent=state.xp;if(progress){const done=state.course==='A1'?state.completed.length:state.course==='A2'?state.a2Completed.length:state.b1Completed.length;progress.style.width=((done/20)*100)+'%';}if(levelText){const lv=state.course==='A1'?state.level:state.course==='A2'?state.a2Level:state.b1Level;levelText.textContent='Nivel '+(lv+1)+' / 20';}}
function courseCompleteA1(){return state.completed.length>=20;}

function showMap(){
  if(state.completed.length>=20)state.a2Unlocked=true;
  if(state.a2Completed.length>=20)state.b1Unlocked=true;
  const course=state.course;
  const isA1=course==='A1', isA2=course==='A2', isB1=course==='B1';
  const topics=isA1?a1Topics:isA2?a2Topics:b1Topics;
  const completed=isA1?state.completed:isA2?state.a2Completed:state.b1Completed;
  const current=isA1?state.level:isA2?state.a2Level:state.b1Level;
  const title='Francés '+course;
  const subtitle=isA1?'Primer módulo de francés.':isA2?'Segundo módulo: francés básico alto, con frases y situaciones más completas.':'Tercer módulo: francés intermedio, más natural y orientado a situaciones reales.';
  document.getElementById('app').innerHTML=`<div class="fr-card">
    <div class="fr-header"><div><h1>🇫🇷 ${title}</h1><p>${subtitle}</p></div><div class="fr-stats"><span>⭐ <b id="xp">${state.xp}</b> XP</span></div></div>
    <div class="fr-course-tabs"><button class="fr-tab ${isA1?'active':''}" id="tabA1">A1</button><button class="fr-tab ${isA2?'active':''} ${state.a2Unlocked?'':'locked'}" id="tabA2" ${state.a2Unlocked?'':'disabled'}>A2 ${state.a2Unlocked?'':'🔒'}</button><button class="fr-tab ${isB1?'active':''} ${state.b1Unlocked?'':'locked'}" id="tabB1" ${state.b1Unlocked?'':'disabled'}>B1 ${state.b1Unlocked?'':'🔒'}</button></div>
    ${isA1&&!state.a2Unlocked?`<div class="fr-unlock"><h3>🔒 A2 bloqueado</h3><p>Completa los 20 niveles de A1 o supera la prueba final con <strong>14 de 15</strong> aciertos.</p><button class="fr-main" id="frTestA1">📝 Hacer prueba final A1</button><button class="fr-back" id="frCodeA2">🔑 Introducir código 1111</button></div>`:''}
    ${isA2&&!state.b1Unlocked?`<div class="fr-unlock"><h3>🔒 B1 bloqueado</h3><p>Completa los 20 niveles de A2 o supera la prueba final A2 con <strong>14 de 15</strong> aciertos.</p><button class="fr-main" id="frTestA2">📝 Hacer prueba final A2</button><button class="fr-back" id="frCodeB1">🔑 Introducir código 1111</button></div>`:''}
    <div class="fr-progress"><div id="progress"></div></div><div class="fr-levels">${topics.map((t,i)=>`<button class="fr-level ${completed.includes(i)?'done':''} ${i<=current?'open':'locked'}" ${i<=current?'':'disabled'} data-level="${i}"><b>${i+1}</b><span>${t}</span><small>${completed.includes(i)?'✓ Completado':i===current?'▶ Empezar':'🔒 Bloqueado'}</small></button>`).join('')}</div>
    ${isA1&&state.a2Unlocked?'<div class="fr-unlock"><h3>🎉 ¡A2 desbloqueado!</h3><button class="fr-main" id="goA2">🇫🇷 Entrar en A2</button></div>':''}
    ${isA2&&state.b1Unlocked?'<div class="fr-unlock"><h3>🎉 ¡B1 desbloqueado!</h3><button class="fr-main" id="goB1">🇫🇷 Entrar en B1</button></div>':''}
    ${!isA1?'<div class="fr-unlock"><p>Curso anterior:</p><button class="fr-back" id="goA1">← Volver a A1</button></div>':''}
    ${isB1?'<div class="fr-unlock"><p>Curso anterior:</p><button class="fr-back" id="goA2">← Volver a A2</button></div>':''}
    <button class="fr-back" id="frBackHome">🇬🇧 Volver a inglés</button>
  </div>`;
  update();
  document.querySelectorAll('.fr-level[data-level]').forEach(btn=>btn.addEventListener('click',()=>startLevel(Number(btn.dataset.level))));
  document.getElementById('tabA1').addEventListener('click',()=>{state.course='A1';showMap();});
  document.getElementById('tabA2').addEventListener('click',()=>{if(state.a2Unlocked){state.course='A2';showMap();}});
  document.getElementById('tabB1').addEventListener('click',()=>{if(state.b1Unlocked){state.course='B1';showMap();}});
  const goA2=document.getElementById('goA2');if(goA2)goA2.addEventListener('click',()=>{state.course='A2';showMap();});
  const goB1=document.getElementById('goB1');if(goB1)goB1.addEventListener('click',()=>{state.course='B1';showMap();});
  const goA1=document.getElementById('goA1');if(goA1)goA1.addEventListener('click',()=>{state.course='A1';showMap();});
  const test=document.getElementById('frTestA1');if(test)test.addEventListener('click',showA1Test);
  const test2=document.getElementById('frTestA2');if(test2)test2.addEventListener('click',showA2Test);
  const codeA2=document.getElementById('frCodeA2');if(codeA2)codeA2.addEventListener('click',()=>unlockWithCode('A2'));
  const codeB1=document.getElementById('frCodeB1');if(codeB1)codeB1.addEventListener('click',()=>unlockWithCode('B1'));
  document.getElementById('frBackHome').addEventListener('click',()=>location.href='index.html');
}
function unlockWithCode(target){const c=prompt('Introduce el código para desbloquear '+target+':');if(c!=='1111'){if(c!==null)alert('Código incorrecto.');return;}if(target==='A2'){state.a2Unlocked=true;state.course='A2';}else{state.b1Unlocked=true;state.course='B1';}save();showMap();}

function speakFrench(text){if(!('speechSynthesis' in window))return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='fr-FR';u.rate=0.78;const voices=window.speechSynthesis.getVoices();const voice=voices.find(v=>/^fr-FR$/i.test(v.lang))||voices.find(v=>/^fr[-_]/i.test(v.lang));if(voice)u.voice=voice;window.speechSynthesis.speak(u);}
function speakSpanish(text){if(!('speechSynthesis' in window))return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(String(text));u.lang='es-ES';u.rate=0.90;const voices=window.speechSynthesis.getVoices();const voice=voices.find(v=>/^es-ES$/i.test(v.lang))||voices.find(v=>/^es[-_]/i.test(v.lang));if(voice)u.voice=voice;window.speechSynthesis.speak(u);}

function getCourseData(){return state.course==='A1'?words:state.course==='A2'?a2Levels:b1Levels;}
function getCourseTopics(){return state.course==='A1'?a1Topics:state.course==='A2'?a2Topics:b1Topics;}
function getCourseCompleted(){return state.course==='A1'?state.completed:state.course==='A2'?state.a2Completed:state.b1Completed;}

function startLevel(n){
  const course=state.course; const topics=getCourseTopics(); const data=getCourseData();
  if(course==='A1')state.level=n;else if(course==='A2')state.a2Level=n;else state.b1Level=n;
  let q;
  if(course==='A1'){const startIndex=(n*2)%Math.max(1,words.length-12);q=shuffle(words.slice(startIndex,startIndex+12)).slice(0,4);}
  else q=shuffle(data[n]||data[0]).slice(0,4);
  let i=0,correct=0,answerLocked=false,advanceTimer=null;
  function render(){
    answerLocked=false; const [fr,es]=q[i];
    const all=course==='A1'?words:data.flat();
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
    if(ok){correct++;state.xp+=10;fb.innerHTML='<div class="ok">✅ ¡Muy bien!</div>'+example+'<button type="button" class="fr-listen" id="frExampleListen">🔊 Escuchar la frase en francés</button><button type="button" class="fr-listen" id="frSpanishListen">🇪🇸 Escuchar en español</button><div class="fr-next">⏱️ Siguiente pregunta en 4 segundos…</div>'}
    else fb.innerHTML='<div class="bad">❌ Correcto: <strong>'+c+'</strong></div>'+example+'<button type="button" class="fr-listen" id="frExampleListen">🔊 Escuchar la frase en francés</button><button type="button" class="fr-listen" id="frSpanishListen">🇪🇸 Escuchar en español</button><div class="fr-next">⏱️ Siguiente pregunta en 4 segundos…</div>';
    const eb=document.getElementById('frExampleListen');if(eb)eb.addEventListener('click',()=>speakFrench(audioText));
    const esb=document.getElementById('frSpanishListen');if(esb)esb.addEventListener('click',()=>speakSpanish(c));
    speakFrench(audioText);save();
    advanceTimer=setTimeout(()=>{advanceTimer=null;i++;if(i<q.length){render();}else completeLevel(ln,correct,q.length);},4000);
  }
  render();
}

function completeLevel(ln,correct,total){
  if(state.course==='A1'){if(!state.completed.includes(ln))state.completed.push(ln);if(ln<19)state.level=Math.max(state.level,ln+1);}
  else if(state.course==='A2'){if(!state.a2Completed.includes(ln))state.a2Completed.push(ln);if(ln<19)state.a2Level=Math.max(state.a2Level,ln+1);}
  else {if(!state.b1Completed.includes(ln))state.b1Completed.push(ln);if(ln<19)state.b1Level=Math.max(state.b1Level,ln+1);}
  state.xp+=50;
  if(state.completed.length>=20)state.a2Unlocked=true;
  if(state.a2Completed.length>=20)state.b1Unlocked=true;
  save();
  const last=state.course==='A1'?state.completed.length>=20:state.course==='A2'?state.a2Completed.length>=20:state.b1Completed.length>=20;
  document.getElementById('app').innerHTML=`<div class="fr-card center"><div class="fr-big">🎉</div><h2>¡Nivel completado!</h2><p>Has acertado ${correct} de ${total}.</p><p>⭐ +50 XP</p>${last?`<div class="fr-unlock"><h3>🏆 ¡Has terminado ${state.course}!</h3><p>${state.course==='A1'?'A2 ya está disponible.':state.course==='A2'?'B1 ya está disponible.':'Has completado todo el contenido B1.'}</p></div>`:''}<button class="fr-main" id="frContinue">Continuar</button></div>`;
  document.getElementById('frContinue').addEventListener('click',()=>showMap());
}

function showA1Test(){
  let i=0,score=0,locked=false;const q=shuffle(a1Test);
  function render(){locked=false;const [fr,es]=q[i];const opts=shuffle([es,...shuffle(a1Test).filter(x=>x[1]!==es).slice(0,3).map(x=>x[1])]);document.getElementById('app').innerHTML=`<div class="fr-card"><div class="fr-top"><button class="fr-back" id="testBack">← Volver</button><span>🇫🇷 Prueba final A1</span></div><h2>${fr}</h2><button class="fr-listen" id="testListen">🔊 Escuchar</button><p>¿Qué significa?</p><div class="fr-answers" id="testAnswers">${opts.map((o,k)=>`<button type="button" data-k="${k}">${o}</button>`).join('')}</div><div id="testFeedback"></div><small>Pregunta ${i+1} de 15 · Necesitas 14/15</small></div>`;document.getElementById('testBack').addEventListener('click',showMap);document.getElementById('testListen').addEventListener('click',()=>speakFrench(fr));setTimeout(()=>speakFrench(fr),180);document.querySelectorAll('#testAnswers button').forEach(b=>b.addEventListener('click',()=>{if(locked)return;locked=true;document.querySelectorAll('#testAnswers button').forEach(x=>x.disabled=true);if(b.textContent===es)score++;const fb=document.getElementById('testFeedback');fb.innerHTML=b.textContent===es?'<div class="ok">✅ Correcto</div>':'<div class="bad">❌ Correcto: <strong>'+es+'</strong></div>';setTimeout(()=>{i++;if(i<15)render();else finish();},1200);}));}
  function finish(){const passed=score>=14;if(passed){state.a2Unlocked=true;state.a2TestPassed=true;state.course='A2';state.xp+=100;save();document.getElementById('app').innerHTML=`<div class="fr-card center"><div class="fr-big">🏆</div><h2>¡Prueba superada!</h2><p>${score}/15 correctas.</p><p>🇫🇷 A2 está desbloqueado.</p><button class="fr-main" id="goA2Test">Entrar en A2</button></div>`;document.getElementById('goA2Test').addEventListener('click',showMap);}else{document.getElementById('app').innerHTML=`<div class="fr-card center"><div class="fr-big">📚</div><h2>Aún no has llegado a 90 %</h2><p>Resultado: ${score}/15. Necesitas 14/15.</p><button class="fr-main" id="retryTest">Repetir prueba</button><button class="fr-back" id="backTest">Volver al mapa</button></div>`;document.getElementById('retryTest').addEventListener('click',showA1Test);document.getElementById('backTest').addEventListener('click',showMap);}}
  render();
}

function showA2Test(){
  const pool=shuffle(a2Levels.flat().filter(x=>x[0])); let i=0,score=0,locked=false; const q=pool.slice(0,15);
  function render(){locked=false;const [fr,es]=q[i];const opts=shuffle([es,...shuffle(pool).filter(x=>x[1]!==es).slice(0,3).map(x=>x[1])]);document.getElementById('app').innerHTML=`<div class="fr-card"><div class="fr-top"><button class="fr-back" id="testBack">← Volver</button><span>🇫🇷 Prueba final A2</span></div><h2>${fr}</h2><button class="fr-listen" id="testListen">🔊 Escuchar</button><p>¿Qué significa?</p><div class="fr-answers" id="testAnswers">${opts.map((o,k)=>`<button type="button" data-k="${k}">${o}</button>`).join('')}</div><div id="testFeedback"></div><small>Pregunta ${i+1} de 15 · Necesitas 14/15</small></div>`;document.getElementById('testBack').addEventListener('click',showMap);document.getElementById('testListen').addEventListener('click',()=>speakFrench(fr));setTimeout(()=>speakFrench(fr),180);document.querySelectorAll('#testAnswers button').forEach(b=>b.addEventListener('click',()=>{if(locked)return;locked=true;document.querySelectorAll('#testAnswers button').forEach(x=>x.disabled=true);if(b.textContent===es)score++;const fb=document.getElementById('testFeedback');fb.innerHTML=b.textContent===es?'<div class="ok">✅ Correcto</div>':'<div class="bad">❌ Correcto: <strong>'+es+'</strong></div>';setTimeout(()=>{i++;if(i<15)render();else finish();},1200);}));}
  function finish(){const passed=score>=14;if(passed){state.b1Unlocked=true;state.b1TestPassed=true;state.course='B1';state.xp+=100;save();document.getElementById('app').innerHTML=`<div class="fr-card center"><div class="fr-big">🏆</div><h2>¡Prueba A2 superada!</h2><p>${score}/15 correctas.</p><p>🇫🇷 B1 está desbloqueado.</p><button class="fr-main" id="goB1Test">Entrar en B1</button></div>`;document.getElementById('goB1Test').addEventListener('click',showMap);}else{document.getElementById('app').innerHTML=`<div class="fr-card center"><div class="fr-big">📚</div><h2>Aún no has llegado a 90 %</h2><p>Resultado: ${score}/15. Necesitas 14/15.</p><button class="fr-main" id="retryTest">Repetir prueba</button><button class="fr-back" id="backTest">Volver al mapa</button></div>`;document.getElementById('retryTest').addEventListener('click',showA2Test);document.getElementById('backTest').addEventListener('click',showMap);}}
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
