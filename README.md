# obvious-skills

You know that context you type into every AI coding tool, every single session, since the dawn of "vibe coding"? "Fix the bug." "Add tests." "Just write the code, no explanations." That's not a prompt, that's a personality trait at this point.

This is that. Packaged. As slash commands. So you can stop hand-typing your own personality into a chatbox forty times a day.

Ships pre-wired for [Claude Code](https://claude.com/claude-code), but let's be honest — a skill here is a markdown file with two lines in it. Cursor, Codex, Antigravity, whatever the next "agentic IDE" calls itself next quarter — they all eat plain text. Copy, paste, done. We even threw in `/convert-claude-to-cursor` and `/convert-cursor-to-claude` so you can pretend the format matters.

## Install

```bash
npx obvious-skills           # install to ~/.claude/skills/ (all projects)
npx obvious-skills --local   # install to .claude/skills/ (this project only)
```

Restart Claude Code after installing so it picks up the new skills. Using Cursor/Codex/Antigravity/etc? Grab the file from `skills/` and drop it wherever that tool hoards its prompts. Revolutionary stuff, we know.

## Usage

Once installed, invoke any skill as a slash command inside Claude Code:

```
/fix-the-bug
/add-tests
/code-review
```

List everything available without installing:

```bash
npx obvious-skills --list
```

## Available skills

| Command | Description |
| --- | --- |
| `/add-documentation` | Add documentation to the current code |
| `/add-error-handling` | Add error handling |
| `/add-logging` | Add logging |
| `/add-tests` | Add tests to the current code |
| `/add-types` | Add TypeScript types |
| `/be-senior` | Act as a senior developer |
| `/clean-up-the-code` | Clean up the code |
| `/code-review` | Code review my changes |
| `/convert-claude-to-cursor` | Convert Claude Code skills, commands, and agents to Cursor equivalent |
| `/convert-cursor-to-claude` | Convert Cursor rules, agents, and commands to Claude Code equivalent |
| `/fix-the-bug` | Fix the bug |
| `/improve-performance` | Improve the performance of the current code |
| `/just-write-the-code` | Just write the code, no explanations |
| `/make-it-production-ready` | Make it production ready |
| `/make-it-work` | Make it work |
| `/refactor-to-proper-system-design` | Refactor the codebase to follow proper system design principles |
| `/remove-console-logs` | Remove all console.log statements |
| `/review-the-pr` | Review the pull request |
| `/security-review` | Do a security review |
| `/ship-it` | Ship it |

## Uninstall

Turns out "having taste" was also just a file. Delete it:

```bash
rm ~/.claude/skills/<skill-name>.md          # global install
rm .claude/skills/<skill-name>.md            # local install
```

## Why does this exist

Because somewhere out there is a developer who typed "please add error handling, thanks" into a chat window with a "please" and a "thanks," and we decided that person needed an intervention, not a therapist.

## License

MIT. Steal it. It's four words per file, there's nothing to steal.
