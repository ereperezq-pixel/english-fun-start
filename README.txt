English Fun Start · Actualización 28 · v2.8.0
English Fun Start · A1 + A2 + B1

3 cursos de 20 niveles: A1, A2 y B1.
Paso de curso: completar todos los niveles, prueba de 15 preguntas con mínimo 90% (14/15), o clave 1111.
La clave desbloquea el curso siguiente; no completa niveles del curso actual.
El juego de parejas no rompe la racha general. B1 añade “Escucha y elige”.
Si no hay siguiente curso disponible, se muestra “El curso siguiente aún no está terminado.”
El progreso se guarda en localStorage.


Actualización 20 — arquitectura separada iPhone/iOS:
- index.html mantiene la lógica principal y los juegos.
- conversation.js mantiene el juego de comprensión auditiva.
- iphone.css contiene únicamente adaptación visual/safe-area para iPhone.
- iphone.js contiene únicamente compatibilidad iOS y no sustituye funciones del juego.
- Se conserva localStorage y el progreso existente.

Actualización 27: selector de idiomas independiente. Inglés mantiene su núcleo; se añade módulo francés A1 separado (frances.html/js/css). Italiano queda preparado como próximamente.
