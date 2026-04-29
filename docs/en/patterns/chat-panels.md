# Chat Panels

Chat UI patterns are useful when a server sends messages that should become visual panels instead of normal chat lines.

## Uses

- hidden protocol messages
- command palette hints
- notification panels
- dialogue text
- server announcement styling

## Hide Protocol Messages

A common pattern is:

```text
server sends marker text
        -> chat UI detects marker
        -> raw line becomes invisible
        -> custom panel shows parsed content
```

Use a marker that normal players will not type accidentally.

## Keep Chat Usable

Do not break normal chat layout. If the message is not your protocol message, let it render normally.

## Risk

Chat is not a guaranteed structured transport. Use it for lightweight display, not for critical server state.
