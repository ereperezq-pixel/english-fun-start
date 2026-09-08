/* English Fun Start — iOS compatibility layer.
   Deliberately does not replace or modify any game function. */
(function () {
  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "";
  const isIOS = /iPad|iPhone|iPod/.test(ua) ||
    (platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (!isIOS) return;

  document.documentElement.classList.add("ios-device");

  // Let Safari keep the viewport stable when the on-screen keyboard appears.
  // No game handlers are overridden.
  document.addEventListener("focusin", function (event) {
    const el = event.target;
    if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) {
      window.setTimeout(function () {
        try { el.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (_) {}
      }, 250);
    }
  }, { passive: true });
})();
