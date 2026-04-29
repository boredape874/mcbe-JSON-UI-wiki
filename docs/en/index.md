# MCBE JSON UI Wiki

This wiki teaches Minecraft Bedrock JSON UI from the ground up.

If you are new, start here:

1. [What Is JSON UI?](./guide/what-is-json-ui.md)
2. [Resource Pack Flow](./guide/resource-pack-flow.md)
3. [First UI File](./guide/first-ui-file.md)
4. [Server Forms](./server-forms/index.md)

JSON UI is not web UI. It is a resource-pack UI system used by the Bedrock client. You edit JSON files inside an RP, register those files, and let the game build screens from control trees.

If you build servers with PMMP or behavior-pack scripts, start with server forms. Most practical custom menus enter JSON UI through `server_form.json`, then bind server-provided title text, body text, button collections, and custom-form fields into your own layout.

<img class="jsonui-diagram" src="/assets/diagrams/load-flow.svg" alt="JSON UI loading flow">
