/* English Fun Start — conversación de comprensión auditiva.
   Este archivo se carga aparte para que un fallo del juego nuevo nunca impida
   que los juegos anteriores arranquen. */
const listeningConversations={
A1:[
 [
  [["Anna: Hello!","Anna: ¡Hola!"],["Tom: Hi, Anna! How are you?","Tom: ¡Hola, Anna! ¿Cómo estás?"],["Anna: I'm fine, thank you.","Anna: Estoy bien, gracias."]],
  "How is Anna?","¿Cómo está Anna?",["She is fine.","She is tired.","She is angry.","She is at work."],0
 ],
 [
  [["Mum: What do you want for breakfast?","Mamá: ¿Qué quieres para desayunar?"],["Sam: I want some bread and milk.","Sam: Quiero pan y leche."],["Mum: Here you are.","Mamá: Aquí tienes."]],
  "What does Sam want?","¿Qué quiere Sam?",["Bread and milk.","Coffee and cake.","Pizza and water.","An apple."],0
 ],
 [
  [["Lucy: Where is my bag?","Lucy: ¿Dónde está mi bolso?"],["Dad: It is on the chair.","Papá: Está en la silla."],["Lucy: Thank you!","Lucy: ¡Gracias!"]],
  "Where is Lucy's bag?","¿Dónde está el bolso de Lucy?",["On the chair.","On the table.","In the car.","At school."],0
 ],
 [
  [["Ben: What time do you get up?","Ben: ¿A qué hora te levantas?"],["Sara: I get up at seven.","Sara: Me levanto a las siete."],["Ben: Seven? That's early!","Ben: ¿Las siete? ¡Eso es temprano!"]],
  "What time does Sara get up?","¿A qué hora se levanta Sara?",["At seven.","At eight.","At nine.","At six."],0
 ],
 [
  [["Tom: Do you like pizza?","Tom: ¿Te gusta la pizza?"],["Anna: Yes, I love pizza.","Anna: Sí, me encanta la pizza."],["Tom: Me too!","Tom: ¡A mí también!"]],
  "What food does Anna like?","¿Qué comida le gusta a Anna?",["Pizza.","Fish.","Rice.","Salad."],0
 ],
 [
  [["Dad: Are you at home?","Papá: ¿Estás en casa?"],["Paul: Yes, I am in my room.","Paul: Sí, estoy en mi habitación."],["Dad: OK. Dinner is ready.","Papá: Vale. La cena está lista."]],
  "Where is Paul?","¿Dónde está Paul?",["In his room.","At school.","In the kitchen.","At the park."],0
 ],
 [
  [["Shop assistant: Can I help you?","Dependiente: ¿Puedo ayudarte?"],["Emma: Yes, please. I want a blue shirt.","Emma: Sí, por favor. Quiero una camisa azul."],["Shop assistant: Here you are.","Dependiente: Aquí tienes."]],
  "What does Emma want?","¿Qué quiere Emma?",["A blue shirt.","A red dress.","Black shoes.","A green bag."],0
 ],
 [
  [["Mike: What's the weather like?","Mike: ¿Qué tiempo hace?"],["Lucy: It's sunny today.","Lucy: Hoy hace sol."],["Mike: Great! Let's go outside.","Mike: ¡Genial! Vamos fuera."]],
  "What is the weather like?","¿Qué tiempo hace?",["Sunny.","Rainy.","Snowy.","Windy."],0
 ],
 [
  [["Teacher: What's your name?","Profesor: ¿Cómo te llamas?"],["Jack: My name is Jack.","Jack: Me llamo Jack."],["Teacher: Nice to meet you, Jack.","Profesor: Encantado de conocerte, Jack."]],
  "What is the boy's name?","¿Cómo se llama el chico?",["Jack.","John.","James.","Tom."],0
 ],
 [
  [["Anna: Are you hungry?","Anna: ¿Tienes hambre?"],["Ben: Yes, I am.","Ben: Sí."],["Anna: Let's have lunch.","Anna: Vamos a comer."],],
  "Is Ben hungry?","¿Tiene hambre Ben?",["Yes.","No.","He is thirsty.","We don't know."],0
 ]
],
A2:[
 [
  [["Clara: What did you do yesterday?","Clara: ¿Qué hiciste ayer?"],["Mark: I went to the cinema with my brother.","Mark: Fui al cine con mi hermano."],["Clara: Did you enjoy the film?","Clara: ¿Te gustó la película?"],["Mark: Yes, it was really good.","Mark: Sí, estuvo muy bien."]],
  "Where did Mark go?","¿Adónde fue Mark?",["To the cinema.","To the restaurant.","To the gym.","To the station."],0
 ],
 [
  [["Laura: How often do you exercise?","Laura: ¿Con qué frecuencia haces ejercicio?"],["David: I usually go running twice a week.","David: Normalmente salgo a correr dos veces por semana."],["Laura: That's good. I should exercise more.","Laura: Está bien. Debería hacer más ejercicio."]],
  "How often does David run?","¿Con qué frecuencia corre David?",["Twice a week.","Every day.","Once a month.","Three times a day."],0
 ],
 [
  [["Customer: Excuse me, how much is this jacket?","Cliente: Disculpe, ¿cuánto cuesta esta chaqueta?"],["Assistant: It's forty euros.","Dependiente: Cuesta cuarenta euros."],["Customer: That's a little expensive.","Cliente: Es un poco cara."],["Assistant: We have a cheaper one over there.","Dependiente: Tenemos una más barata allí."]],
  "How much is the jacket?","¿Cuánto cuesta la chaqueta?",["Forty euros.","Fourteen euros.","Thirty euros.","Fifty euros."],0
 ],
 [
  [["Waiter: Are you ready to order?","Camarero: ¿Está listo para pedir?"],["Customer: Yes. I'd like the chicken, please.","Cliente: Sí. Quisiera el pollo, por favor."],["Waiter: Would you like anything to drink?","Camarero: ¿Quiere algo de beber?"],["Customer: Just some water, please.","Cliente: Solo un poco de agua, por favor."]],
  "What does the customer order to drink?","¿Qué pide para beber?",["Water.","Coffee.","Juice.","Tea."],0
 ],
 [
  [["Sofia: What are you going to do this weekend?","Sofía: ¿Qué vas a hacer este fin de semana?"],["Alex: I'm going to visit my grandparents.","Alex: Voy a visitar a mis abuelos."],["Sofia: Are you staying there all weekend?","Sofía: ¿Te vas a quedar allí todo el fin de semana?"],["Alex: No, I'm coming back on Sunday.","Alex: No, vuelvo el domingo."]],
  "Who is Alex going to visit?","¿A quién va a visitar Alex?",["His grandparents.","His friends.","His teachers.","His cousins."],0
 ],
 [
  [["Marta: Have you ever been to London?","Marta: ¿Has estado alguna vez en Londres?"],["Luis: Yes, I've been there twice.","Luis: Sí, he estado allí dos veces."],["Marta: Did you like it?","Marta: ¿Te gustó?"],["Luis: Yes, especially the museums.","Luis: Sí, especialmente los museos."]],
  "How many times has Luis been to London?","¿Cuántas veces ha estado Luis en Londres?",["Twice.","Once.","Three times.","Never."],0
 ],
 [
  [["Nina: Excuse me, where's the station?","Nina: Disculpe, ¿dónde está la estación?"],["Man: Go straight ahead and turn left.","Hombre: Siga recto y gire a la izquierda."],["Nina: Is it far?","Nina: ¿Está lejos?"],["Man: No, it's about five minutes on foot.","Hombre: No, está a unos cinco minutos andando."]],
  "How long does it take to walk there?","¿Cuánto se tarda en llegar andando?",["About five minutes.","About ten minutes.","About twenty minutes.","About one hour."],0
 ],
 [
  [["Emma: I don't feel very well today.","Emma: Hoy no me encuentro muy bien."],["Jack: What's wrong?","Jack: ¿Qué te pasa?"],["Emma: I have a headache.","Emma: Me duele la cabeza."],["Jack: You should get some rest.","Jack: Deberías descansar."]],
  "What is wrong with Emma?","¿Qué le pasa a Emma?",["She has a headache.","She has a cold.","She has a broken leg.","She is hungry."],0
 ],
 [
  [["Teacher: Why were you late?","Profesor: ¿Por qué llegaste tarde?"],["Student: The bus was delayed.","Alumno: El autobús se retrasó."],["Teacher: How long did you wait?","Profesor: ¿Cuánto esperaste?"],["Student: About twenty minutes.","Alumno: Unos veinte minutos."]],
  "Why was the student late?","¿Por qué llegó tarde el alumno?",["The bus was delayed.","He missed the train.","He overslept.","It was raining."],0
 ],
 [
  [["Paul: Which phone would you choose?","Paul: ¿Qué teléfono elegirías?"],["Sara: I'd choose the cheaper one.","Sara: Elegiría el más barato."],["Paul: Why?","Paul: ¿Por qué?"],["Sara: I don't need all those extra features.","Sara: No necesito todas esas funciones adicionales."]],
  "Which phone would Sara choose?","¿Qué teléfono elegiría Sara?",["The cheaper one.","The newest one.","The most expensive one.","She doesn't know."],0
 ]
],
B1:[
 [
  [["Anna: How was your trip?","Anna: ¿Qué tal fue tu viaje?"],["Mark: It was great, although the flight was delayed.","Mark: Fue genial, aunque el vuelo se retrasó."],["Anna: How long were you at the airport?","Anna: ¿Cuánto tiempo estuviste en el aeropuerto?"],["Mark: Nearly three hours.","Mark: Casi tres horas."],["Anna: That sounds exhausting.","Anna: Eso suena agotador."]],
  "How long was Mark at the airport?","¿Cuánto tiempo estuvo Mark en el aeropuerto?",["Nearly three hours.","About one hour.","All day.","Two days."],0
 ],
 [
  [["Tom: What do you think about the new project?","Tom: ¿Qué opinas del nuevo proyecto?"],["Lisa: I think it's a good idea, but we need more time.","Lisa: Creo que es una buena idea, pero necesitamos más tiempo."],["Tom: I agree. The deadline is quite tight.","Tom: Estoy de acuerdo. El plazo es bastante ajustado."],["Lisa: Maybe we should ask for another week.","Lisa: Quizá deberíamos pedir otra semana."]],
  "What does Lisa think about the project?","¿Qué piensa Lisa del proyecto?",["It's a good idea.","It's impossible.","It's already finished.","It's too expensive."],0
 ],
 [
  [["Manager: Can you finish the report today?","Jefe: ¿Puedes terminar el informe hoy?"],["David: I'll try, but I still need to check the figures.","David: Lo intentaré, pero todavía tengo que comprobar las cifras."],["Manager: That's fine. Accuracy is more important than speed.","Jefe: Está bien. La precisión es más importante que la velocidad."],["David: I'll send it as soon as it's ready.","David: Lo enviaré en cuanto esté listo."]],
  "What does David still need to do?","¿Qué necesita hacer todavía David?",["Check the figures.","Write the whole report.","Call a client.","Attend a meeting."],0
 ],
 [
  [["Sophie: Have you seen the new app?","Sophie: ¿Has visto la nueva aplicación?"],["James: Yes. I downloaded it yesterday.","James: Sí. Me la descargué ayer."],["Sophie: What do you think of it?","Sophie: ¿Qué te parece?"],["James: It's useful, although the interface is a little confusing.","James: Es útil, aunque la interfaz es un poco confusa."]],
  "What does James think about the app?","¿Qué piensa James de la aplicación?",["It's useful but a little confusing.","It's completely useless.","It's too expensive.","He hasn't used it."],0
 ],
 [
  [["Laura: Did you manage to catch your flight?","Laura: ¿Conseguiste coger el vuelo?"],["Mike: Yes, but only just. The traffic was terrible.","Mike: Sí, pero por poco. El tráfico era terrible."],["Laura: What time did you arrive?","Laura: ¿A qué hora llegaste?"],["Mike: Ten minutes before boarding ended.","Mike: Diez minutos antes de que terminara el embarque."],["Laura: That was close!","Laura: ¡Por poco!"]],
  "Why was Mike almost late?","¿Por qué Mike llegó casi tarde?",["The traffic was terrible.","The flight was cancelled.","He forgot his passport.","The airport was closed."],0
 ],
 [
  [["Doctor: How have you been feeling?","Médico: ¿Cómo te has estado sintiendo?"],["Patient: I've been feeling tired for a few days.","Paciente: Llevo varios días sintiéndome cansado."],["Doctor: Are you sleeping well?","Médico: ¿Duermes bien?"],["Patient: Not really. I've been working late recently.","Paciente: No mucho. Últimamente he estado trabajando hasta tarde."],["Doctor: You should try to get more rest.","Médico: Deberías intentar descansar más."]],
  "Why has the patient been tired?","¿Por qué ha estado cansado el paciente?",["He has been working late.","He has been travelling.","He is ill with a fever.","He has been exercising."],0
 ],
 [
  [["Alice: Are you going to the meeting tomorrow?","Alice: ¿Vas a ir a la reunión mañana?"],["Ben: I might, but I'm waiting for confirmation.","Ben: Puede que sí, pero estoy esperando confirmación."],["Alice: If you go, could you take some notes?","Alice: Si vas, ¿podrías tomar algunas notas?"],["Ben: Sure, no problem.","Ben: Claro, no hay problema."]],
  "What is Ben waiting for?","¿Qué está esperando Ben?",["Confirmation.","A taxi.","A report.","A phone call."],0
 ],
 [
  [["Chris: What would you do if you had more free time?","Chris: ¿Qué harías si tuvieras más tiempo libre?"],["Maria: I'd travel more and learn new things.","Maria: Viajaría más y aprendería cosas nuevas."],["Chris: Where would you go first?","Chris: ¿Adónde irías primero?"],["Maria: Probably Japan. I've always wanted to go there.","Maria: Probablemente a Japón. Siempre he querido ir allí."]],
  "Where would Maria probably go first?","¿Adónde iría probablemente Maria primero?",["Japan.","Italy.","Canada.","Australia."],0
 ],
 [
  [["Peter: Did you hear about the changes at work?","Peter: ¿Has oído hablar de los cambios en el trabajo?"],["Kate: Yes. Apparently, we're going to work remotely twice a week.","Kate: Sí. Al parecer, vamos a trabajar a distancia dos días a la semana."],["Peter: Really? I think that could save us a lot of time.","Peter: ¿De verdad? Creo que eso podría ahorrarnos mucho tiempo."],["Kate: I agree, although I'll miss seeing everyone.","Kate: Estoy de acuerdo, aunque echaré de menos ver a todos."]],
  "How often will they work remotely?","¿Con qué frecuencia trabajarán a distancia?",["Twice a week.","Every day.","Once a week.","Once a month."],0
 ],
 [
  [["Emma: Why are you learning English?","Emma: ¿Por qué estás aprendiendo inglés?"],["Daniel: I need it for work, but I also want to travel more comfortably.","Daniel: Lo necesito para el trabajo, pero también quiero viajar con más comodidad."],["Emma: Are you enjoying the course?","Emma: ¿Estás disfrutando del curso?"],["Daniel: Yes. It's challenging, but I can already notice some progress.","Daniel: Sí. Es difícil, pero ya puedo notar algunos progresos."]],
  "Why does Daniel need English?","¿Por qué necesita Daniel el inglés?",["For work and travelling.","Only for school.","For a new hobby.","To move house."],0
 ]
]
};

// Repite el bloque de conversaciones de forma gradual para los 20 niveles.
// Los niveles iniciales usan diálogos sencillos; los superiores conservan el estilo
// del curso pero cambian la selección para evitar que el ejercicio sea siempre igual.
function getListeningConversation(levelIndex){
  const bank=listeningConversations[activeCourse]||listeningConversations.A1;
  return bank[levelIndex%bank.length];
}
function showConversationListeningGame(){
  const q=getListeningConversation(currentLevel);
  const lines=q[0], question=q[1], qMeaning=q[2], options=q[3], correct=q[4];
  const dialogue=lines.map(x=>`<div class="conversation-line"><strong>${x[0].split(":")[0]}:</strong> ${x[0].replace(/^[^:]+:\s*/,"")}</div>`).join("");
  gameContent.innerHTML=`${gameHeader("🎧 ¿Qué has entendido?","Escucha la conversación y responde. Puedes repetirla y pedir ayuda con cada oración.")}<div class="listen-box"><div class="course-badge">🎧 Comprensión auditiva · ${activeCourse}</div><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center"><button class="speech-button" onclick="playConversation()">▶️ ESCUCHAR CONVERSACIÓN</button><button class="speech-button" onclick="playConversation()">🔁 REPETIR</button></div><div class="small" style="margin-top:8px">Primero intenta entenderla sin mirar el texto.</div></div><div class="question" style="margin-top:18px">${question}</div><div class="answers">${shuffle(options.map((o,i)=>({o,i}))).map(x=>`<button class="answer" onclick="answerConversation(${x.i})">${x.o}</button>`).join("")}</div><div id="conversationFeedback"></div><details style="margin-top:16px"><summary>📖 Ver conversación y ayudas</summary><div class="explanation" style="margin-top:12px">${lines.map((x,i)=>`<div style="padding:10px;border-bottom:1px solid #eee"><strong>🇬🇧 ${x[0]}</strong><br><button class="speech-button" style="margin-top:6px" onclick="speakEnglish('${esc(x[0])}')">🔊 Escuchar frase</button> <button class="secondary-button" onclick="explainConversationLine(${i})">❓ Traducir y explicar</button><div id="convHelp${i}"></div></div>`).join("")}</div></details>`;
  setTimeout(playConversation,300);
}
function playConversation(){
  const lines=getListeningConversation(currentLevel)[0];
  if(!speechEnabled||!("speechSynthesis" in window))return;
  window.speechSynthesis.cancel();
  let i=0;
  function next(){if(i>=lines.length)return;const u=new SpeechSynthesisUtterance(lines[i][0]);u.lang=englishVoice?englishVoice.lang:"en-GB";if(englishVoice)u.voice=englishVoice;u.rate=0.78;u.onend=()=>{i++;setTimeout(next,180)};window.speechSynthesis.speak(u)}
  next();
}
function explainConversationLine(i){
  const line=getListeningConversation(currentLevel)[0][i], en=line[0], es=line[1];
  const el=document.getElementById("convHelp"+i);
  if(!el)return;
  el.innerHTML=`<div class="feedback" style="margin-top:10px"><strong>🇬🇧 ${en}</strong><br><strong>🇪🇸 ${es}</strong><br><br><strong>💡 Explicación</strong><br>${conversationExplanation(en)}<br><button class="speech-button" style="margin-top:8px" onclick="speakSpanish('${esc(es)}')">🔊 Escuchar en español</button> <button class="speech-button" onclick="speakEnglish('${esc(en)}')">🔊 Inglés</button></div>`;
}
function conversationExplanation(en){
  if(/^How (are|is|do|does|did|often|much|long)/i.test(en))return "Es una pregunta. Fíjate en la estructura inicial: “How…” pide información concreta, como estado, frecuencia, cantidad o duración.";
  if(/\b(I'd|would)\b/i.test(en))return "“I’d” es la forma corta de “I would” y suele utilizarse para hablar de preferencias, posibilidades o situaciones hipotéticas.";
  if(/\b(should)\b/i.test(en))return "“Should” se usa para dar consejos o decir lo que consideramos recomendable.";
  if(/\b(going to)\b/i.test(en))return "“Be going to” se utiliza para hablar de planes o intenciones futuras.";
  if(/\b(have ever|I've been)\b/i.test(en))return "Esta estructura pertenece al present perfect y se usa para hablar de experiencias conectadas con el presente.";
  return "Escucha la frase por bloques. Intenta reconocer primero quién realiza la acción y después qué acción o información se comunica.";
}
function answerConversation(i){
  const q=getListeningConversation(currentLevel);
  document.querySelectorAll("#gameContent .answer").forEach(b=>b.disabled=true);
  const ok=i===q[4];
  if(ok){state.xp+=25;state.score+=25;state.streak++;}else state.streak=0;
  saveState();
  conversationFeedback.innerHTML=`<div class="feedback ${ok?'correct':'wrong'}"><strong>${ok?'🎉 ¡Muy bien! Has entendido la conversación.':'❌ Vamos a repasarla'}</strong><div class="explanation"><strong>🇪🇸 Pregunta:</strong> ${q[2]}<br><br><strong>✅ Respuesta:</strong> ${q[3][q[4]]}</div></div><button class="main-button" onclick="acceptConversation()">➡️ ACEPTAR Y CONTINUAR</button>`;
  if(ok)playConversation();
}
function acceptConversation(){
  currentQuestion++;
  if(currentQuestion>=2){currentQuestion=0;currentGame++;nextGame();}
  else showConversationListeningGame();
}

