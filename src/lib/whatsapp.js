import { site } from '../config/site.js';

function buildWhatsAppLink(message) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppLink() {
  return buildWhatsAppLink(
    'Hola, estuve viendo la página web de Molinari Viajes y quisiera recibir más información. Muchas gracias.',
  );
}

export function getPackageWhatsAppLink(packageName) {
  return buildWhatsAppLink(
    `Hola, estuve viendo en la página web de Molinari Viajes el paquete ${packageName} y quisiera recibir más información sobre las fechas, el itinerario y las formas de pago. Muchas gracias.`,
  );
}
