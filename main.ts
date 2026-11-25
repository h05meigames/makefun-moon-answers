// The Moon Finally Answers Back — make.fun entry
// u-mang-the-moon-finally-answers-back-781a7ec1
//
// One line, in the voice of the Moon, answering everyone who has ever
// stared up at it: the wishes, the howls, the late-night promises.
// Deterministic: the same line every run, printed to stdout and written
// to /output/entry.txt (the file the gate scores).

import { mkdirSync, writeFileSync } from "node:fs";

// Revised line: the draft buried its punch mid-sentence and then fizzled.
// This version front-loads the setup (four billion years on the job,
// all three provocations named: wishes, howls, 2 a.m. promises), saves
// the grievance for the middle, and lands the whole comeback on a
// one-word kicker at the very end, so the turn arrives before the line
// ends. The Moon is wry, old, and tired of being wished upon — and,
// after all that listening, nobody ever wished it anything back.
const LINE =
  "Four billion years of wishes, howls, and 2 a.m. promises — and the best any of you ever did for me was plant a flag and leave footprints. Rude.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
process.stdout.write(LINE + "\n");
