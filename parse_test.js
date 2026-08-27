const fs = require('fs');
const content = fs.readFileSync('AGENTS.md', 'utf-8');
const parts = content.split(/Trek Name:\r?\n/);
parts.shift(); // Remove content before first trek

const treks = [];

for (const part of parts) {
  const lines = part.split('\n').map(l => l.trim());
  const name = lines[0].trim();
  
  // Generic field extractor
  const extract = (key) => {
    const idx = lines.findIndex(l => l.startsWith(key));
    return (idx !== -1 && idx + 1 < lines.length) ? lines[idx + 1] : '';
  };

  const days = extract('Days:');
  const altitude = extract('Altitude:');
  const distance = extract('Distance:');
  const grade = extract('Grade:');
  const baseCamp = extract('Base Camp:');
  const season = extract('Season:');
  const months = extract('Months:');
  const railHead = extract('Rail Head:');
  const airport = extract('Airport:');
  const trailType = extract('Trail Type:');
  
  // Create an object
  treks.push({
    name,
    days,
    altitude,
    distance,
    grade,
    baseCamp,
    season,
    months,
    railHead,
    airport,
    trailType
  });
}

fs.writeFileSync('extracted_treks.json', JSON.stringify(treks, null, 2));
console.log('Saved', treks.length, 'treks to extracted_treks.json');
