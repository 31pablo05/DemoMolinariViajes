// La ficha "proximamente" sigue con placeholder: no hay destino ni fotos confirmadas.
import placeholder from '../assets/images/destinations/placeholder.jpg';
import europaClasicaCover from '../assets/images/destinations/europa-clasica.jpg';
import europaClasica01 from '../assets/images/destinations/europa-clasica/01.jpg';
import europaClasica02 from '../assets/images/destinations/europa-clasica/02.jpg';
import europaClasica03 from '../assets/images/destinations/europa-clasica/03.jpg';
import europaClasica04 from '../assets/images/destinations/europa-clasica/04.jpg';
import japonCover from '../assets/images/destinations/japon-nueva-york.jpg';
import japon01 from '../assets/images/destinations/japon-nueva-york/01.jpg';
import japon02 from '../assets/images/destinations/japon-nueva-york/02.jpg';
import japon03 from '../assets/images/destinations/japon-nueva-york/03.jpg';
import japon04 from '../assets/images/destinations/japon-nueva-york/04.jpg';
import egiptoCover from '../assets/images/destinations/egipto.jpg';
import egipto01 from '../assets/images/destinations/egipto/01.jpg';
import egipto02 from '../assets/images/destinations/egipto/02.jpg';
import europaCentralCover from '../assets/images/destinations/europa-central.jpg';
import europaCentral01 from '../assets/images/destinations/europa-central/01.jpg';
import europaCentral02 from '../assets/images/destinations/europa-central/02.jpg';
import europaCentral03 from '../assets/images/destinations/europa-central/03.jpg';
import franciaCover from '../assets/images/destinations/francia-bretana.jpg';
import francia01 from '../assets/images/destinations/francia-bretana/01.jpg';
import francia02 from '../assets/images/destinations/francia-bretana/02.jpg';
import francia03 from '../assets/images/destinations/francia-bretana/03.jpg';

function gallery(photos) {
  return photos.map(([src, alt]) => ({ src, alt }));
}

const packages = [
  {
    id: 'europa-clasica',
    slug: 'europa-clasica',
    title: 'Europa Clásica',
    shortDescription:
      'Salida acompañada de ejemplo por París, Roma, Viena, Praga y Budapest.',
    description:
      'Ficha de ejemplo de una salida acompañada por algunas de las capitales más visitadas de Europa. Muestra cómo se va a presentar el viaje: las ciudades, el ritmo del programa y los servicios. Las fechas, la duración y el itinerario definitivo quedan a confirmar con la agencia.',
    image: europaClasicaCover,
    imageAlt: 'La torre Eiffel al atardecer, junto al Sena y un puente de París.',
    gallery: gallery([
      [europaClasica01, 'La torre Eiffel al atardecer, junto al Sena y un puente de París.'],
      [europaClasica02, 'Una góndola frente a la basílica de Santa Maria della Salute, en Venecia.'],
      [europaClasica03, 'Un grupo de viajeros de espaldas, mirando el Coliseo de Roma.'],
      [europaClasica04, 'El Gran Canal de Venecia y la basílica de Santa Maria della Salute.'],
    ]),
    destinations: ['París', 'Roma', 'Viena', 'Praga', 'Budapest'],
    departureDate: 'A confirmar',
    duration: 'A confirmar',
    modality: 'Salida acompañada',
    accompanied: true,
    featured: true,
    status: 'disponible',
    itinerary: [
      {
        day: 1,
        title: 'Llegada a París',
        description:
          'Día representativo. Encuentro con el grupo y primer paseo por la ciudad.',
      },
      {
        day: 2,
        title: 'París',
        description:
          'Tiempo de ejemplo para recorrer el centro, los museos y un barrio de la ciudad.',
      },
      {
        day: 3,
        title: 'Roma',
        description:
          'Traslado de ejemplo y paseo por el centro histórico.',
      },
      {
        day: 4,
        title: 'Viena',
        description:
          'Día representativo para conocer el centro y algunos de sus palacios.',
      },
      {
        day: 5,
        title: 'Praga',
        description:
          'Recorrido de ejemplo por la ciudad vieja y sus miradores.',
      },
      {
        day: 6,
        title: 'Budapest',
        description:
          'Cierre de ejemplo del programa, con tiempo libre antes del regreso.',
      },
    ],
    included: [
      'Acompañamiento de un coordinador durante el viaje.',
      'Alojamiento según el programa que se confirme.',
      'Traslados previstos entre las ciudades del recorrido.',
      'Desayunos.',
    ],
    excluded: [
      'Vuelos, salvo que el programa confirmado los incluya.',
      'Comidas no detalladas en el programa.',
      'Gastos personales.',
      'Todo lo que no esté escrito en el programa confirmado.',
    ],
    importantInfo:
      'Los datos de esta ficha son de ejemplo. Documentación, horarios y servicios se confirman con Molinari antes de reservar. Esta página no publica precios.',
    faq: [
      {
        question: '¿Las fechas ya están confirmadas?',
        answer:
          'No. En esta demo la salida figura como "A confirmar". La agencia comunica la fecha cuando el programa está cerrado.',
      },
      {
        question: '¿El itinerario es el programa final?',
        answer:
          'No. Los días que se muestran son representativos, para ver cómo se va a leer el programa. No reemplazan el itinerario real.',
      },
      {
        question: '¿Dónde consulto el valor y la forma de pago?',
        answer:
          'Por WhatsApp con la agencia. Esta ficha no informa precios.',
      },
    ],
    isDemo: true,
  },
  {
    id: 'japon-nueva-york',
    slug: 'japon-nueva-york',
    title: 'Japón y Nueva York',
    shortDescription:
      'Salida acompañada de ejemplo que combina Tokio, Kioto y Nueva York.',
    description:
      'Ficha de ejemplo de un viaje que reúne dos ritmos distintos: las ciudades de Japón y una estadía en Nueva York. El programa de abajo ilustra la estructura de la ficha y no corresponde a una salida confirmada.',
    image: japonCover,
    imageAlt: 'La torre de Tokio y el Empire State de Nueva York, iluminados al anochecer.',
    gallery: gallery([
      [japon01, 'Torii rojos entre cerezos en flor, con visitantes recorriendo el sendero.'],
      [japon02, 'El Empire State y el skyline de Nueva York al atardecer.'],
      [japon03, 'La torre de Tokio iluminada, con el monte Fuji detrás.'],
      [japon04, 'Una pagoda, el monte Fuji y el Coliseo entre cerezos en flor.'],
    ]),
    destinations: ['Tokio', 'Kioto', 'Nueva York'],
    departureDate: 'A confirmar',
    duration: 'A confirmar',
    modality: 'Salida acompañada',
    accompanied: true,
    featured: true,
    status: 'disponible',
    itinerary: [
      {
        day: 1,
        title: 'Llegada a Tokio',
        description:
          'Día representativo de llegada, encuentro con el grupo y primer contacto con la ciudad.',
      },
      {
        day: 2,
        title: 'Tokio',
        description:
          'Tiempo de ejemplo para recorrer barrios, templos y el centro.',
      },
      {
        day: 3,
        title: 'Kioto',
        description:
          'Traslado de ejemplo y paseo por templos y calles históricas.',
      },
      {
        day: 4,
        title: 'Kioto',
        description:
          'Segundo día representativo en la ciudad, con tiempo libre.',
      },
      {
        day: 5,
        title: 'Nueva York',
        description:
          'Llegada de ejemplo y primer recorrido por la ciudad.',
      },
      {
        day: 6,
        title: 'Nueva York',
        description:
          'Día representativo para museos, barrios y el cierre del programa.',
      },
    ],
    included: [
      'Acompañamiento de un coordinador durante el viaje.',
      'Alojamiento según el programa que se confirme.',
      'Traslados previstos entre las ciudades del recorrido.',
      'Desayunos.',
    ],
    excluded: [
      'Vuelos, salvo que el programa confirmado los incluya.',
      'Comidas no detalladas en el programa.',
      'Gastos personales.',
      'Todo lo que no esté escrito en el programa confirmado.',
    ],
    importantInfo:
      'Los datos de esta ficha son de ejemplo. Documentación, horarios y servicios se confirman con Molinari antes de reservar. Esta página no publica precios.',
    faq: [
      {
        question: '¿Las fechas ya están confirmadas?',
        answer:
          'No. En esta demo la salida figura como "A confirmar". La agencia comunica la fecha cuando el programa está cerrado.',
      },
      {
        question: '¿El viaje incluye Japón y Nueva York en la misma salida?',
        answer:
          'En esta ficha de ejemplo, sí se presentan juntas. El armado real del recorrido se confirma con la agencia.',
      },
      {
        question: '¿Dónde consulto el valor y la forma de pago?',
        answer:
          'Por WhatsApp con la agencia. Esta ficha no informa precios.',
      },
    ],
    isDemo: true,
  },
  {
    id: 'egipto',
    slug: 'egipto',
    title: 'Egipto',
    shortDescription:
      'Salida acompañada de ejemplo por El Cairo, Luxor, Asuán y un tramo en crucero por el Nilo.',
    description:
      'Ficha de ejemplo de una salida acompañada por el Egipto más clásico: la capital, los templos de Luxor y Asuán, y un tramo en el Nilo. Sirve para mostrar la ficha de un viaje. No es un programa confirmado.',
    image: egiptoCover,
    imageAlt: 'Las pirámides de Guiza con camellos en el desierto.',
    gallery: gallery([
      [egipto01, 'Las pirámides de Guiza con camellos en primer plano.'],
      [egipto02, 'Las pirámides de Guiza en el desierto, bajo un cielo despejado.'],
    ]),
    destinations: ['El Cairo', 'Luxor', 'Asuán', 'Crucero por el Nilo'],
    departureDate: 'A confirmar',
    duration: 'A confirmar',
    modality: 'Salida acompañada',
    accompanied: true,
    featured: true,
    status: 'disponible',
    itinerary: [
      {
        day: 1,
        title: 'Llegada a El Cairo',
        description:
          'Día representativo de llegada y encuentro con el grupo.',
      },
      {
        day: 2,
        title: 'El Cairo',
        description:
          'Tiempo de ejemplo para las pirámides y el museo de la ciudad.',
      },
      {
        day: 3,
        title: 'Luxor',
        description:
          'Traslado de ejemplo y visita representativa a los templos de la zona.',
      },
      {
        day: 4,
        title: 'Crucero por el Nilo',
        description:
          'Tramo de ejemplo navegando entre templos de la ribera.',
      },
      {
        day: 5,
        title: 'Asuán',
        description:
          'Día representativo en la ciudad y sus alrededores.',
      },
      {
        day: 6,
        title: 'Regreso',
        description:
          'Cierre de ejemplo del programa y regreso, con los horarios a confirmar.',
      },
    ],
    included: [
      'Acompañamiento de un coordinador durante el viaje.',
      'Alojamiento según el programa que se confirme.',
      'Tramo en crucero por el Nilo, si queda incluido en el programa final.',
      'Desayunos.',
    ],
    excluded: [
      'Vuelos, salvo que el programa confirmado los incluya.',
      'Comidas no detalladas en el programa.',
      'Gastos personales.',
      'Todo lo que no esté escrito en el programa confirmado.',
    ],
    importantInfo:
      'Los datos de esta ficha son de ejemplo. Documentación, horarios y servicios se confirman con Molinari antes de reservar. Esta página no publica precios.',
    faq: [
      {
        question: '¿Las fechas ya están confirmadas?',
        answer:
          'No. En esta demo la salida figura como "A confirmar". La agencia comunica la fecha cuando el programa está cerrado.',
      },
      {
        question: '¿El crucero por el Nilo ya está incluido?',
        answer:
          'En esta ficha aparece como parte del ejemplo. Se confirma junto con el resto del programa.',
      },
      {
        question: '¿Dónde consulto el valor y la forma de pago?',
        answer:
          'Por WhatsApp con la agencia. Esta ficha no informa precios.',
      },
    ],
    isDemo: true,
  },
  {
    id: 'europa-central',
    slug: 'europa-central',
    title: 'Europa Central',
    shortDescription:
      'Recorrido de ejemplo por Berlín, Praga, Viena, Budapest, Salzburgo, Venecia y Roma.',
    description:
      'Ficha de ejemplo para un viaje por Europa central y dos ciudades de Italia. Las ciudades están elegidas para mostrar la ficha, no como una salida ya armada. Fechas, duración y modalidad quedan a confirmar.',
    image: europaCentralCover,
    imageAlt: 'El Coliseo de Roma al atardecer, entre cipreses.',
    gallery: gallery([
      [europaCentral01, 'El Coliseo de Roma al atardecer, entre cipreses.'],
      [europaCentral02, 'La torre Eiffel al atardecer, junto al Sena y un puente de París.'],
      [europaCentral03, 'Una góndola frente a la basílica de Santa Maria della Salute, en Venecia.'],
    ]),
    destinations: ['Berlín', 'Praga', 'Viena', 'Budapest', 'Salzburgo', 'Venecia', 'Roma'],
    departureDate: 'A confirmar',
    duration: 'A confirmar',
    modality: 'A confirmar',
    accompanied: false,
    featured: false,
    status: 'disponible',
    itinerary: [
      {
        day: 1,
        title: 'Berlín',
        description: 'Día representativo de llegada y primer paseo por la ciudad.',
      },
      {
        day: 2,
        title: 'Praga',
        description: 'Traslado de ejemplo y recorrido por el centro histórico.',
      },
      {
        day: 3,
        title: 'Viena',
        description: 'Día representativo en el centro de la ciudad.',
      },
      {
        day: 4,
        title: 'Budapest',
        description: 'Tiempo de ejemplo para recorrer los dos lados de la ciudad.',
      },
      {
        day: 5,
        title: 'Salzburgo y Venecia',
        description:
          'Tramo representativo entre las dos ciudades. Los tiempos de viaje se confirman en el programa final.',
      },
      {
        day: 6,
        title: 'Roma',
        description: 'Cierre de ejemplo del recorrido, con tiempo libre.',
      },
    ],
    included: [
      'Alojamiento según el programa que se confirme.',
      'Traslados previstos entre las ciudades del recorrido.',
      'Desayunos.',
    ],
    excluded: [
      'Vuelos, salvo que el programa confirmado los incluya.',
      'Comidas no detalladas en el programa.',
      'Gastos personales.',
      'Todo lo que no esté escrito en el programa confirmado.',
    ],
    importantInfo:
      'Los datos de esta ficha son de ejemplo. Todavía no está confirmado si la salida es acompañada. Esta página no publica precios.',
    faq: [
      {
        question: '¿Es una salida acompañada?',
        answer:
          'En esta demo no está confirmado. La modalidad figura como "A confirmar".',
      },
      {
        question: '¿El itinerario visita todas las ciudades?',
        answer:
          'La lista de destinos es de ejemplo. Los días que se muestran son representativos y no cierran el programa.',
      },
      {
        question: '¿Dónde consulto el valor y la forma de pago?',
        answer:
          'Por WhatsApp con la agencia. Esta ficha no informa precios.',
      },
    ],
    isDemo: true,
  },
  {
    id: 'francia-bretana',
    slug: 'francia-bretana',
    title: 'Francia y Bretaña',
    shortDescription:
      'Recorrido de ejemplo por París, Mont Saint-Michel, Saint-Malo y Avallon.',
    description:
      'Ficha de ejemplo que combina París con pueblos y ciudades de Bretaña y el interior de Francia. Sirve para ver cómo se lee una ficha con varias escalas. El programa real, las fechas y la modalidad quedan a confirmar.',
    image: franciaCover,
    imageAlt: 'Mont Saint-Michel iluminado al anochecer, sobre el islote y la playa.',
    gallery: gallery([
      [francia01, 'Mont Saint-Michel iluminado al anochecer, sobre el islote y la playa.'],
      [francia02, 'El Gran Canal de Venecia y la basílica de Santa Maria della Salute.'],
      [francia03, 'Aurora boreal verde sobre montañas nevadas y un lago.'],
    ]),
    destinations: ['París', 'Mont Saint-Michel', 'Saint-Malo', 'Avallon'],
    departureDate: 'A confirmar',
    duration: 'A confirmar',
    modality: 'A confirmar',
    accompanied: false,
    featured: false,
    status: 'disponible',
    itinerary: [
      {
        day: 1,
        title: 'Llegada a París',
        description: 'Día representativo de llegada y primer paseo por la ciudad.',
      },
      {
        day: 2,
        title: 'París',
        description: 'Tiempo de ejemplo para el centro y sus barrios.',
      },
      {
        day: 3,
        title: 'Mont Saint-Michel',
        description: 'Traslado de ejemplo y visita a la abadía y su entorno.',
      },
      {
        day: 4,
        title: 'Saint-Malo',
        description: 'Día representativo en la ciudad amurallada.',
      },
      {
        day: 5,
        title: 'Avallon',
        description: 'Escala de ejemplo en el interior de Francia.',
      },
      {
        day: 6,
        title: 'Cierre del recorrido',
        description:
          'Día representativo de regreso. El punto de salida se confirma con el programa.',
      },
    ],
    included: [
      'Alojamiento según el programa que se confirme.',
      'Traslados previstos entre las ciudades del recorrido.',
      'Desayunos.',
    ],
    excluded: [
      'Vuelos, salvo que el programa confirmado los incluya.',
      'Comidas no detalladas en el programa.',
      'Gastos personales.',
      'Todo lo que no esté escrito en el programa confirmado.',
    ],
    importantInfo:
      'Los datos de esta ficha son de ejemplo. Todavía no está confirmado si la salida es acompañada. Esta página no publica precios.',
    faq: [
      {
        question: '¿Es una salida acompañada?',
        answer:
          'En esta demo no está confirmado. La modalidad figura como "A confirmar".',
      },
      {
        question: '¿El itinerario es el programa final?',
        answer:
          'No. Los días son representativos y no reemplazan el programa que confirme la agencia.',
      },
      {
        question: '¿Dónde consulto el valor y la forma de pago?',
        answer:
          'Por WhatsApp con la agencia. Esta ficha no informa precios.',
      },
    ],
    isDemo: true,
  },
  {
    id: 'proximamente',
    slug: 'proximamente',
    title: 'Destino a confirmar',
    shortDescription:
      'Tarjeta de ejemplo para avisar que se suman salidas nuevas cuando el destino esté definido.',
    description:
      'Esta ficha no describe un viaje. Muestra el espacio donde más adelante se publica una salida próxima, sin inventar destino, fechas ni programa.',
    image: placeholder,
    imageAlt: 'Imagen de ejemplo para una salida que todavía no tiene destino confirmado.',
    gallery: gallery([
      [placeholder, 'Imagen de ejemplo para una próxima salida, todavía sin destino confirmado.'],
    ]),
    destinations: [],
    departureDate: 'A confirmar',
    duration: 'A confirmar',
    modality: 'A confirmar',
    accompanied: false,
    featured: false,
    status: 'proximamente',
    itinerary: [],
    included: [],
    excluded: [],
    importantInfo:
      'El destino, las fechas y el programa se publican cuando Molinari los confirme. Hasta entonces, esta tarjeta es solo un aviso de ejemplo.',
    faq: [],
    isDemo: true,
  },
];

const featuredSlugs = ['europa-clasica', 'japon-nueva-york', 'egipto'];

export function getAllPackages() {
  return packages;
}

export function getFeaturedPackages() {
  return featuredSlugs
    .map((slug) => packages.find((item) => item.slug === slug && item.featured))
    .filter(Boolean)
    .slice(0, 3);
}

export function getPackageBySlug(slug) {
  return packages.find((item) => item.slug === slug) ?? null;
}

export function getRelatedPackages(slug) {
  return packages.filter((item) => item.slug !== slug);
}
