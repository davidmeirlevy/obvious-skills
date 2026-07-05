# obvious-skills

You know that context you type into every AI coding tool, every single session, since the dawn of "vibe coding"? "Fix the bug." "Add tests." "Just write the code, no explanations." That's not a prompt, that's a personality trait at this point.

This is that. Packaged. As slash commands. So you can stop hand-typing your own personality into a chatbox forty times a day.

Works with Claude Code, Cursor, Codex, Antigravity, and whatever the next "agentic IDE" calls itself next quarter — they all speak the same [Agent Skills](https://github.com/vercel-labs/skills) format. We didn't write our own installer for that. We're not maniacs. We use [`npx skills`](https://github.com/vercel-labs/skills), the one everyone else already agreed on.

## Install

```bash
npx skills add davidmeirlevy/obvious-skills                     # install every skill, pick your agent(s) interactively
npx skills add davidmeirlevy/obvious-skills --agent claude-code  # install for Claude Code specifically
npx skills add davidmeirlevy/obvious-skills --agent cursor       # or Cursor
npx skills add davidmeirlevy/obvious-skills -g                   # install globally instead of per-project
```

Only want one skill instead of the full personality disorder? Install it individually:

```bash
npx skills add davidmeirlevy/obvious-skills -s fix-the-bug
```

## Usage

Once installed, invoke any skill as a slash command in your agent of choice:

```
/fix-the-bug
/add-tests
/code-review
```

List what's in the box before committing to anything:

```bash
npx skills add davidmeirlevy/obvious-skills --list
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
| `/make-it-rules` | Save this session's conclusions as Cursor rules |
| `/make-it-skill` | Turn this session into a reusable skill for next time |
| `/make-it-work` | Make it work |
| `/refactor-to-proper-system-design` | Refactor the codebase to follow proper system design principles |
| `/remove-console-logs` | Remove all console.log statements |
| `/review-the-pr` | Review the pull request |
| `/security-review` | Do a security review |
| `/ship-it` | Ship it |

## Uninstall

Turns out "having taste" was also just a file. Delete it:

```bash
npx skills remove <skill-name>          # remove one
npx skills remove --all                 # remove all of them, and your dignity along with it
```

## Why does this exist

Because somewhere out there is a developer who typed "please add error handling, thanks" into a chat window with a "please" and a "thanks," and we decided that person needed an intervention, not a therapist.

## License

MIT. Steal it. It's four words per file, there's nothing to steal.
