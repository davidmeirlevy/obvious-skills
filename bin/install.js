#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

const args = process.argv.slice(2);
const isLocal = args.includes("--local");
const isHelp = args.includes("--help") || args.includes("-h");

if (isHelp) {
  console.log(`obvious-skills — install blindingly obvious Claude Code skills

Usage:
  npx obvious-skills           install to ~/.claude/skills/ (global)
  npx obvious-skills --local   install to .claude/skills/ (project)
  npx obvious-skills --list    list available skills
`);
  process.exit(0);
}

if (args.includes("--list")) {
  const skillsDir = path.join(__dirname, "..", "skills");
  const files = fs.readdirSync(skillsDir).filter((f) => f.endsWith(".md"));
  console.log("Available skills:");
  files.forEach((f) => console.log(`  /${f.replace(".md", "")}`));
  process.exit(0);
}

const dest = isLocal
  ? path.join(process.cwd(), ".claude", "skills")
  : path.join(os.homedir(), ".claude", "skills");

fs.mkdirSync(dest, { recursive: true });

const skillsDir = path.join(__dirname, "..", "skills");
const files = fs.readdirSync(skillsDir).filter((f) => f.endsWith(".md"));

let installed = 0;
for (const file of files) {
  fs.copyFileSync(path.join(skillsDir, file), path.join(dest, file));
  installed++;
}

console.log(`Installed ${installed} obvious skills to ${dest}`);
console.log("Restart Claude Code to use them.");
