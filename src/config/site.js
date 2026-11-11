const domain = 'molinariviajes.com.ar';

export const site = {
  name: 'Molinari Viajes',
  description:
    'Agencia de viajes y turismo en Trelew. Salidas acompañadas y asesoramiento personalizado.',
  address: 'Belgrano 461, Trelew, Chubut',
  instagram: {
    handle: '@molinariviajes_',
    url: 'https://www.instagram.com/molinariviajes_/',
  },
  // Pendiente de confirmar con el cliente.
  whatsappNumber: '',
  // Pendiente de confirmar con el cliente.
  phones: [],
  // Datos tomados de los perfiles públicos el 06/11/2026; actualizar antes de publicar.
  reviews: {
    google: {
      rating: 4.9,
      count: 11,
      // Pendiente: link a la ficha de Google Maps de Molinari Viajes.
      url: '',
    },
    facebook: {
      rating: 5.0,
      count: 5,
      followers: 'más de 3.400',
    },
    instagram: {
      followers: 'más de 1.000',
    },
  },
  legal: {
    legajo: '8608',
  },
  // Salidas confirmadas de la barra de anuncios. `name` se pinta en blanco; el resto del texto, en lila.
  // whatsapp: true usa el enlace general de WhatsApp.
  announcements: [
    {
      name: 'Cartagena',
      text: '✈ Cartagena · 7 noches all inclusive · enero y febrero 2027',
      href: '/paquetes/cartagena',
    },
    {
      name: 'Japón y Nueva York',
      text: '✈ Japón y Nueva York · marzo 2027',
      href: '/paquetes/japon-nueva-york',
    },
    {
      name: 'Europa',
      text: '✈ Europa · septiembre 2027',
      href: '/paquetes/europa-central',
    },
    {
      text: 'Consultanos por WhatsApp',
      whatsapp: true,
    },
  ],
  domain,
  url: 'https://demomolinariviajes.vercel.app',
  isDemo: true,
};
