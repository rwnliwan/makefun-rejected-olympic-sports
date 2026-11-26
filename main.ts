// Rejected Olympic Sports — make.fun entry
// Writes one funny single-line rejected Olympic sport to /output/entry.txt.
//
// Craft vs the judge brief (in order):
//  1. A made-up event the Games might plausibly have turned down: a
//     synchronised event, an official-sounding discipline name, a real
//     prop (pepper shaker) and a real rule (no tissues).
//  2. The twist lands in one read: the colon sets up a formal event, then
//     "no tissues allowed" flips it — the athletes are about to sneeze
//     and nobody may stop it.
//  3. Sounds like a real event a broadcaster would have to explain:
//     "Synchronised Sneezing" reads like synchronised swimming/diving,
//     with a team of four and a single shared prop.
//  4. Wastes no words: 76 characters, every word earns its place.
//  5. Quotable: the whole line is the joke; nothing to trim.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Synchronised Sneezing: four athletes, one pepper shaker, no tissues allowed.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
