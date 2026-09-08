/* English Fun Start · Sistema de recompensas
   Capa independiente: no sustituye ni modifica los juegos existentes. */
(function(){
  const REWARD_VERSION = "1";
  const keys = {
    chests: "rewardChests",
    bonus: "bonusChallenges",
    opened: "openedChests",
    surprises: "surprises",
    medals: "rewardMedals"
  };

  function ensureRewards(){
    if(!Array.isArray(state.rewardChests)) state.rewardChests=[];
    if(!Array.isArray(state.bonusChallenges)) state.bonusChallenges=[];
    if(!Array.isArray(state.openedChests)) state.openedChests=[];
    if(!Array.isArray(state.surprises)) state.surprises=[];
    if(!Array.isArray(state.rewardMedals)) state.rewardMedals=[];
    if(!state.rewardSystemVersion) state.rewardSystemVersion=REWARD_VERSION;
  }
  ensureRewards();

  const rewardCatalog = {
    chest:{icon:"🎁", title:"¡Has conseguido un cofre!", text:"Ábrelo para descubrir qué premio contiene."},
    bonus:{icon:"⭐", title:"¡Reto extra desbloqueado!", text:"Has conseguido un reto especial fuera del recorrido normal."},
    xp:{icon:"⚡", title:"¡Bonificación de XP!", text:"Un pequeño premio por seguir avanzando."},
    surprise:{icon:"🎲", title:"¡Experiencia imprevista!", text:"A veces estudiar trae sorpresas..."}
  };

  function totalCompleted(){ return Array.isArray(state.completedLevels)?state.completedLevels.length:0; }
  function hasChest(id){ return state.rewardChests.some(c=>c.id===id); }
  function addChest(reason){
    const id="chest-"+Date.now()+"-"+Math.random().toString(36).slice(2,7);
    state.rewardChests.push({id,reason,course:activeCourse,created:Date.now()});
    return id;
  }

  function processRewardEvent(type, data){
    ensureRewards();
    let messages=[];
    if(type==="levelComplete"){
      const n=totalCompleted();
      // Cofre cada 3 niveles completados.
      if(n>0 && n%3===0){
        addChest("Has completado "+n+" niveles");
        messages.push("🎁 ¡COFRE CONSEGUIDO! Cada 3 niveles ganas un cofre.");
      }
      // Recompensa por racha real de aciertos.
      if(state.streak>=5 && !state.rewardMedals.includes("streak5")){
        state.rewardMedals.push("streak5");
        addChest("Racha de 5 aciertos");
        messages.push("🔥 ¡Racha de 5! Has ganado otro cofre.");
      }
      // Pequeña probabilidad de experiencia inesperada.
      if(Math.random()<0.18){
        const roll=Math.random();
        if(roll<0.55){
          const bonus=25+Math.floor(Math.random()*4)*10;
          state.xp+=bonus; state.score+=bonus;
          state.surprises.push({date:Date.now(),type:"xp",value:bonus,course:activeCourse});
          messages.push("🎲 EXPERIENCIA IMPREVISTA: +"+bonus+" XP");
        }else if(roll<0.85){
          addChest("Experiencia imprevista");
          state.surprises.push({date:Date.now(),type:"chest",course:activeCourse});
          messages.push("🎲 EXPERIENCIA IMPREVISTA: ¡has encontrado un cofre!");
        }else{
          state.bonusChallenges.push({id:"bonus-"+Date.now()+"-"+Math.random().toString(36).slice(2,6),course:activeCourse,created:Date.now(),title:"Reto sorpresa"});
          state.surprises.push({date:Date.now(),type:"bonus",course:activeCourse});
          messages.push("🎲 EXPERIENCIA IMPREVISTA: ¡reto extra desbloqueado!");
        }
      }
      if(messages.length) state.lastRewardMessage=messages.join("<br>");
    }
    saveState();
    updateRewardHome();
    return messages;
  }
  window.processRewardEvent=processRewardEvent;

  function openRewardRoom(){
    ensureRewards();
    const modal=document.getElementById("rewardModal")||createRewardModal();
    renderRewardRoom();
    modal.style.display="flex";
  }
  window.openRewardRoom=openRewardRoom;

  function closeRewardRoom(){ const m=document.getElementById("rewardModal"); if(m)m.style.display="none"; }
  window.closeRewardRoom=closeRewardRoom;

  function createRewardModal(){
    const m=document.createElement("div");
    m.id="rewardModal";
    m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.62);z-index:10000;display:none;align-items:center;justify-content:center;padding:18px;overflow:auto";
    m.innerHTML='<div id="rewardBox" style="background:#fff;border-radius:24px;padding:22px;max-width:520px;width:100%;max-height:90vh;overflow:auto;box-shadow:0 20px 60px rgba(0,0,0,.28)"><div id="rewardContent"></div><button class="secondary-button" style="width:100%;margin-top:10px" onclick="closeRewardRoom()">Cerrar</button></div>';
    document.body.appendChild(m);
    return m;
  }

  function renderRewardRoom(){
    const content=document.getElementById("rewardContent"); if(!content)return;
    ensureRewards();
    const unopened=state.rewardChests.filter(c=>!state.openedChests.includes(c.id));
    const bonus=state.bonusChallenges.length;
    content.innerHTML=`<div class="center"><div style="font-size:60px">🏆</div><h2>🎁 Sala de recompensas</h2><p>Los premios son extras: <strong>no necesitas</strong> conseguirlos para avanzar por los cursos.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0"><div class="card" style="margin:0;padding:14px"><div style="font-size:32px">📦</div><strong>${unopened.length}</strong><br><span class="small">Cofres por abrir</span></div><div class="card" style="margin:0;padding:14px"><div style="font-size:32px">⭐</div><strong>${bonus}</strong><br><span class="small">Retos extra</span></div></div></div>`;
    if(unopened.length){
      content.innerHTML+=`<div class="card" style="margin:12px 0"><h3>📦 Tus cofres</h3><p class="small">Cada cofre contiene un premio aleatorio. Algunos desbloquean un reto especial.</p><div class="answers">${unopened.map((c,i)=>`<button class="main-button" onclick="openChest('${c.id}')">🎁 Abrir cofre ${i+1}</button>`).join("")}</div></div>`;
    }
    if(bonus){
      content.innerHTML+=`<div class="card" style="margin:12px 0"><h3>⭐ Retos extra</h3><p>Estos retos no sustituyen ningún nivel. Son pequeñas pruebas sorpresa para conseguir XP.</p><button class="main-button" onclick="startBonusChallenge()">🎯 Jugar un reto extra</button></div>`;
    }
    if(!unopened.length&&!bonus) content.innerHTML+=`<div class="feedback correct center">✨ No tienes premios pendientes ahora mismo.<br><br>¡Sigue aprendiendo! Los próximos pueden aparecer al completar niveles.</div>`;
    const medals=state.rewardMedals||[];
    content.innerHTML+=`<div class="small center" style="margin-top:15px">🏅 Logros: ${medals.includes("streak5")?"🔥 Racha de 5": "Sigue jugando para conseguir tu primer logro"}</div>`;
  }

  function openChest(id){
    ensureRewards();
    const chest=state.rewardChests.find(c=>c.id===id); if(!chest||state.openedChests.includes(id))return;
    state.openedChests.push(id);
    const roll=Math.random();
    let reward;
    if(roll<0.45){
      const amount=50+Math.floor(Math.random()*4)*25;
      state.xp+=amount; state.score+=amount; reward={icon:"⚡",title:"¡XP extra!",text:`Has ganado <strong>+${amount} XP</strong> y <strong>+${amount} puntos</strong>.`};
    }else if(roll<0.75){
      const id2="bonus-"+Date.now()+"-"+Math.random().toString(36).slice(2,7);
      state.bonusChallenges.push({id:id2,course:activeCourse,created:Date.now(),title:"Reto del cofre"});
      reward={icon:"🎯",title:"¡Nivel extra desbloqueado!",text:"Has conseguido un <strong>reto extra</strong>. No afecta al recorrido normal y puedes jugarlo cuando quieras."};
    }else if(roll<0.93){
      state.xp+=75;state.score+=75;
      reward={icon:"🪙",title:"¡Cofre de oro!",text:"Has ganado <strong>+75 XP</strong> y <strong>+75 puntos</strong>."};
    }else{
      state.bonusChallenges.push({id:"bonus-"+Date.now()+"-"+Math.random().toString(36).slice(2,7),course:activeCourse,created:Date.now(),title:"Reto legendario"});
      state.xp+=100;state.score+=100;
      reward={icon:"👑",title:"¡PREMIO LEGENDARIO!",text:"Has desbloqueado un <strong>reto extra</strong> y has ganado <strong>+100 XP</strong>."};
    }
    saveState();updateRewardHome();
    const content=document.getElementById("rewardContent");
    if(content){content.innerHTML=`<div class="center"><div style="font-size:80px">${reward.icon}</div><h2>${reward.title}</h2><p>${reward.text}</p><p class="small">🎁 Cofre obtenido: ${chest.reason}.</p><button class="main-button" onclick="renderRewardRoom()">🎁 Volver a mis recompensas</button></div>`;}
  }
  window.openChest=openChest;
  window.renderRewardRoom=renderRewardRoom;

  function startBonusChallenge(){
    ensureRewards();
    if(!state.bonusChallenges.length){renderRewardRoom();return;}
    const ticket=state.bonusChallenges[0];
    const questions=getBonusQuestions(ticket.course||activeCourse);
    const m=document.getElementById("rewardModal");
    const content=document.getElementById("rewardContent");
    let i=0,score=0;
    function render(){
      const q=questions[i];
      content.innerHTML=`<div class="center"><div style="font-size:55px">🎯</div><div class="small">RETO EXTRA · ${i+1} DE ${questions.length}</div><h2>${q.title}</h2><p>${q.prompt}</p><div class="answers">${shuffle(q.options).map(o=>`<button class="answer" data-a="${esc(o)}">${o}</button>`).join("")}</div><div id="bonusFeedback"></div></div>`;
      content.querySelectorAll(".answer").forEach(b=>b.onclick=()=>{content.querySelectorAll(".answer").forEach(x=>x.disabled=true);const ok=b.dataset.a===q.answer;if(ok){score++;state.xp+=15;state.score+=15;state.streak++;}else state.streak=0;saveState();document.getElementById("bonusFeedback").innerHTML=`<div class="feedback ${ok?'correct':'wrong'}">${ok?'🎉 ¡Correcto!':'❌ La correcta era'} <strong>${q.answer}</strong><br><span class="small">${q.explain}</span></div><button class="main-button" style="margin-top:10px">➡️ Continuar</button>`;document.getElementById("bonusFeedback").querySelector("button").onclick=()=>{i++;if(i<questions.length)render();else finish();};});
      setTimeout(()=>{if(q.voice)speakEnglish(q.voice)},150);
    }
    function finish(){
      state.bonusChallenges.shift();state.xp+=50;state.score+=50;saveState();updateRewardHome();
      content.innerHTML=`<div class="center"><div style="font-size:75px">🏆</div><h2>¡Reto extra terminado!</h2><p>Has conseguido <strong>${score}/${questions.length}</strong> aciertos.</p><div class="feedback correct">🎁 +50 XP de premio por completar el reto.</div><button class="main-button" onclick="renderRewardRoom()">🎁 Volver a recompensas</button></div>`;
    }
    m.style.display="flex";render();
  }
  window.startBonusChallenge=startBonusChallenge;

  function getBonusQuestions(course){
    if(course==="A1")return [
      {title:"Reto rápido",prompt:"¿Cuál significa “ayer”?",options:["today","yesterday","tomorrow","early"],answer:"yesterday",explain:"Yesterday = ayer.",voice:"yesterday"},
      {title:"Reto rápido",prompt:"Completa: I ___ coffee every morning.",options:["drink","drank","drunk","drinking"],answer:"drink",explain:"Con una rutina usamos el presente simple.",voice:"I drink coffee every morning."},
      {title:"Reto rápido",prompt:"¿Cuál es la forma correcta?",options:["She have a car","She has a car","She having a car","She had a car now"],answer:"She has a car",explain:"Con she usamos has.",voice:"She has a car."},
      {title:"Reto rápido",prompt:"¿Cómo pedirías agua educadamente?",options:["Give water.","I want water now.","I'd like some water, please.","Water!"],answer:"I'd like some water, please.",explain:"I'd like... es una forma educada de pedir algo.",voice:"I'd like some water, please."},
      {title:"Reto rápido",prompt:"¿Qué significa “I am tired”?",options:["Tengo hambre","Estoy cansado","Tengo prisa","Estoy enfermo"],answer:"Estoy cansado",explain:"Tired = cansado.",voice:"I am tired."}
    ];
    if(course==="A2")return [
      {title:"Reto rápido",prompt:"Completa: I ___ to London last year.",options:["go","went","gone","going"],answer:"went",explain:"Went es el pasado de go.",voice:"I went to London last year."},
      {title:"Reto rápido",prompt:"¿Cuál es más natural para pedir algo?",options:["Give me the menu.","Could I have the menu, please?","Menu now.","I take menu."],answer:"Could I have the menu, please?",explain:"Could I have...? es una petición educada.",voice:"Could I have the menu, please?"},
      {title:"Reto rápido",prompt:"Completa: I have lived here ___ 2022.",options:["for","since","during","from"],answer:"since",explain:"Since se usa con un momento concreto.",voice:"I have lived here since 2022."},
      {title:"Reto rápido",prompt:"¿Qué expresa “I'm going to visit my parents”?",options:["Un plan","Una obligación pasada","Una comparación","Una duda sobre el pasado"],answer:"Un plan",explain:"Be going to se usa para planes e intenciones.",voice:"I'm going to visit my parents."},
      {title:"Reto rápido",prompt:"¿Cuál es correcta?",options:["If it rains, I'll stay home.","If it will rain, I'll stay home.","If it rains, I stayed home.","If rain, I stay home yesterday."],answer:"If it rains, I'll stay home.",explain:"Es un first conditional básico.",voice:"If it rains, I'll stay home."}
    ];
    return [
      {title:"Reto B1+",prompt:"¿Cuál es el pasado de “seek”?",options:["sought","seeked","sook","saught"],answer:"sought",explain:"Seek → sought → sought.",voice:"seek, sought"},
      {title:"Reto B1+",prompt:"¿Qué significa “put off”?",options:["encender","posponer","recoger","descubrir"],answer:"posponer",explain:"Put off = posponer o aplazar.",voice:"put off"},
      {title:"Reto B1+",prompt:"Completa: If I had more time, I ___ more.",options:["travel","would travel","will travel","travelled"],answer:"would travel",explain:"Second conditional: If + past, would + infinitive.",voice:"If I had more time, I would travel more."},
      {title:"Reto B1+",prompt:"¿Cuál es más natural?",options:["I have done a decision.","I have made a decision.","I have taken a decisioning.","I did a decision."],answer:"I have made a decision.",explain:"Make a decision es la colocación habitual.",voice:"I have made a decision."},
      {title:"Reto B1+",prompt:"¿Qué significa “run out of time”?",options:["correr durante un tiempo","tener mucho tiempo","quedarse sin tiempo","organizar el tiempo"],answer:"quedarse sin tiempo",explain:"Run out of = quedarse sin algo.",voice:"We ran out of time."}
    ];
  }

  function updateRewardHome(){
    ensureRewards();
    const n=state.rewardChests.filter(c=>!state.openedChests.includes(c.id)).length;
    const b=state.bonusChallenges.length;
    let card=document.getElementById("rewardHomeCard");
    if(!card){
      card=document.createElement("div");card.id="rewardHomeCard";card.className="card center";card.style.marginTop="16px";
      const home=document.getElementById("homeScreen"); if(home)home.appendChild(card);
    }
    card.innerHTML=`<div style="font-size:42px">${n?"🎁":"🏆"}</div><h3>🎁 Recompensas</h3><p>${n?`Tienes <strong>${n}</strong> cofre${n===1?'':'s'} por abrir.`+ (b?` Además, <strong>${b}</strong> reto${b===1?'':'s'} extra.`:''):b?`Tienes <strong>${b}</strong> reto${b===1?'':'s'} extra desbloqueado${b===1?'':'s'}.`:'Sigue jugando para conseguir cofres, retos y sorpresas.'}</p><button class="secondary-button" onclick="openRewardRoom()">🎁 Abrir sala de recompensas</button>`;
  }

  function esc(t){return String(t).replace(/\\/g,"\\\\").replace(/'/g,"\\'")}
  window.addEventListener("load",()=>setTimeout(updateRewardHome,100));
})();
