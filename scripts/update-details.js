const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');

const detailsMapping = {
  'aancha-top-details.ts': '/images/uttarakhand/aancha-top.webp',
  'adi-kailash-details.ts': '/images/uttarakhand/adi-kailash-om-parvat.png',
  'ali-bedni-bugyal-details.ts': '/images/uttarakhand/ali-bedni.png',
  'bagini-glacier-details.ts': '/images/uttarakhand/bagini-glacier.jpg',
  'bagji-bugyal-details.ts': '/images/uttarakhand/bagji-bugyal.png',
  'bali-pass-details.ts': '/images/uttarakhand/bali-pass.jpg',
  'binsar-details.ts': '/images/uttarakhand/binsar.jpg',
  'black-peak-details.ts': '/images/uttarakhand/black-peak.png',
  'brahmatal-details.ts': '/images/uttarakhand/brahmatal.jpg',
  'char-dham-details.ts': '/images/uttarakhand/char-dham-yatra.jpg',
  'chirbatiya-details.ts': '/images/uttarakhand/chirbatiya.jpg',
  'chopta-chandrashila-3-day-details.ts': '/images/uttarakhand/chopta-chandrashila.jpg',
  'chopta-chandrashila-deoriatal-details.ts': '/images/uttarakhand/chopta-chandrashila.jpg',
  'dayara-bugyal-details.ts': '/images/uttarakhand/dayara-bugyal.jpg',
  'deoban-details.ts': '/images/uttarakhand/deoban.jpg',
  'do-dham-details.ts': '/images/uttarakhand/do-dham-yatra.jpg',
  'dodham-chopta-chandrashila-details.ts': '/images/uttarakhand/chopta-chandrashila.jpg',
  'dodital-darwa-pass-details.ts': '/images/uttarakhand/dodital.png',
  'dudhatoli-details.ts': '/images/uttarakhand/dudhatoli.webp',
  'gaumukh-gangotri-details.ts': '/images/uttarakhand/gaumukh-gangotri.jpg',
  'gaumukh-tapovan-details.ts': '/images/uttarakhand/gaumukh-tapovan.png',
  'gulabi-kantha-details.ts': '/images/uttarakhand/gulabi-kantha.jpg',
  'har-ki-dun-details.ts': '/images/uttarakhand/har-ki-dun.jpg',
  'kedar-tal-details.ts': '/images/uttarakhand/kedar-tal.png',
  'kedarkantha-details.ts': '/images/uttarakhand/kedarkantha.jpg',
  'kedarnath-details.ts': '/images/uttarakhand/kedarnath.jpg',
  'kuari-pass-details.ts': '/images/uttarakhand/kuari-pass.jpg',
  'mukta-top-details.ts': '/images/uttarakhand/mukta-top.jpg',
  'nag-tibba-details.ts': '/images/uttarakhand/nag-tibba.jpg',
  'panchkedar-details.ts': '/images/uttarakhand/panchkedar.png',
  'pangarchulla-peak-details.ts': '/images/uttarakhand/pangarchulla-peak.png',
  'panwali-kantha-details.ts': '/images/uttarakhand/panwali-kantha.jpg',
  'phulara-ridge-details.ts': '/images/uttarakhand/phulara-ridge.jpg',
  'pindari-glacier-details.ts': '/images/uttarakhand/pindari-glacier.jpg',
  'ranthan-kharak-details.ts': '/images/uttarakhand/ranthan-kharak.jpg',
  'roopkund-details.ts': '/images/uttarakhand/roopkund.jpg',
  'rudragaira-peak-details.ts': '/images/uttarakhand/rudragaira-peak.jpg',
  'satopanth-lake-details.ts': '/images/uttarakhand/satopanth-lake.jpg',
  'satopanth-peak-details.ts': '/images/uttarakhand/satopanth-peak.png',
  'surya-top-details.ts': '/images/uttarakhand/surya-top.jpg',
  'valley-of-flowers-details.ts': '/images/uttarakhand/valley-of-flowers.jpg',
  'yoga-meditation-retreat-details.ts': '/images/uttarakhand/yoga-retreat.png'
};

let updated = 0;
for (const [fileName, imagePath] of Object.entries(detailsMapping)) {
  const filePath = path.join(dataDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', fileName);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (/image:\s*['"][^'"]*['"]/.test(content)) {
    content = content.replace(/image:\s*['"][^'"]*['"]/, `image: "${imagePath}"`);
    fs.writeFileSync(filePath, content, 'utf8');
    updated++;
    console.log(`Updated: ${fileName} -> ${imagePath}`);
  } else if (content.includes('overview:')) {
    content = content.replace('overview:', `image: "${imagePath}",\n  overview:`);
    fs.writeFileSync(filePath, content, 'utf8');
    updated++;
    console.log(`Inserted image in: ${fileName} -> ${imagePath}`);
  } else {
    console.warn(`Could not update: ${fileName}`);
  }
}

console.log(`Total details files updated: ${updated}/${Object.keys(detailsMapping).length}`);
