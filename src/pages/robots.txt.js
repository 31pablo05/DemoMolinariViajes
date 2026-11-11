import { site } from '../config/site.js';

const previewBots = [
  'facebookexternalhit',
  'Facebot',
  'WhatsApp',
  'Twitterbot',
  'LinkedInBot',
  'TelegramBot',
  'Slackbot',
];

export function GET() {
  const lines = site.isDemo
    ? [
        ...previewBots.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
        'User-agent: *',
        'Disallow: /',
      ]
    : ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL('sitemap-index.xml', site.url).href}`];

  return new Response(`${lines.join('\n')}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
