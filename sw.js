const CACHE_NAME = "english-fun-start-v29";
const APP_SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./conversation.js", "./rewards.js", "./iphone.css", "./iphone.js", "./word-help.js", "./word-help.css", "./language-selector.js", "./language-selector.css", "./frances.html", "./frances.js", "./frances.css"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  // Para la página principal usamos red primero: así las futuras actualizaciones
  // se descargan sin borrar localStorage (XP, puntuación y progreso).
  const path = new URL(request.url).pathname;
  if (request.mode === "navigate" || path.endsWith("/index.html") || path.endsWith("/frances.html") || path.endsWith("/frances.js") || path.endsWith("/frances.css")) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request, { cache: "no-store" });
        if (response && response.ok) await cache.put(request, response.clone());
        return response;
      } catch (error) {
        return (await cache.match(request)) || (await cache.match("./index.html"));
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok) await cache.put(request, response.clone());
      return response;
    } catch (error) {
      return new Response("Offline", { status: 503 });
    }
  })());
});
