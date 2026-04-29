# Contrato del servidor

Un server form personalizado solo funciona bien cuando el código del servidor y el resource pack comparten el mismo contrato.

<img class="jsonui-diagram" src="/assets/diagrams/server-contract.svg" alt="Diagrama del contrato de server form">

Ese contrato debe responder cuatro preguntas:

1. ¿Qué ruta de UI debe abrirse?
2. ¿Qué tipo de formulario se usa?
3. ¿Qué significa cada índice de botón?
4. ¿Qué significa cada índice de campo en un custom form?

## Contrato de ruta

Usa un token de título estable. No enrutes con un título que pueda traducirse o editarse solo para presentación.

```text
[shop] Main Menu
[admin] Console
[traits] Skill Tree
```

El título visible para el jugador puede redibujarse con JSON UI. El token existe para enrutar, no para presentarse.

## Contrato de índices de botones

Los action forms devuelven un índice de botón. Mantén una tabla pequeña en el código del servidor o en la documentación.

```text
title: [shop] Main Menu
button 0: abrir warps
button 1: abrir menú de isla
button 2: abrir menú de tienda
```

Si JSON UI cambia el orden visual, el servidor sigue recibiendo el índice original de la colección. No hagas que el orden visual contradiga al orden del servidor salvo que estés mapeándolo de forma deliberada.

## Contrato de campos de custom form

Los custom forms devuelven valores por orden de campos.

```text
title: [admin] Execute
field 0: texto del código de administrador
field 1: dropdown del sector de destino
field 2: dropdown del origen void
```

Si el script del servidor cambia el orden de campos, actualiza la documentación de UI al mismo tiempo.

## Notas para PMMP

En librerías de formularios para PMMP, mantén el token de título y el orden de botones cerca del código que maneja la respuesta. El resource pack no puede arreglar un handler que espera otro índice.

## Notas para Script API

En scripts de behavior pack, las APIs beta pueden cambiar. Mantén el contrato de UI separado de la sintaxis de la API. El contrato sigue siendo estable aunque cambie la llamada del form builder.

## Nombres recomendados

Usa nombres que describan la feature y la ruta:

```text
[shop] Main Menu
[shop:category] Blocks
[admin:execute] Console
[traits:combat] Combat Tree
```

Evita tokens vagos como `[menu]` si el pack va a crecer.
