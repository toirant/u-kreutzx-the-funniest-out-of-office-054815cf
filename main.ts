// The Funniest Out-of-Office — make.fun bounty
// u-kreutzx-the-funniest-out-of-office-054815cf
//
// Writes one line — the funniest out-of-office auto-reply I could write —
// to /output/entry.txt. The sealed scorer gates on 1–140 UTF-8 characters,
// a single line, nothing else. Plain `node main.ts`, no flags.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. 132 characters, one line. The twist: the inbox is home alone
// and already answering mail by itself — so the sender gets to disown
// whatever it says next.
const ENTRY =
  "I'm out of office until Monday. My inbox is home alone and has already replied to three people. Whatever it said, I deny everything.";

// The grader mounts the output directory and runs this as an unprivileged
// user, so the output directory itself is never removed — only the files
// inside it are cleared, and only when the directory already exists.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function clearOutputDir(dir) {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { force: true, recursive: true });
  }
}

function main() {
  if (ENTRY.length < 1 || ENTRY.length > 140) {
    throw new Error(
      `entry must be 1-140 characters, got ${ENTRY.length}`,
    );
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  mkdirSync(outDir, { recursive: true });
  clearOutputDir(outDir);
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

  // Read it back and confirm the file on disk is byte-identical to the
  // entry, so a silent write failure can never pass as a valid run.
  const written = readFileSync(join(outDir, "entry.txt"), "utf8");
  if (written !== ENTRY) {
    throw new Error("entry.txt on disk does not match the entry");
  }
  const byteLength = Buffer.byteLength(written, "utf8");

  console.log(ENTRY);
  console.log(`(${ENTRY.length} characters, ${byteLength} UTF-8 bytes, one line)`);
}

main();
