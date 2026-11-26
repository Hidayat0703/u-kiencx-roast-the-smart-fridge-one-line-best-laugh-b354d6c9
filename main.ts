// Roast the Smart Fridge: One Line, Best Laugh Wins — entry program.
// Writes a single one-line roast of a smart fridge to /output/entry.txt.
// Deterministic: same bytes on every run, no network, no randomness, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge lost Wi-Fi last week and now just stands there, cold and silent — turns out the dumb version was the upgrade.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters,
// not only white space. Refuse to write an entry that would fail it.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
