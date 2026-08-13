# Elevate Performance Hub

Actúa como un desarrollador frontend Senior y experto en UI/UX. Tu tarea es construir una Landing Page moderna, premium y de alto rendimiento para un servicio de coaching deportivo. 

La tecnología obligatoria a usar es: React (componentes funcionales), Vite, Tailwind CSS, y Lucide React para los iconos. El diseño debe ser 100% responsivo y estar optimizado para desplegarse inmediatamente en Netlify.

### REQUISITOS DE ARQUITECTURA Y EDICIÓN (¡MUY IMPORTANTE!)

- Debes crear un archivo de constantes o definir las variables de estado al principio del componente principal para que yo pueda editar fácilmente los textos, las URLs de las imágenes y la URL del video sin tener que buscar dentro del código HTML.

- Todo debe estar modularizado para que yo pueda mover o reorganizar las secciones (Hero, Stats, Services, Features, Founder) fácilmente.

### GUÍA DE ESTILOS

- Color de fondo principal: Negro puro (#000000).

- Color de acento/botones: Amarillo Neón / Lima (#E1FF00 o similar).

- Texto: Blanco (#FFFFFF) y gris claro para textos secundarios.

- Tipografía: Sans-serif moderna, audaz (bold) y geométrica (tipo Inter, Montserrat o similar). Usa mayúsculas para los encabezados.

### SECCIONES A DESARROLLAR (En orden de arriba hacia abajo):

1. NAVEGACIÓN (NAVBAR):

- Fondo transparente que se vuelva sólido al hacer scroll.

- Izquierda: Un logo minimalista (puedes usar un icono de infinito de Lucide).

- Centro: Enlaces de navegación (HOME, ABOUT, PRICING, CONTACT).

- Derecha: Botón con contorno blanco que diga "USE FOR FREE".

2. HERO SECTION (Fondo de Video):

- DEBE tener una etiqueta <video> de fondo ocupando todo el ancho y alto de la pantalla (autoPlay, loop, muted, playsInline). Deja un enlace de video de placeholder en las constantes para que yo lo cambie después.

- Sobre el video, aplica un "overlay" o capa negra con opacidad (ej. bg-black/60) para oscurecer el fondo y que las letras resalten perfectamente.

- Contenido centrado a la izquierda: 

  - Un componente de calificación con 5 estrellas y el texto "200+ ACTIVE MEMBERS".

  - Título principal gigante y en negrita: "UNLOCK YOUR TRUE POTENTIAL".

  - Subtítulo: "Custom coaching that transforms good runners into elite athletes."

  - Botón de llamada a la acción (CTA) en color amarillo neón: "BOOK A CALL >".

3. SECCIÓN DE ESTADÍSTICAS:

- Fondo negro puro.

- Título centrado: "WE TURN EVERYDAY RUNNERS INTO FIERCE COMPETITORS".

- Tres columnas con números grandes en amarillo neón y texto pequeño debajo:

  - "89%" / "Achieved a New PR"

  - "650+" / "Athletes Transformed"

  - "150+" / "Podium Finishes"

4. CINTA DESLIZANTE (MARQUEE):

- Una franja horizontal de color amarillo neón.

- Texto negro en mayúsculas que se repite: "TRAINING PLANS • TECHNIQUE ANALYSIS • RACE STRATEGIES •".

5. SECCIÓN DE SERVICIOS (Tarjetas Verticales):

- Layout dividido en 2 columnas en escritorio (1 en móvil).

- Columna izquierda (Sticky/Fija): Título "EVERYTHING YOU NEED TO CRUSH YOUR NEXT RACE" y un botón amarillo "GET STARTED >".

- Columna derecha (Scroll): Tres tarjetas grandes apiladas verticalmente. Cada tarjeta debe tener una imagen de fondo oscurecida (placeholder editable), un icono de Lucide, un título grande blanco y una lista de 3 viñetas con checkmarks amarillos.

6. SECCIÓN "POR QUÉ NOSOTROS" (Grid):

- Fondo negro. Título centrado: "A SMARTER WAY TO IMPROVE".

- Un grid de 3 columnas:

  - Izquierda: 2 tarjetas oscuras (bg-zinc-900) con iconos amarillos ("New Personal Bests", "Injury-Resilient Training").

  - Centro: Una imagen vertical alta (placeholder editable) de un equipo.

  - Derecha: 2 tarjetas oscuras ("Sustainable Progress", "Smarter Race Execution").

7. SECCIÓN DEL FUNDADOR:

- Dos columnas.

- Izquierda: Una imagen grande del fundador (placeholder) con su nombre en la esquina inferior ("ADRIAN PRATAMA, Founder").

- Derecha: Título "BUILT ON EXPERIENCE. DRIVEN BY PURPOSE.", un párrafo de descripción y 4 insignias o "badges" oscuros con checks amarillos (ej. "RRCA Certified", "NASM Certified").

Asegúrate de que las tarjetas tengan efectos hover sutiles (framer-motion o transiciones de Tailwind) y que el código sea lo más limpio posible. Entrégame el código completo.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4ed5cff5-9a03-4867-91ef-60ed2a53d9ec).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
