const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../src/data/treks.ts');
let content = fs.readFileSync(file, 'utf-8');

const mapping = {
  'beas-kund': '/images/himachal/beas-kund.jpg',
  'bhrigu-lake': '/images/himachal/bhrigu-lake.jpg',
  'buran-ghati': '/images/himachal/buran-ghati.jpg',
  'chandrakhani-pass': '/images/himachal/chandrakhani-pass.jpg',
  'deo-tibba': '/images/himachal/deo-tibba-peak.jpg',
  'friendship-peak': '/images/himachal/friendship-peak.jpg',
  'kanamo-peak': '/images/himachal/kanamo-peak.jpg',
  'kareri-lake': '/images/himachal/kareri-lake.jpg',
  'pin-parvati': '/images/himachal/pin-parvati.jpg',
  'rupin-pass': '/images/himachal/rupin-pass.jpg',
  'sar-pass': '/images/himachal/sar-pass.jpg',
  'yunam-peak': '/images/himachal/yunam-peak.jpg'
};

for (const [slug, imgPath] of Object.entries(mapping)) {
  // Find the slug index
  const slugRegex = new RegExp(`slug:\\s*['"]${slug}['"]`);
  const match = content.match(slugRegex);
  if (match) {
    const startIndex = match.index;
    
    // Find the next heroImage after this slug
    const heroImageRegex = /heroImage:\s*['"]([^'"]+)['"]/;
    // We only want to search in the chunk of text after the slug (say next 1000 characters)
    const chunk = content.slice(startIndex, startIndex + 1000);
    const heroMatch = chunk.match(heroImageRegex);
    
    if (heroMatch) {
      const currentImageLine = heroMatch[0];
      const newImageLine = `heroImage: '${imgPath}'`;
      
      // Replace only this specific occurrence
      const before = content.slice(0, startIndex);
      const after = content.slice(startIndex);
      const replacedAfter = after.replace(currentImageLine, newImageLine);
      
      content = before + replacedAfter;
      console.log(`Updated ${slug} -> ${imgPath}`);
    } else {
      console.log(`Could not find heroImage for ${slug}`);
    }
  } else {
    console.log(`Could not find slug ${slug}`);
  }
}

fs.writeFileSync(file, content);
console.log('Done updating treks.ts');
