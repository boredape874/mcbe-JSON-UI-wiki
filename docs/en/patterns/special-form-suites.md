# Special Form Suites

Special form suites are groups of related server-form screens that share one router and one visual language.

Examples:

- phone or PDA style UI
- compact crafting menus
- shop and auction forms
- crate preview and reward forms
- battle command panels
- database and storage UI

## Recommended Structure

```text
ui/
  server_form.json
  forms/
    device/
      index.json
      home.json
      contacts.json
      storage.json
    market/
      shop.json
      auction.json
      preview.json
```

## Router Rule

Use clear route tokens:

```text
[device:home]
[market:shop]
[battle:attack]
```

Avoid one vague title token for the whole suite.

## Shared Templates

Create shared templates for:

- shell frame
- header
- close/back buttons
- list rows
- icon buttons
- loading placeholder

This keeps a large UI suite consistent.
