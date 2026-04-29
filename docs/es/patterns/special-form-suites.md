# Suites de forms especiales

Una suite de forms especiales es un grupo de pantallas de server form que comparten router y lenguaje visual.

Ejemplos:

- UI tipo teléfono o PDA
- menús compactos de crafteo
- forms de tienda y subasta
- crate preview y recompensas
- paneles de comandos de batalla
- UI de base de datos o almacenamiento

## Estructura recomendada

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

## Regla de router

Usa tokens claros:

```text
[device:home]
[market:shop]
[battle:attack]
```

Evita usar un solo token vago para toda la suite.

## Templates compartidos

Conviene compartir:

- shell frame
- header
- botones close/back
- filas de lista
- icon buttons
- loading placeholder

Así una suite grande mantiene estilo consistente.
