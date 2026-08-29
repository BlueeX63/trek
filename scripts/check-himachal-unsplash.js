const fs = require('fs');

const content = fs.readFileSync('src/data/treks.ts', 'utf-8');
const himachalSection = content.split('// Himachal Pradesh')[1].split('// Ladakh')[0];

if (himachalSection.includes('unsplash')) {
  console.log('treks.ts still has unsplash in himachal section');
  const matches = [...himachalSection.matchAll(/slug:\s*['"]([^'"]+)['"][\s\S]*?heroImage:\s*['"](https:\/\/images\.unsplash[^'"]+)['"]/g)];
  console.log(matches.map(m => m[1]));
} else {
  console.log('No unsplash URLs in Himachal section.');
}
