/* English Fun Start · Selector de idiomas · Actualización 34
   Capa independiente. El núcleo inglés permanece separado.
*/
(function(){
  function openFrench(){ window.location.href='frances.html'; }
  function openItalian(){ window.location.href='italiano.html'; }
  function close(){ const x=document.getElementById('languageSelector'); if(x)x.remove(); document.body.classList.remove('language-select-open'); }
  function open(){
    if(document.getElementById('languageSelector')) return;
    const box=document.createElement('div'); box.id='languageSelector';
    box.innerHTML=`<div class="language-backdrop"></div><div class="language-panel" role="dialog" aria-modal="true">
      <div class="language-logo">🌍</div><h2>¿Qué idioma quieres practicar?</h2><p>Elige un idioma para entrar en su sección de aprendizaje.</p><div class="language-version">English Fun Start · Actualización 34 · v3.4.0</div>
      <button class="language-card english" id="chooseEnglish">🇬🇧 <strong>Inglés</strong><span>English Fun Start</span></button>
      <button class="language-card french" id="chooseFrench">🇫🇷 <strong>Francés</strong><span>Francés A1 + A2 + B1 · módulo independiente</span></button>
      <button class="language-card italian" id="chooseItalian">🇮🇹 <strong>Italiano</strong><span>Italiano A1 · DISPONIBLE AHORA</span></button>
      <button class="language-back" id="closeLanguages">Continuar con inglés</button>
    </div>`;
    document.body.appendChild(box); document.body.classList.add('language-select-open');
    document.getElementById('chooseEnglish').onclick=close;
    document.getElementById('chooseFrench').onclick=openFrench;
    document.getElementById('chooseItalian').onclick=openItalian;
    document.getElementById('closeLanguages').onclick=close;
  }
  window.openLanguageSelector=open;
  window.addEventListener('load',()=>setTimeout(open,180));
})();
/* Próximamente */
document.addEventListener('DOMContentLoaded',function(){setTimeout(function(){if(document.getElementById('future-languages'))return;var h=document.querySelector('.language-selector,.language-overlay,.language-modal')||document.body;var b=document.createElement('div');b.id='future-languages';b.innerHTML='<div class="future-title">🌍 PRÓXIMAMENTE</div><div class="future-langs"><div class="future-lang">🇩🇪 <b>Alemán</b><small>Próximamente</small></div><div class="future-lang">🇵🇹 <b>Portugués</b><small>Próximamente</small></div></div>';h.appendChild(b)},700)});
