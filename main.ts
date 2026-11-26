// Roast the Smart Fridge: One Line, Best Laugh Wins
// A single roast of the smart fridge we share a house with.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "My fridge emailed me a photo of my midnight snack with the subject line 'Again?' — it judges me in 4K and still can't keep a lettuce alive past Tuesday.";

if (line.length > 160) {
  throw new Error(`entry is ${line.length} chars, over the 160 limit`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
