# Proyecto web: Molinari Viajes
## Brief de diseño, experiencia de usuario y desarrollo frontend

### 1. Contexto general

Vamos a desarrollar una nueva web institucional y comercial para **Molinari Viajes**, una agencia de viajes y turismo con trayectoria en Trelew, Chubut, Argentina.

El proyecto está a cargo de **MediaDesign**, que trabajará tanto en la presencia web como en la comunicación digital de la agencia.

Te voy a proporcionar una imagen de referencia con el diseño visual que buscamos alcanzar.

**Objetivo inicial:** desarrollar una demo web funcional, moderna y visualmente atractiva que podamos presentar al cliente para mostrarle cómo podría verse su nueva página.

No queremos una simple landing page genérica ni una copia rígida de la imagen. Queremos construir un producto web profesional utilizando la referencia como dirección artística.

La demo debe transmitir la sensación de estar viendo una web real, lista para representar a una agencia turística consolidada.

### 2. Sobre Molinari Viajes

Información que conocemos:

- Nombre comercial: Molinari Viajes.
- Actividad: agencia de viajes y turismo.
- Ubicación: Belgrano 461, Trelew, Chubut, Argentina.
- Instagram: @molinariviajes_.
- Dominio histórico: molinariviajes.com.ar.
- Tiene trayectoria comercial en la ciudad.
- Ofrece viajes internacionales y salidas acompañadas.
- Publica viajes y experiencias relacionados con Europa, Japón, Nueva York y otros destinos.
- Su público habitual está compuesto principalmente por personas adultas con capacidad económica para realizar viajes internacionales.
- La atención personalizada y el acompañamiento son aspectos importantes de su propuesta comercial.
- Habitualmente comercializa aproximadamente entre cuatro y seis paquetes principales por año.

El sitio anterior no está accesible desde las comprobaciones iniciales, por lo que estamos planteando una nueva experiencia digital.

No conocemos todavía el año exacto de fundación, los paquetes vigentes, los precios, fechas ni todos los datos comerciales.

**No inventar información y presentarla como real.** Los contenidos pendientes deben mantenerse como datos demostrativos fácilmente reemplazables.

### 3. Objetivo comercial del sitio

La web debe cumplir cinco funciones fundamentales:

1. Reforzar la imagen profesional de Molinari Viajes.
2. Transmitir confianza, trayectoria y seguridad.
3. Presentar visualmente los paquetes turísticos disponibles.
4. Facilitar que los visitantes comprendan qué incluye cada experiencia.
5. Convertir el interés en consultas comerciales mediante WhatsApp.

No será una plataforma de comercio electrónico.

No necesitamos carrito, usuarios registrados, pagos online ni sistema de reservas automatizado.

La agencia continuará gestionando personalmente las consultas, presupuestos y contrataciones.

**El objetivo es que el usuario encuentre un paquete, se interese, consulte sus detalles y contacte directamente con Molinari Viajes.**

### 4. Público objetivo y accesibilidad

El público principal será adulto, incluyendo personas de más de 50 o 60 años que valoran una experiencia de navegación simple y confiable.

Sin embargo, el diseño debe ser atractivo para cualquier edad.

Consideraciones fundamentales:

- Tipografías grandes y legibles.
- Excelente contraste entre textos y fondos.
- Botones visibles, cómodos y fáciles de identificar.
- Navegación sencilla y predecible.
- Evitar menús complicados.
- Evitar saturación visual.
- Evitar animaciones excesivas.
- No utilizar carruseles automáticos que dificulten la lectura.
- Priorizar la experiencia mobile.
- Diseñar siguiendo buenas prácticas de WCAG 2.2 AA.
- Utilizar textos claros y directos, evitando tecnicismos turísticos innecesarios.

Queremos que cualquier visitante pueda encontrar un viaje y realizar una consulta sin dificultades.

---

# 5. Identidad visual y dirección artística

La imagen de referencia adjunta establece la línea visual principal del proyecto.

Debemos conservar la esencia de Molinari Viajes, principalmente su identidad basada en el globo terráqueo y los colores violeta/lila.

La estética buscada es:

- Elegante.
- Premium sin resultar ostentosa.
- Moderna y profesional.
- Cálida y cercana.
- Institucional, pero no rígida.
- Inspiradora, con fotografías turísticas de gran calidad.
- Visualmente ordenada y con buenos espacios entre elementos.

No queremos una estética juvenil, demasiado informal ni recargada.

## Paleta de colores propuesta

Utilizar inicialmente estos valores como tokens visuales aproximados:

| Función | Color |
|---|---|
| Violeta oscuro institucional | `#321344` |
| Violeta principal | `#642080` |
| Violeta intermedio | `#9156AD` |
| Lila de marca | `#CA86E3` |
| Lila suave para superficies | `#F1E5F7` |
| Fondo general | `#FAF9FC` |
| Blanco | `#FFFFFF` |
| Texto secundario | `#5E5664` |
| Verde de WhatsApp | `#128C4A` |

Estos colores son una primera propuesta. Podemos ajustar los HEX al comparar el resultado con la imagen y el logo original.

Reglas:

- Utilizar el violeta oscuro para títulos y navegación.
- Reservar los violetas más intensos para botones principales, etiquetas y destacados.
- Usar los lilas suaves en secciones secundarias, tarjetas y fondos.
- Mantener amplias zonas blancas.
- Utilizar el verde exclusivamente para identificar acciones asociadas a WhatsApp.
- No abusar de degradados.
- Garantizar contraste adecuado en todos los textos y botones.

## Tipografías

Propuesta inicial:

- **Plus Jakarta Sans:** títulos, encabezados y navegación.
- **Inter:** párrafos, información turística, botones y textos secundarios.

Buscamos una tipografía moderna, elegante y de lectura cómoda.

Jerarquía sugerida en desktop:

- H1: 48–60 px.
- H2: 32–40 px.
- H3: 23–28 px.
- Párrafos: 17–18 px.
- Botones: 16–18 px.

Adaptar estos tamaños proporcionalmente en tablets y celulares, evitando textos desbordados.

## Componentes visuales

- Contenedores amplios, con un ancho máximo aproximado de 1200–1280 px.
- Tarjetas con bordes redondeados de 16–20 px.
- Sombras sutiles y elegantes.
- Botones de gran tamaño y buen contraste.
- Iconografía consistente, preferentemente Lucide.
- Fotografía de destinos como recurso visual protagonista.
- Separaciones equilibradas entre secciones.
- Microinteracciones suaves en botones y tarjetas.
- Animaciones discretas, respetando `prefers-reduced-motion`.

Queremos un resultado premium y limpio, no una interfaz llena de efectos.

---

# 6. Arquitectura y secciones del sitio

La web tendrá una página de inicio y páginas individuales para los paquetes.

Posteriormente podremos incluir páginas específicas para Nosotros, Experiencias y Contacto si resulta conveniente.

## SECCIÓN 1 — Header / navegación

El header debe incluir:

- Logo Molinari Viajes.
- Inicio.
- Paquetes.
- Nosotros.
- Experiencias.
- Contacto.
- Botón destacado de WhatsApp.

En desktop, navegación horizontal sencilla.

En mobile, menú compacto, accesible y fácil de abrir.

Podemos utilizar un header sticky discreto, siempre que no ocupe demasiado espacio en pantallas pequeñas.

## SECCIÓN 2 — Hero principal

Será una de las secciones más importantes.

Debe ofrecer un impacto visual inmediato mediante una fotografía panorámica o composición turística de gran calidad.

La imagen de referencia muestra destinos de Europa y Japón combinados con la identidad violeta de Molinari.

Mensaje principal propuesto:

**Viajá con la experiencia de Molinari Viajes**

Subtítulo:

**Desde Trelew al mundo, con salidas acompañadas y asesoramiento personalizado.**

Dos CTA:

- Ver paquetes.
- Hablar por WhatsApp.

El texto debe ser muy legible sobre la fotografía, utilizando un overlay o degradado controlado.

No hacer que la fotografía compita visualmente con el contenido.

En mobile, reorganizar el hero para que mantenga un buen impacto sin generar demasiado scroll.

## SECCIÓN 3 — Próximas salidas destacadas

Esta será la sección comercial más importante de la Home.

Mostrar los principales paquetes turísticos.

Inicialmente podemos utilizar paquetes demostrativos:

- Europa Clásica.
- Japón y Nueva York.
- Egipto.
- Otros destinos que agregaremos posteriormente.

Estos nombres son ejemplos de presentación, no confirmaciones de salidas vigentes.

### Diseño de las tarjetas

En desktop queremos **tres tarjetas grandes por fila**, evitando seis tarjetas pequeñas que dificulten la lectura.

Cada tarjeta incluirá:

- Fotografía panorámica del destino.
- Etiqueta de salida acompañada, únicamente cuando corresponda.
- Nombre del viaje.
- Descripción breve.
- Información de fecha y duración, cuando esté disponible.
- Botón para ver detalles.
- CTA de consulta por WhatsApp.

Distribución responsive:

- Desktop: 3 columnas.
- Tablet: 2 columnas.
- Mobile: 1 columna.

La tarjeta debe sentirse elegante, espaciosa y visualmente atractiva.

Las fotografías deben ser protagonistas.

## SECCIÓN 4 — ¿Por qué viajar con Molinari?

Una sección de beneficios visualmente simple.

Podemos utilizar cuatro elementos:

- Trayectoria en Trelew.
- Atención personalizada.
- Salidas acompañadas.
- Asesoramiento cercano.

Cada beneficio tendrá un ícono lineal, título breve y opcionalmente una pequeña descripción.

Usar un fondo lila muy suave, sin sobrecargar la composición.

## SECCIÓN 5 — Nosotros / Historia y confianza

Título:

**Una agencia con historia y confianza**

Sección con composición de dos columnas.

Izquierda: fotografía auténtica de la agencia o del equipo.

Derecha: presentación institucional.

Queremos transmitir que Molinari Viajes tiene presencia real en Trelew y que detrás de cada viaje existen personas que organizan, asesoran y acompañan.

Incluir pequeños destacados como:

- Agencia de Trelew.
- Atención cercana.
- Experiencia en viajes internacionales.

No utilizar cifras de años de trayectoria ni estadísticas hasta recibir confirmación.

## SECCIÓN 6 — Experiencias reales

Título:

**Así se viven nuestros viajes**

Queremos destacar las experiencias de los viajeros.

Diseñar una galería con fotografías de grupos, destinos y momentos especiales.

Las fotografías definitivas serán aportadas por el cliente.

Para la demo se pueden utilizar imágenes ilustrativas de destinos y viajeros, sin atribuirlas falsamente a clientes de Molinari.

Podemos incorporar posteriormente videos breves y material de Instagram.

El diseño debe permitir explorar fotografías sin complicaciones.

## SECCIÓN 7 — Testimonios

Título:

**Lo que dicen nuestros viajeros**

Diseñar tarjetas elegantes para mostrar opiniones de clientes.

Cada tarjeta podrá incluir:

- Testimonio.
- Nombre del cliente.
- Valoración, cuando esté verificada.
- Fotografía opcional.

Durante el desarrollo inicial utilizar placeholders claramente identificados como demostrativos.

No publicar opiniones inventadas como si fueran reales.

Más adelante podremos incorporar reseñas auténticas de Google o testimonios autorizados.

## SECCIÓN 8 — CTA final

Crear una banda destacada de color violeta institucional.

Título:

**¿Listo para tu próximo viaje?**

Texto:

**Escribinos y te ayudamos a encontrar la salida ideal para vos.**

Botón:

**Consultanos por WhatsApp**

Debe ser una sección limpia, visible y con un mensaje de conversión directo.

## SECCIÓN 9 — Footer

Debe contener:

- Logo.
- Nombre de la agencia.
- Dirección: Belgrano 461, Trelew, Chubut.
- Teléfonos oficiales, una vez confirmados.
- Instagram.
- WhatsApp comercial.
- Accesos rápidos a secciones.
- Datos comerciales y legales correspondientes, cuando los recibamos.

Mantener una composición elegante y accesible.

---

# 7. Páginas individuales de los paquetes

Aunque la Home permita consultar directamente, queremos que cada viaje cuente con su propia página de detalle.

Ejemplo de URL:

`/paquetes/europa-clasica`

Cada página tendrá:

1. Fotografía destacada del destino.
2. Nombre del paquete.
3. Presentación breve de la experiencia.
4. Fechas de salida.
5. Duración.
6. Destinos incluidos.
7. Modalidad del viaje.
8. Itinerario organizado por días.
9. Servicios incluidos.
10. Servicios no incluidos.
11. Galería de fotografías.
12. Información importante para el viajero.
13. Preguntas frecuentes.
14. Botón de consulta por WhatsApp.

Los datos desconocidos no deben inventarse.

Podemos diseñar estructuras visuales demostrativas claramente señalizadas hasta contar con los itinerarios reales.

La página individual debe parecer una presentación turística profesional, con buena fotografía y jerarquía informativa.

## WhatsApp personalizado

Cada paquete deberá tener su propio enlace de consulta.

Ejemplo de mensaje:

"Hola, estuve viendo en la página web de Molinari Viajes el paquete Europa Clásica y quisiera recibir más información sobre las fechas, el itinerario y las formas de pago. Muchas gracias."

El nombre del paquete se insertará dinámicamente.

Utilizar enlaces `wa.me` y `encodeURIComponent()`.

El número comercial será centralizado en la configuración del proyecto y quedará pendiente de confirmación.

No asumir que un teléfono publicado es necesariamente la línea oficial de WhatsApp.

---

# 8. Stack tecnológico

Queremos trabajar con tecnologías que conocemos y que sean adecuadas para una web rápida y mantenible.

**Stack definido:**

- Astro.
- React con Islands Architecture.
- Tailwind CSS.
- JavaScript.
- JSX.
- Lucide Icons.
- Vercel para el despliegue.

No utilizar TypeScript para este proyecto.

No necesitamos backend en la primera versión.

No implementar bases de datos, autenticación, sistemas de pago ni APIs innecesarias.

## Arquitectura Astro + React Islands

Astro debe renderizar la mayor parte de la interfaz como HTML estático.

Utilizar componentes Astro para:

- Header y footer.
- Hero.
- Secciones institucionales.
- Tarjetas de paquetes.
- Layout.
- Contenido de las páginas.
- Elementos de presentación.

React Islands solamente donde realmente aporte funcionalidad:

- Galerías interactivas.
- Filtros de paquetes, si los necesitamos.
- Algún componente dinámico que justifique hidratación.

Evitar utilizar React para componentes que pueden resolverse perfectamente con Astro y HTML.

No sobrecargar la web con JavaScript.

## Organización del proyecto

Proponer una estructura clara de carpetas:

```text
src/
├── components/
│   ├── layout/
│   ├── home/
│   ├── packages/
│   ├── ui/
│   └── react/
├── data/
│   └── packages.js
├── layouts/
│   └── MainLayout.astro
├── pages/
│   ├── index.astro
│   ├── paquetes/
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── contacto.astro
├── styles/
│   └── global.css
└── config/
    └── site.js

public/
├── images/
│   ├── brand/
│   ├── hero/
│   ├── destinations/
│   └── agency/
└── icons/
```

La estructura puede ajustarse si existe una alternativa más eficiente, siempre justificando los cambios.

Inicialmente, los paquetes pueden almacenarse en un archivo de datos local.

Cada paquete tendrá campos como:

- id.
- slug.
- title.
- description.
- image.
- gallery.
- destinations.
- departureDate.
- duration.
- itinerary.
- included.
- excluded.
- status.
- accompanied.

La idea es poder modificar los paquetes sin reescribir la interfaz.

Más adelante evaluaremos un CMS únicamente si hace falta.

---

# 9. SEO y rendimiento

Aunque la primera entrega sea una demo, queremos construirla con buenas bases técnicas.

Implementar:

- HTML semántico.
- Etiquetas de encabezados correctas.
- Metadatos por página.
- Open Graph.
- URLs descriptivas.
- Imágenes optimizadas.
- Lazy loading donde corresponda.
- Tamaños de imagen definidos para evitar cambios de layout.
- Navegación accesible por teclado.
- Alt descriptivos.
- Sitemap y robots configurables para producción.
- Preparación para datos estructurados de la agencia.
- Buenas métricas Core Web Vitals.

La demo en Vercel no debería indexarse como si fuera el sitio oficial definitivo.

Cuando tengamos la información validada, configuraremos el SEO local de Molinari Viajes y su sitio de producción.

## Responsive

Diseñar y revisar como mínimo:

- Mobile pequeño: 360–375 px.
- Mobile estándar: 390–430 px.
- Tablet: 768–1024 px.
- Desktop: 1280–1440 px.

Evitar:

- Scroll horizontal.
- Textos demasiado pequeños.
- Componentes desproporcionados.
- Tarjetas demasiado altas.
- Secciones con espacios vacíos excesivos.
- Imágenes gigantes que hagan interminable el scroll en celulares.

---

# 10. Qué queremos lograr visualmente

La referencia adjunta es la base principal del diseño.

Debemos respetar:

- La esencia del logo.
- El uso de violetas y lilas.
- El hero turístico.
- Las grandes fotografías.
- Las tarjetas de paquetes.
- La jerarquía de secciones.
- Las zonas institucionales.
- La distribución visual general.
- La sensación premium y profesional.

Pero no queremos copiar sus errores potenciales.

Podemos mejorar:

- La cantidad de espacio entre secciones.
- La legibilidad de los textos.
- Los tamaños y proporciones de las tarjetas.
- La composición responsive.
- La consistencia de botones y bordes.
- Los efectos hover.
- El equilibrio entre fotografías y contenido.

La imagen funciona como una dirección artística, no como una especificación rígida de píxeles.

**El resultado final debe verse incluso mejor que la referencia, manteniendo su identidad.**

---

# 11. Etapas de desarrollo

Vamos a trabajar de manera incremental.

### Etapa 1 — Base del proyecto

- Configurar Astro y Tailwind.
- Incorporar React.
- Definir tokens de diseño.
- Configurar fuentes.
- Preparar layout principal.
- Crear componentes reutilizables.

### Etapa 2 — Home visual

- Header.
- Hero.
- Paquetes destacados.
- Beneficios.
- Nosotros.
- Experiencias.
- Testimonios.
- CTA.
- Footer.

### Etapa 3 — Páginas de paquetes

- Catálogo completo.
- Páginas individuales.
- Datos centralizados.
- Enlaces de WhatsApp personalizados.

### Etapa 4 — Responsive y calidad

- Ajustes para celular.
- Accesibilidad.
- Optimización de imágenes.
- Transiciones.
- Revisión visual.
- Performance.

### Etapa 5 — Presentación comercial

- Publicación de la demo en Vercel.
- Navegación funcional.
- Revisión de botones.
- Contenido claramente demostrativo.
- Versión mobile lista para presentar.

---

# 12. Forma de trabajo

Quiero que trabajemos como desarrolladores frontend, de forma ordenada y colaborativa.

No necesitamos implementar todo el sitio de una sola vez.

Vamos a avanzar por secciones, revisando el resultado visual antes de continuar.

Reglas importantes:

1. No modificar componentes existentes que funcionen correctamente sin necesidad.
2. No cambiar el stack establecido.
3. No instalar librerías adicionales sin justificar su utilidad.
4. No inventar información comercial.
5. Priorizar componentes reutilizables.
6. Mantener el código limpio y fácil de mantener.
7. No sobrecomplicar el proyecto.
8. Evitar JavaScript innecesario.
9. Respetar el diseño aprobado.
10. Realizar cambios puntuales y controlados durante las revisiones.

Quiero que actúes como un desarrollador frontend senior con criterio de diseño UI/UX, priorizando calidad visual, accesibilidad, rendimiento y mantenibilidad.

## Primera tarea

Analizá la imagen de referencia que adjunto y este brief.

Primero, explicame brevemente:

- Cómo interpretarías la identidad visual.
- Qué estructura de componentes proponés.
- Qué decisiones tomarías para lograr un resultado visual profesional.
- Cómo organizarías el desarrollo con Astro y React Islands.

Después avanzaremos con la creación del proyecto y la Home, sin intentar construir todas las funcionalidades de una sola vez.

**La prioridad absoluta es conseguir una demo visual de Molinari Viajes que resulte atractiva, profesional, convincente y fácil de utilizar.**