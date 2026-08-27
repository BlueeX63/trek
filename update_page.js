const fs = require('fs');

const generatedSlugs = JSON.parse(fs.readFileSync('generated_slugs.json', 'utf-8'));

function toCamelCase(str) {
  return str.split('-').map((word, index) => {
    if (index === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}

let pageContent = fs.readFileSync('src/app/treks/[slug]/page.tsx', 'utf-8');

// Generate imports
let imports = '';
let routing = '';

for (const slug of generatedSlugs) {
  const objName = toCamelCase(slug) + 'Details';
  imports += `import { ${objName} } from "@/data/${slug}-details";\n`;
  routing += `  } else if (slug === "${slug}") {\n    trekData = ${objName};\n`;
}

// Inject imports before `import { treks }`
pageContent = pageContent.replace('import { treks }', imports + 'import { treks }');

// Inject routing before the final `} else {` block
pageContent = pageContent.replace('  } else {\\n    // Look up basic info', routing + '  } else {\\n    // Look up basic info');

fs.writeFileSync('src/app/treks/[slug]/page.tsx', pageContent);
console.log('Successfully updated page.tsx with 53 new imports and routing logic.');
