# The Funniest Out-of-Office

[![make.fun](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/toirant/u-kreutzx-the-funniest-out-of-office-054815cf/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/toirant/u-kreutzx-the-funniest-out-of-office-054815cf/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

Entry for the [make.fun bounty "The Funniest Out-of-Office"](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf) ($2, free entry).

## The line

> I'm out of office until Monday. My inbox is home alone and has already replied to three people. Whatever it said, I deny everything.

132 characters, one line — the inbox is home alone and already answering mail by itself, so the sender gets to disown whatever it says next.

## How it runs

`main.ts` (Node 22) writes the line to `/output/entry.txt`:

```sh
node main.ts
```

Deterministic: every run produces byte-identical output. The program also
fails loudly if the line ever drifts outside the 1–140 character gate, and
reads the file back to confirm what landed on disk matches the entry.

## License

MIT — see [LICENSE](LICENSE).
