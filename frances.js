const FRENCH_STATE_KEY='englishFunFrenchState';
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
const levelTopics=['Saludos y cortesía','Personas y familia','Casa','Ciudad','Comida y bebida','Rutinas','Tiempo','Verbos básicos','Adjetivos','Repaso 1','Viajes','Compras','Restaurante','Trabajo y estudios','Tiempo libre','Opiniones sencillas','Pasado básico','Planes','Situaciones prácticas','Misión final'];
let state=JSON.parse(localStorage.getItem(FRENCH_STATE_KEY)||'null')||{level:0,completed:[],xp:0};
function save(){localStorage.setItem(FRENCH_STATE_KEY,JSON.stringify(state));update();}
function update(){const xp=document.getElementById('xp');const progress=document.getElementById('progress');const levelText=document.getElementById('levelText');if(xp)xp.textContent=state.xp;if(progress)progress.style.width=((state.completed.length/20)*100)+'%';if(levelText)levelText.textContent='Nivel '+(state.level+1)+' / 20';}
function showMap(){document.getElementById('app').innerHTML=`<div class="fr-card"><h1>🇫🇷 Francés A1</h1><p>Primer módulo independiente de francés.</p><div class="fr-progress"><div id="progress"></div></div><div class="fr-levels">${levelTopics.map((t,i)=>`<button class="fr-level ${state.completed.includes(i)?'done':''} ${i<=state.level?'open':'locked'}" ${i<=state.level?'':'disabled'} onclick="startLevel(${i})"><b>${i+1}</b><span>${t}</span><small>${state.completed.includes(i)?'✓ Completado':i===state.level?'▶ Empezar':'🔒 Bloqueado'}</small></button>`).join('')}</div><button class="fr-back" onclick="location.href='index.html'">🇬🇧 Volver a inglés</button></div>`;update();}
function startLevel(n){
  state.level=n;
  const startIndex=(n*2)%Math.max(1,words.length-12);
  const pool=shuffle(words.slice(startIndex,startIndex+12));
  const q=pool.slice(0,4);
  let i=0,correct=0,answerLocked=false;

  function render(){
    answerLocked=false;
    const [fr,es]=q[i];
    const opts=shuffle([es,...shuffle(words).filter(x=>x[1]!==es).slice(0,3).map(x=>x[1])]);
    document.getElementById('app').innerHTML=`<div class="fr-card"><div class="fr-top"><button class="fr-back" id="frBack">← Niveles</button><span>🇫🇷 A1 · ${levelTopics[n]}</span></div><h2>${fr}</h2><p>¿Qué significa?</p><div class="fr-answers" id="frAnswers">${opts.map((o,k)=>`<button type="button" data-answer-index="${k}">${o}</button>`).join('')}</div><div id="frFeedback"></div><small>Pregunta ${i+1} de ${q.length}</small></div>`;

    document.getElementById('frBack').addEventListener('click',showMap);
    document.querySelectorAll('#frAnswers button').forEach(btn=>{
      btn.addEventListener('click',()=>{
        if(answerLocked)return;
        answerLocked=true;
        document.querySelectorAll('#frAnswers button').forEach(b=>b.disabled=true);
        answer(btn.textContent,es,n);
      });
    });
  }

  function answer(a,c,ln){
    const fb=document.getElementById('frFeedback');
    if(!fb)return;
    const example=getFrenchExample(c);
    if(a===c){
      correct++;
      state.xp+=10;
      fb.innerHTML='<div class="ok">✅ ¡Muy bien!</div>'+example;
    }else{
      fb.innerHTML='<div class="bad">❌ Correcto: <strong>'+c+'</strong></div>'+example;
    }
    save();
    setTimeout(()=>{
      i++;
      if(i<q.length){
        render();
      }else{
        if(!state.completed.includes(ln))state.completed.push(ln);
        if(ln<19)state.level=Math.max(state.level,ln+1);
        state.xp+=50;
        save();
        document.getElementById('app').innerHTML=`<div class="fr-card center"><div class="fr-big">🎉</div><h2>¡Nivel completado!</h2><p>Has acertado ${correct} de ${q.length}.</p><p>⭐ +50 XP</p><button class="fr-main" id="frContinue">Continuar</button></div>`;
        document.getElementById('frContinue').addEventListener('click',showMap);
      }
    },4000);
  }

  render();
}

function getFrenchExample(fr){
  const examples={
    'Bonjour':'Bonjour, comment ça va ? — Hola, ¿cómo estás?',
    'Salut':'Salut, à demain ! — ¡Hola, hasta mañana!',
    'Merci':'Merci beaucoup pour ton aide. — Muchas gracias por tu ayuda.',
    'S’il vous plaît':'Un café, s’il vous plaît. — Un café, por favor.',
    'Au revoir':'Au revoir, à demain ! — ¡Adiós, hasta mañana!',
    'oui':'Oui, je comprends. — Sí, entiendo.',
    'non':'Non, je ne sais pas. — No, no lo sé.',
    'ami':'C’est mon ami. — Es mi amigo.',
    'famille':'Ma famille habite ici. — Mi familia vive aquí.',
    'maison':'Ma maison est petite. — Mi casa es pequeña.',
    'école':'Je vais à l’école. — Voy a la escuela.',
    'travail':'Je suis au travail. — Estoy en el trabajo.',
    'eau':'Je bois de l’eau. — Bebo agua.',
    'pain':'Je mange du pain. — Como pan.',
    'café':'J’aime le café. — Me gusta el café.',
    'ville':'J’habite dans une grande ville. — Vivo en una ciudad grande.',
    'rue':'La rue est calme. — La calle está tranquila.',
    'voiture':'Ma voiture est devant la maison. — Mi coche está delante de la casa.',
    'livre':'Je lis un livre. — Leo un libro.',
    'jour':'Bonne journée ! — ¡Que tengas un buen día!',
    'nuit':'Bonne nuit ! — ¡Buenas noches!',
    'matin':'Je travaille le matin. — Trabajo por la mañana.',
    'soir':'Je regarde la télé le soir. — Veo la televisión por la noche.',
    'aujourd’hui':'Aujourd’hui, je travaille. — Hoy trabajo.',
    'demain':'Demain, je vais à l’école. — Mañana voy a la escuela.',
    'hier':'Hier, j’étais à la maison. — Ayer estaba en casa.',
    'être':'Je suis fatigué. — Estoy cansado.',
    'avoir':'J’ai un livre. — Tengo un libro.',
    'aller':'Je vais au travail. — Voy al trabajo.',
    'faire':'Je fais mes devoirs. — Hago mis deberes.',
    'aimer':'J’aime le français. — Me gusta el francés.',
    'parler':'Je parle français. — Hablo francés.',
    'écouter':'J’écoute de la musique. — Escucho música.',
    'manger':'J’aime manger du pain. — Me gusta comer pan.',
    'boire':'Je veux boire de l’eau. — Quiero beber agua.',
    'dormir':'Je vais dormir. — Voy a dormir.',
    'lire':'J’aime lire. — Me gusta leer.',
    'écrire':'J’aime écrire. — Me gusta escribir.',
    'comprendre':'Je comprends la question. — Entiendo la pregunta.',
    'apprendre':'J’apprends le français. — Aprendo francés.',
    'grand':'Mon appartement est grand. — Mi apartamento es grande.',
    'petit':'Le café est petit. — El café es pequeño.',
    'bon':'C’est très bon ! — ¡Está muy bueno!',
    'mauvais':'Ce n’est pas mauvais. — No está mal.',
    'facile':'C’est facile. — Es fácil.',
    'difficile':'C’est difficile. — Es difícil.',
    'heureux':'Je suis heureux aujourd’hui. — Estoy feliz hoy.',
    'fatigué':'Je suis très fatigué. — Estoy muy cansado.',
    'aujourd’hui je travaille':'Aujourd’hui, je travaille à la maison. — Hoy trabajo en casa.',
    'j’aime le café':'J’aime le café le matin. — Me gusta el café por la mañana.',
    'je vais à l’école':'Je vais à l’école à huit heures. — Voy a la escuela a las ocho.',
    'je parle français':'Je parle français avec mon ami. — Hablo francés con mi amigo.'
  };
  const text=examples[fr]||`${fr}. — Ejemplo de uso en francés.`;
  return '<div class="fr-example"><b>🗣️ En una frase:</b><br>'+text+'</div>';
}
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
showMap();
