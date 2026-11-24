// The Robot Pickup Line Championship — entry (Node 22, standard library only).
//
// Writes one pickup line, a single line of at most 200 characters, in the voice
// of a robot trying to charm someone, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line, chosen against the judge's brief, most important first:
// 1. a robot's pickup line, spoken by the robot itself;
// 2. the joke grows out of being a machine (a battery, not a heart);
// 3. the turn is unexpected: the robot spends its last percent of charge
//    on the walk over, not on the line itself;
// 4. every word earns its place; 5. charming, not creepy.
const LINE =
  'My battery is at 1%, and I spent my last percent walking over here to ask your name.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The kit's hard gate: an invalid entry.txt is never judged, so fail loudly
// instead of writing one. One line, 1-200 characters, no trailing newline.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  throw new Error(`invalid line: ${LINE.length} characters`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${LINE.length} characters): ${LINE}`);
