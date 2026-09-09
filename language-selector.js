/* Lingua Fun · Selector de idiomas · Actualización 37 */
(function(){
  function openFrench(){ location.href='frances.html'; }
  function openItalian(){ location.href='italiano.html'; }
  function close(){ const x=document.getElementById('languageSelector'); if(x)x.remove(); document.body.classList.remove('language-select-open'); }
  function open(){
    if(document.getElementById('languageSelector')) return;
    const box=document.createElement('div'); box.id='languageSelector';
    box.innerHTML=`<div class="language-backdrop"></div><div class="language-panel" role="dialog" aria-modal="true">
      <div class="language-logo">🌍</div><h2>¿Qué idioma quieres practicar?</h2><p>Elige un idioma para entrar en su sección de aprendizaje.</p>
      <div class="language-version">Lingua Fun · Actualización 37 · v3.7.0</div>
      <button class="language-card english" id="chooseEnglish">🇬🇧 <strong>Inglés</strong><span>Inglés A1 · A2 · B1</span></button>
      <button class="language-card french" id="chooseFrench">🇫🇷 <strong>Francés</strong><span>Francés A1 · A2 · B1</span></button>
      <button class="language-card italian" id="chooseItalian">🇮🇹 <strong>Italiano</strong><span>Italiano A1 · A2 · B1</span></button>
      <div class="coming-soon-languages"><b>🔜 PRÓXIMAMENTE</b><br><span>🇩🇪 Alemán</span> · <span>🇵🇹 Portugués</span></div>
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
