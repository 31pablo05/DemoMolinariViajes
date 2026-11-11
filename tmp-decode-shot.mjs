import fs from 'node:fs';

const src = process.argv[2];
const dest = process.argv[3];
const j = JSON.parse(fs.readFileSync(src, 'utf8'));
const d = j.data || (j.result && j.result.data);
if (!d) {
  console.error(Object.keys(j));
  process.exit(1);
}
fs.writeFileSync(dest, Buffer.from(d, 'base64'));
console.log('wrote', dest, d.length);
