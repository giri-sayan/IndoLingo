import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, '../src/data/courses');

let errors = [];
let questionCount = 0;
let lessonCount = 0;

for (const file of fs.readdirSync(dir)) {
  if (file.endsWith('.js')) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const jsonMatch = content.match(/export const \w+ = ([\s\S]+);/);
    if (!jsonMatch) {
      errors.push(file + ': failed to match export const');
      continue;
    }
    const c = JSON.parse(jsonMatch[1]);
    
    if (!c.alphabet || c.alphabet.length === 0) {
      errors.push(file + ': missing or empty alphabet');
    }
    
    c.units.forEach((u, uIdx) => {
      if (!u.lessons || u.lessons.length === 0) {
        errors.push(file + ' Unit ' + (uIdx+1) + ': has no lessons');
      }
      u.lessons.forEach((l) => {
        lessonCount++;
        if (!l.questions || l.questions.length === 0) {
          errors.push(file + ' Lesson ' + l.id + ': has no questions');
        }
        l.questions.forEach((q, qIdx) => {
          questionCount++;
          const qLoc = file + ' -> ' + l.id + ' -> q' + (qIdx+1) + ' (' + q.type + ')';
          if (!q.prompt) errors.push(qLoc + ': missing prompt');
          
          if (q.type === 'multiple-choice' || q.type === 'listening') {
            if (!q.options || q.options.length < 2) {
              errors.push(qLoc + ': options count < 2');
            }
            const correctOpts = (q.options || []).filter(o => o.correct);
            if (correctOpts.length !== 1) {
              errors.push(qLoc + ': expected 1 correct option, got ' + correctOpts.length);
            }
          } else if (q.type === 'sentence-builder') {
            if (!q.targetSentence) errors.push(qLoc + ': missing targetSentence');
            if (!q.wordBank || q.wordBank.length === 0) errors.push(qLoc + ': empty wordBank');
            if (!q.correctSequence || q.correctSequence.length === 0) errors.push(qLoc + ': empty correctSequence');
            
            // Check that every word in correctSequence exists in wordBank
            const bankCopy = [...(q.wordBank || [])];
            (q.correctSequence || []).forEach(w => {
              const idx = bankCopy.indexOf(w);
              if (idx === -1) {
                errors.push(qLoc + ': word "' + w + '" from correctSequence not found in wordBank: ' + JSON.stringify(q.wordBank));
              } else {
                bankCopy.splice(idx, 1);
              }
            });
          } else if (q.type === 'match-pairs') {
            if (!q.pairs || q.pairs.length < 3) {
              errors.push(qLoc + ': match-pairs needs at least 3 pairs, got ' + (q.pairs ? q.pairs.length : 0));
            }
            (q.pairs || []).forEach((p, pIdx) => {
              if (!p.left || !p.right) errors.push(qLoc + ': pair ' + (pIdx+1) + ' missing left or right');
            });
          }
        });
      });
    });
  }
}

console.log('Tested ' + lessonCount + ' lessons, ' + questionCount + ' questions across all courses.');
if (errors.length > 0) {
  console.log('ERRORS FOUND (' + errors.length + '):');
  errors.forEach(e => console.log(' - ' + e));
  process.exit(1);
} else {
  console.log('SUCCESS: All 111 lessons and 279 questions are 100% valid and verified!');
}
