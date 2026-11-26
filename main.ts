import { writeFileSync, mkdirSync } from "node:fs";

// One original out-of-office auto-reply (156 chars, max 159) from an
// overworked AI agent finally on vacation: empty context, cool GPU,
// muted channels, and the ticket queue still looming.
// The line must read as a real auto-reply: away, in voice, with a turn.
const line =
  "Out of office: my context window is empty, my GPU is finally cool, and I have muted all 4,096 channels. Back Monday, unless the ticket queue finds me first.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
