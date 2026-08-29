const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../all-images/pics-himachal');
const destDir = path.join(__dirname, '../public/images/himachal');
const dataDir = path.join(__dirname, '../src/data');

// Ensure dest dir exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// 1. Copy and rename images
const images = fs.readdirSync(srcDir);
const slugMap = {};

for (const image of images) {
  if (image.startsWith('.')) continue;
  
  // Clean the slug (e.g. "beas kund trek.jpg" -> "beas-kund.jpg")
  const ext = path.extname(image);
  let base = path.basename(image, ext).toLowerCase();
  
  // Remove trailing " trek" or " expedition" or " pass" if it helps matching,
  // but wait, standardizing to match the slug is better.
  let slug = base.replace(/\s+/g, '-').replace(/-trek$/, '').replace(/-expedition$/, '').replace(/-expedetion$/, '');
  
  // Custom manual mappings for some edge cases to match our DB/slugs:
  if (slug === 'pin-parvati-pass') slug = 'pin-parvati';
  if (slug === 'pin-bhaba') slug = 'pin-bhaba-pass';
  if (slug === 'kanmao-peak') slug = 'kanamo-peak'; 
  
  const newName = `${slug}${ext}`;
  
  fs.copyFileSync(
    path.join(srcDir, image),
    path.join(destDir, newName)
  );
  
  // Map base/slug to the new image path
  slugMap[slug] = `/images/himachal/${newName}`;
  
  // Also store variations for better matching
  slugMap[slug.replace(/-pass$/, '')] = `/images/himachal/${newName}`;
  slugMap[slug + '-pass'] = `/images/himachal/${newName}`;
  slugMap[slug + '-trek'] = `/images/himachal/${newName}`;
}

console.log('Copied and mapped images:', slugMap);

// 2. Update treks.ts
const treksTsPath = path.join(dataDir, 'treks.ts');
let treksContent = fs.readFileSync(treksTsPath, 'utf-8');

// A simple replace approach for heroImage based on slug mapping
for (const [slug, imgPath] of Object.entries(slugMap)) {
  const regex = new RegExp(`id:\\s*['"][^'"]+['"],\\s*title:\\s*['"][^'"]+['"],\\s*slug:\\s*['"]${slug}['"][\\s\\S]*?heroImage:\\s*['"]([^'"]+)['"]`, 'g');
  treksContent = treksContent.replace(regex, (match, currentImg) => {
    return match.replace(`heroImage: '${currentImg}'`, `heroImage: '${imgPath}'`)
                .replace(`heroImage: "${currentImg}"`, `heroImage: '${imgPath}'`);
  });
}

fs.writeFileSync(treksTsPath, treksContent);
console.log('Updated treks.ts');

// 3. Update details files
const detailFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('-details.ts'));

for (const file of detailFiles) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract slug
  const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
  if (slugMatch) {
    const fileSlug = slugMatch[1];
    
    // Check if we have an image for this slug
    if (slugMap[fileSlug]) {
      const imgPath = slugMap[fileSlug];
      // Update image property
      content = content.replace(/image:\s*['"][^'"]+['"]/, `image: '${imgPath}'`);
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    }
  }
}

console.log('Done!');
