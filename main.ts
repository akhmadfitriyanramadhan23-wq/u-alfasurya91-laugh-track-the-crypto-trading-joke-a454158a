import { mkdirSync, writeFileSync } from "node:fs";

// Laugh Track: The Crypto Trading Joke Contest — one joke about crypto
// and trading life, at most 200 characters. Judge weighs: on-subject
// with setup + turn first, real laugh with surprise payoff, true to
// trading life (chart, bag, group chat), tight, repeatable. Playbook:
// rule -> literal violation -> flat consequence. Draft: "buy the dip"
// taken literally — the dip buys a shovel and digs deeper.
// REVISED: the draft had no price, so any trader could have written
// it. Naming the entry — $92,000 — makes it one particular trade by
// one particular bag-holder, and the em-dash tightens the landing on
// the final image.
const text =
  "I bought the dip at $92,000. The dip bought a shovel and kept digging — my portfolio is now a hole with a view.\n";

// Gate: 1-200 characters, single line, not only whitespace.
const body = text.replace(/\n$/, "");
const codePoints = [...body].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (body.trim().length === 0 || body.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
