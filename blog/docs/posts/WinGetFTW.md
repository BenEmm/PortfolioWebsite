---
date: 2026-05-19
categories:
  - Windows
  - Productivity
authors:
  - Ben
---

# WinGet FTW!

Windows Package Manager, better known as `winget`, has become one of my favourite little tools for maintaining Windows machines. It turns software installation from a click-heavy chore into something repeatable, searchable, and scriptable. 

I used to use Chocolatey, and on macOS I’m a fan of Homebrew, but on Windows it’s great to have a native tool. Especially in the era of supply-chain attacks and package managers like npm being targeted, one can at least hope that Microsoft’s version will be a little more robust — though many packages do ultimately point to third-party vendors, so caution should still be exercised.

## Why I Like It

It's simple! Want to upgrade *almost all* of the software on your PC in one command, silently, in the background whilst you get on with other stuff? WinGet has got you.

```powershell
winget upgrade --all --include-unknown --accept-package-agreements --accept-source-agreements --silent
```

This command will accept all of those annoying agreements for you, it does away with installation wizards and handles those automatically in the background. I have this command set to run as a scheduled task weekly at a time I'm usually at my PC so that I never have to worry about my applications being out of date or vulnerabilities running rampant.

## Useful Commands

| Task | Command |
| --- | --- |
| Search for an app | `winget search 7zip` |
| Install an app | `winget install 7zip` |
| List installed apps | `winget list` |
| Upgrade one app | `winget upgrade 7zip` |
| Upgrade everything | `winget upgrade --all` |

## Where It Fits

`winget` isn't a full configuration management system, but it doesn't need to be. For PCs, test environments, and quick rebuilds, it removes a lot of friction.

## Where It Doesn't
Sadly it's not supported in Windows Server 2016-2022, if it were it'd make my life remediating vulnerabilities a lot simpler. It is supported in Server 2025 though, so I have that to look forward to.