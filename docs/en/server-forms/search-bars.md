# Search Bars

A server-form search bar filters the visible buttons in a `form_buttons` collection.

The usual pieces are:

- `common.text_edit_box` for player input
- a view binding that stores the current query
- a visibility expression on each button template
- a fallback state when the query is empty

## Basic Idea

```text
text_edit_box value
        -> #search
        -> each button compares #form_button_text with #search
        -> non-matching buttons become invisible
```

## Case Sensitivity

String comparisons are case-sensitive by default. That means `stone` and `Stone` are different.

For simple menus, this is acceptable. For large production menus, prefer one of these:

- send lowercase button labels from the server
- send a separate lowercase search key in the button payload
- normalize the input with a controlled helper

## Server-Side Search Key

The cleanest pattern is to make the server send a predictable key.

```text
visible label: Stone Bricks
search key: stone bricks
button index: 12
```

JSON UI can then filter against the key while showing a polished label.

## Layout Advice

Keep the search bar outside the scrolling button area. If the search box is inside the same collection panel as the results, focus and clipping problems become harder to debug.

Recommended shape:

```text
form shell
  header
    search input
  body
    filtered button grid
```

## Server Authority

Search only changes what the player sees. It should not change server-side validation. If the player clicks button index `12`, the server should still validate what button `12` means.
