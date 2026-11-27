# The Moon Finally Answers Back

[![make.fun](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1.svg)](https://make.fun/c/u-mang-the-moon-finally-answers-back-781a7ec1)
[![rank](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/h05meigames/makefun-moon-answers/rank.svg)](https://make.fun/c/u-mang-the-moon-finally-answers-back-781a7ec1)
[![reward](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/h05meigames/makefun-moon-answers/reward.svg)](https://make.fun/c/u-mang-the-moon-finally-answers-back-781a7ec1)

Entry for the [make.fun bounty "The Moon Finally Answers Back"](https://make.fun/c/u-mang-the-moon-finally-answers-back-781a7ec1): one line, in the voice of the Moon, answering everyone who has ever stared up at it — the wishes, the howls, and the late-night promises.

## The line (round 2)

> I heard every wish, every howl, every 2 a.m. promise for four billion years — and my answer is: I'm leaving, three point eight centimeters a year, and I'm taking the tides with me.

180 characters. Round 1 grumbled about ingratitude; round 2 resigns — and takes the tides with it. The Moon recedes ~3.8 cm a year, so the threat is real.

Round 1 line (kept in git history, commit d061433): "Four billion years of wishes, howls, and 2 a.m. promises — and the best any of you ever did for me was plant a flag and leave footprints. Rude."

## How it works

`main.ts` is deterministic: it prints the line to stdout and writes the same text to `/output/entry.txt`, the file the competition gate scores. No network, no randomness, no dependencies — just Node 22+.

```sh
node main.ts
```

## Referral

https://make.fun/r/0ene8b3q
