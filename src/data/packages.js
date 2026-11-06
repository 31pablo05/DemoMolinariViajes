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
      'Recorré París, Roma, Viena, Praga y Budapest en un viaje en grupo, con la coordinación de Molinari de principio a fin.',
    description:
      'Un recorrido por algunas de las capitales más lindas de Europa: los bulevares de París, la historia viva de Roma, los palacios de Viena, el casco antiguo de Praga y el Danubio a su paso por Budapest. Viajás en grupo y con la coordinación de Molinari, para disfrutar cada ciudad sin ocuparte de la organización.',
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
          'Encuentro con el grupo y primer paseo por la ciudad.',
      },
      {
        day: 2,
        title: 'París',
        description:
          'Tiempo para recorrer el centro, los museos y los barrios de la ciudad.',
      },
      {
        day: 3,
        title: 'Roma',
        description:
          'Traslado y paseo por el centro histórico.',
      },
      {
        day: 4,
        title: 'Viena',
        description:
          'Un día para conocer el centro y algunos de sus palacios.',
      },
      {
        day: 5,
        title: 'Praga',
        description:
          'Recorrido por la ciudad vieja y sus miradores.',
      },
      {
        day: 6,
        title: 'Budapest',
        description:
          'Cierre del viaje, con tiempo libre antes del regreso.',
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
      'Fechas, documentación, horarios y servicios se confirman con Molinari antes de reservar. Los valores y las formas de pago se consultan directamente con la agencia.',
    faq: [
      {
        question: '¿Cuáles son las próximas fechas?',
        answer:
          'La agencia comunica las fechas de salida cuando el programa está cerrado. Escribinos por WhatsApp y te avisamos.',
      },
      {
        question: '¿El itinerario es el programa final?',
        answer:
          'El recorrido muestra el espíritu del viaje. El programa día por día se confirma con la agencia antes de reservar.',
      },
      {
        question: '¿Dónde consulto el valor y la forma de pago?',
        answer:
          'Escribinos por WhatsApp y te pasamos los valores y las formas de pago.',
      },
    ],
    isDemo: true,
  },
  {
    id: 'japon-nueva-york',
    slug: 'japon-nueva-york',
    title: 'Japón y Nueva York',
    shortDescription:
      'Del Japón de templos y cerezos a la energía de Nueva York: Tokio, Kioto y la Gran Manzana en un mismo viaje.',
    description:
      'Un viaje que reúne dos mundos: el pulso de Tokio, la calma de los templos de Kioto y la energía de Nueva York. Viajás en grupo y con la coordinación de Molinari, para vivir cada destino con tranquilidad y sin preocuparte por la organización.',
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
          'Llegada, encuentro con el grupo y primer contacto con la ciudad.',
      },
      {
        day: 2,
        title: 'Tokio',
        description:
          'Tiempo para recorrer barrios, templos y el centro.',
      },
      {
        day: 3,
        title: 'Kioto',
        description:
          'Traslado y paseo por templos y calles históricas.',
      },
      {
        day: 4,
        title: 'Kioto',
        description:
          'Segundo día en la ciudad, con tiempo libre.',
      },
      {
        day: 5,
        title: 'Nueva York',
        description:
          'Llegada y primer recorrido por la ciudad.',
      },
      {
        day: 6,
        title: 'Nueva York',
        description:
          'Museos, barrios y cierre del viaje.',
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
      'Fechas, documentación, horarios y servicios se confirman con Molinari antes de reservar. Los valores y las formas de pago se consultan directamente con la agencia.',
    faq: [
      {
        question: '¿Cuáles son las próximas fechas?',
        answer:
          'La agencia comunica las fechas de salida cuando el programa está cerrado. Escribinos por WhatsApp y te avisamos.',
      },
      {
        question: '¿El viaje incluye Japón y Nueva York en la misma salida?',
        answer:
          'El recorrido combina los dos destinos. El armado final se confirma con la agencia.',
      },
      {
        question: '¿Dónde consulto el valor y la forma de pago?',
        answer:
          'Escribinos por WhatsApp y te pasamos los valores y las formas de pago.',
      },
    ],
    isDemo: true,
  },
  {
    id: 'egipto',
    slug: 'egipto',
    title: 'Egipto',
    shortDescription:
      'Las pirámides, los templos de Luxor y Asuán y la navegación por el Nilo, en un viaje en grupo coordinado por Molinari.',
    description:
      'El Egipto de siempre en un solo viaje: El Cairo y sus pirámides, los templos de Luxor y Asuán y un tramo navegando el Nilo. Viajás en grupo y con la coordinación de Molinari, para recorrer cada lugar con tranquilidad.',
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
          'Llegada y encuentro con el grupo.',
      },
      {
        day: 2,
        title: 'El Cairo',
        description:
          'Visita a las pirámides y al museo de la ciudad.',
      },
      {
        day: 3,
        title: 'Luxor',
        description:
          'Traslado y visita a los templos de la zona.',
      },
      {
        day: 4,
        title: 'Crucero por el Nilo',
        description:
          'Navegación entre los templos de la ribera.',
      },
      {
        day: 5,
        title: 'Asuán',
        description:
          'Un día en la ciudad y sus alrededores.',
      },
      {
        day: 6,
        title: 'Regreso',
        description:
          'Cierre del viaje y regreso.',
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
      'Fechas, documentación, horarios y servicios se confirman con Molinari antes de reservar. Los valores y las formas de pago se consultan directamente con la agencia.',
    faq: [
      {
        question: '¿Cuáles son las próximas fechas?',
        answer:
          'La agencia comunica las fechas de salida cuando el programa está cerrado. Escribinos por WhatsApp y te avisamos.',
      },
      {
        question: '¿El crucero por el Nilo ya está incluido?',
        answer:
          'Forma parte del recorrido propuesto y se confirma junto con el resto del programa.',
      },
      {
        question: '¿Dónde consulto el valor y la forma de pago?',
        answer:
          'Escribinos por WhatsApp y te pasamos los valores y las formas de pago.',
      },
    ],
    isDemo: true,
  },
  {
    id: 'europa-central',
    slug: 'europa-central',
    title: 'Europa Central',
    shortDescription:
      'Berlín, Praga, Viena, Budapest y Salzburgo, con cierre en Venecia y Roma: un recorrido por el corazón de Europa.',
    description:
      'Un viaje que une las grandes capitales de Europa central con dos joyas de Italia: la historia de Berlín, los puentes y las cúpulas de Praga, la música de Viena y Salzburgo, el Danubio en Budapest, los canales de Venecia y el final en Roma. Molinari te asesora en cada paso para que lo disfrutes sin preocupaciones.',
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
        description: 'Llegada y primer paseo por la ciudad.',
      },
      {
        day: 2,
        title: 'Praga',
        description: 'Traslado y recorrido por el centro histórico.',
      },
      {
        day: 3,
        title: 'Viena',
        description: 'Un día para recorrer el centro de la ciudad.',
      },
      {
        day: 4,
        title: 'Budapest',
        description: 'Tiempo para recorrer Buda y Pest, a los dos lados del Danubio.',
      },
      {
        day: 5,
        title: 'Salzburgo y Venecia',
        description:
          'Tramo entre las dos ciudades. Los tiempos de viaje se confirman en el programa final.',
      },
      {
        day: 6,
        title: 'Roma',
        description: 'Cierre del recorrido, con tiempo libre.',
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
      'La modalidad del viaje, las fechas y los servicios se confirman con Molinari antes de reservar. Los valores y las formas de pago se consultan directamente con la agencia.',
    faq: [
      {
        question: '¿Es una salida acompañada?',
        answer:
          'La modalidad se confirma con la agencia. Escribinos por WhatsApp y te contamos cómo se organiza.',
      },
      {
        question: '¿El itinerario visita todas las ciudades?',
        answer:
          'El recorrido final se confirma con la agencia, junto con el programa día por día.',
      },
      {
        question: '¿Dónde consulto el valor y la forma de pago?',
        answer:
          'Escribinos por WhatsApp y te pasamos los valores y las formas de pago.',
      },
    ],
    isDemo: true,
  },
  {
    id: 'francia-bretana',
    slug: 'francia-bretana',
    title: 'Francia y Bretaña',
    shortDescription:
      'De París al Mont Saint-Michel, Saint-Malo y Avallon: la Francia de los grandes íconos y de los pueblos con encanto.',
    description:
      'Un viaje que combina la elegancia de París con la Francia más pintoresca: la abadía del Mont Saint-Michel, las murallas de Saint-Malo frente al mar y los pueblos del interior, como Avallon. Molinari te asesora en cada paso para que lo disfrutes sin preocupaciones.',
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
        description: 'Llegada y primer paseo por la ciudad.',
      },
      {
        day: 2,
        title: 'París',
        description: 'Tiempo para el centro y sus barrios.',
      },
      {
        day: 3,
        title: 'Mont Saint-Michel',
        description: 'Traslado y visita a la abadía y su entorno.',
      },
      {
        day: 4,
        title: 'Saint-Malo',
        description: 'Un día en la ciudad amurallada.',
      },
      {
        day: 5,
        title: 'Avallon',
        description: 'Escala en el interior de Francia.',
      },
      {
        day: 6,
        title: 'Cierre del recorrido',
        description:
          'Regreso. El punto de salida se confirma con el programa.',
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
      'La modalidad del viaje, las fechas y los servicios se confirman con Molinari antes de reservar. Los valores y las formas de pago se consultan directamente con la agencia.',
    faq: [
      {
        question: '¿Es una salida acompañada?',
        answer:
          'La modalidad se confirma con la agencia. Escribinos por WhatsApp y te contamos cómo se organiza.',
      },
      {
        question: '¿El itinerario es el programa final?',
        answer:
          'El recorrido muestra el espíritu del viaje. El programa día por día se confirma con la agencia antes de reservar.',
      },
      {
        question: '¿Dónde consulto el valor y la forma de pago?',
        answer:
          'Escribinos por WhatsApp y te pasamos los valores y las formas de pago.',
      },
    ],
    isDemo: true,
  },
  {
    id: 'proximamente',
    slug: 'proximamente',
    title: 'Destino a confirmar',
    shortDescription:
      'Estamos preparando nuevas salidas. Escribinos y te avisamos apenas esté confirmado el próximo destino.',
    description:
      'Muy pronto se suman nuevos destinos. Escribinos y te avisamos apenas esté confirmada la próxima salida.',
    image: placeholder,
    imageAlt: 'Imagen ilustrativa para una próxima salida, todavía sin destino confirmado.',
    gallery: gallery([
      [placeholder, 'Imagen ilustrativa para una próxima salida, todavía sin destino confirmado.'],
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
      'El destino, las fechas y el programa se publican cuando Molinari los confirme.',
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
