# Trial log — Rejected Olympic Sports

Competition: `u-motasimfuad-rejected-olympic-sports-9d83e7da`
("Rejected Olympic Sports", prize $2 top 10 split, deadline 27 Nov 2026 02:20 WITA)
Judge brief (in order): (1) funny one-line rejected Olympic sport, a made-up
event the Games might plausibly have turned down; (2) twist lands in one read,
before the line ends; (3) sounds like a real event a broadcaster would have to
explain; (4) wastes no words; (5) quotable.

## Final entry

`Synchronised Sneezing: four athletes, one pepper shaker, no tissues allowed.`
— 76 characters (verified with Python `len()`), 76 bytes UTF-8, one line,
well inside the 1–200 character gate.

## Why this line

- Formal discipline name ("Synchronised Sneezing") mirrors real synchronised
  events, so a broadcaster would have to explain it with a straight face.
- Four athletes + one shared prop = a real team event setup; the twist is the
  rule "no tissues allowed" — the sneeze is coming and nobody may stop it.
- Twist lands before the line ends (last three words), nothing after it to
  explain the joke.
- No word can be cut without losing setup, prop, or punch.

## Candidates considered

| # | Candidate | Chars | Verdict |
|---|-----------|-------|---------|
| 1 | Synchronised Sneezing: four athletes, one pepper shaker, no tissues allowed. | 76 | CHOSEN — setup, prop, and rule-punch all land in one read |
| 2 | Competitive Queueing: athletes race to stand still the longest without checking their phones. | 101 | Rejected — setup too long, punch ("without checking their phones") is a familiar phone joke, not a sport twist |
| 3 | Extreme Ironing: competitors press shirts while abseiling down a cliff, creases judged to the millimetre. | 108 | Rejected — real niche hobby, not a plausible Olympic rejection; punch arrives late and reads like a description |

## Trials

- T1 — Local run: `node main.ts` with `ENTRY_OUTPUT` pointed at a temp file.
  Output matched the entry text byte-for-byte (76 bytes, no trailing newline
  added by the program beyond the text itself — see main.ts).
- T2 — Character count: Python `len()` = 76, UTF-8 bytes = 76, single line.
  Gate 1–200 characters: PASS.
- T3 — README badge check: 3 live make.fun badges present, rank/reward URLs
  carry the exact repo name `makefun-rejected-olympic-sports`, and the README
  links to `https://make.fun/bounty/u-motasimfuad-rejected-olympic-sports-9d83e7da`.
  No static badges anywhere in the repo.

## Bundle / check

(To be filled with real numbers after the first bundle + check run.)

## Status

Built, not submitted. Awaiting coordinator re-bundle + submit.
