import sharp from 'sharp';

const source = 'src/assets/images/brand/logo-horizontal.png';
const { data, info } = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

for (let y = 98; y < height; y++) {
  for (let x = 165; x < width; x++) {
    const i = (y * width + x) * channels;
    data[i] = 0;
    data[i + 1] = 0;
    data[i + 2] = 0;
    data[i + 3] = 0;
  }
}

let minX = width;
let minY = height;
let maxX = 0;
let maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (data[(y * width + x) * channels + 3] < 16) continue;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
}

const crop = {
  left: minX,
  top: minY,
  width: maxX - minX + 1,
  height: maxY - minY + 1,
};

await sharp(data, { raw: { width, height, channels } })
  .extract(crop)
  .png()
  .toFile('src/assets/images/brand/logo-wordmark.png');

console.log(crop);
