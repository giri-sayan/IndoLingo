const fs = require('fs');
const path = require('path');

const mappings = [
  { file: 'telugu_data.cjs', dest: 'telugu.js', exportName: 'TELUGU_COURSE' },
  { file: 'bengali_data.cjs', dest: 'bengali.js', exportName: 'BENGALI_COURSE' },
  { file: 'kannada_data.cjs', dest: 'kannada.js', exportName: 'KANNADA_COURSE' },
  { file: 'malayalam_data.cjs', dest: 'malayalam.js', exportName: 'MALAYALAM_COURSE' },
  { file: 'marathi_data.cjs', dest: 'marathi.js', exportName: 'MARATHI_COURSE' },
  { file: 'punjabi_data.cjs', dest: 'punjabi.js', exportName: 'PUNJABI_COURSE' },
  { file: 'gujarati_data.cjs', dest: 'gujarati.js', exportName: 'GUJARATI_COURSE' },
  { file: 'hindi_data.cjs', dest: 'hindi.js', exportName: 'HINDI_COURSE' }
];

const destDir = path.resolve(__dirname, '../../src/data/courses');

for (const m of mappings) {
  const sourcePath = path.resolve(__dirname, m.file);
  const data = require(sourcePath);
  const outPath = path.join(destDir, m.dest);
  const code = `export const ${m.exportName} = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(outPath, code, 'utf8');
  console.log(`Successfully built ${m.dest} (${m.exportName}) with ${data.units.length} units and ${data.alphabet.length} alphabet letters.`);
}

console.log("All course files successfully generated!");
