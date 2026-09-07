const CACHE_NAME = "english-fun-start-v13";
const APP_SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

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
  if (request.mode === "navigate" || new URL(request.url).pathname.endsWith("/index.html")) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request, { cache: "no-store" });
        if (response && response.ok) await cache.put("./index.html", response.clone());
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
