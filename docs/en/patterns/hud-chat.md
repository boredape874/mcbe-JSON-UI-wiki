# HUD And Chat

HUD and chat UI are often used for live overlays.

## HUD

Use HUD modifications when you want persistent information:

- health bars
- mana bars
- quest trackers
- scoreboard-style overlays

## Chat

Chat UI can be used to show or hide special messages. Some packs use hidden text markers as a lightweight protocol.

## Title and actionbar

Many servers send structured title/actionbar text. JSON UI can parse parts of that text with bindings and show custom panels.

## Warning

Do not overuse chat or actionbar protocols for data that needs strong reliability. For complex systems, pair JSON UI with server-side validation.
