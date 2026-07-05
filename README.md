# obvious-skills

Blindingly obvious [Claude Code](https://claude.com/claude-code) skills — the skill name IS the instruction.

Each skill is a one-line prompt turned into a slash command, so you can type `/fix-the-bug` instead of typing "fix the bug".

## Install

```bash
npx obvious-skills           # install to ~/.claude/skills/ (all projects)
npx obvious-skills --local   # install to .claude/skills/ (this project only)
```

Restart Claude Code after installing so it picks up the new skills.

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

Skills are just files — delete what you don't want:

```bash
rm ~/.claude/skills/<skill-name>.md          # global install
rm .claude/skills/<skill-name>.md            # local install
```

## License

MIT
