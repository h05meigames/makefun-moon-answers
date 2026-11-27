// The Moon Finally Answers Back — make.fun entry
// u-mang-the-moon-finally-answers-back-781a7ec1
//
// One line, in the voice of the Moon, answering everyone who has ever
// stared up at it: the wishes, the howls, the late-night promises.
// Deterministic: the same line every run, printed to stdout and written
// to /output/entry.txt (the file the gate scores).

import { mkdirSync, writeFileSync } from "node:fs";

// Round 2 line: round 1 only grumbled about ingratitude ("Rude.").
// This one escalates: the Moon doesn't complain, it resigns — and it
// takes the tides with it. Same setup (wishes, howls, 2 a.m. promises,
// four billion years), but the payoff is an action with real stakes,
// grounded in a true fact (the Moon recedes ~3.8 cm a year), so the
// final clause reframes the whole relationship in one read.
const LINE =
  "I heard every wish, every howl, every 2 a.m. promise for four billion years — and my answer is: I'm leaving, three point eight centimeters a year, and I'm taking the tides with me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
process.stdout.write(LINE + "\n");
