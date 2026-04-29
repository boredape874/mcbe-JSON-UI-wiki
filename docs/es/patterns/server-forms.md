# Patrones de server form

Esta página reúne patrones prácticos que puedes reutilizar después de entender el flujo básico de un server form.

## Patrón de router pequeño

Usa `server_form.json` solo para la entrada de pantalla y el enrutamiento. Coloca cada feature en su propia carpeta.

```text
ui/server_form.json
ui/forms/shop_menu/index.json
ui/forms/shop_menu/templates.json
ui/forms/admin_console/index.json
ui/forms/traits/index.json
```

Esto mantiene legibles los packs grandes de UI para servidores.

## Patrón de token en el título

El servidor envía un marcador estable en el título.

```text
[shop] Shop Menu
[admin] Admin Console
```

El RP usa ese marcador para elegir un layout personalizado. El título que ve el jugador puede ser un label limpio, así que no hace falta mostrar el marcador.

## Patrón de botones por colección

Usa `form_buttons` para acciones enviadas por el servidor. Mantén reutilizable el template del botón y enlaza los detalles de la colección dentro del template.

Útil para:

- tarjetas de categoría de tienda
- menús de warps
- paneles de acciones de administración
- nodos de traits o skills
- tiles de menú con imágenes

## Patrón de barra de búsqueda

Una búsqueda dentro de un server form normalmente combina:

- `common.text_edit_box` para el input
- un view binding que copia el texto del input a una propiedad de búsqueda
- una expresión de visibilidad en cada botón que compara `#form_button_text` con el texto buscado

La búsqueda distingue mayúsculas y minúsculas si no agregas una capa de normalización. En menús de producción, suele ser mejor que el servidor envíe también una clave de búsqueda en minúsculas para evitar trucos costosos del lado de la UI.

## Patrón de nodo bloqueado

Para skill trees, quests y menús de progresión:

1. Mantén cada nodo como un índice normal de botón del servidor.
2. Dibuja el icono y el candado en JSON UI.
3. Deja que el servidor rechace clicks en nodos bloqueados.
4. Usa la siguiente actualización del formulario para quitar el candado después del desbloqueo.

La UI comunica el estado. El servidor debe hacer cumplir el estado.

## Patrón basado en texturas

Los formularios de alta calidad suelen usar texturas personalizadas para:

- fondo del panel
- fondo de tarjetas
- marco de hover
- estado pressed
- overlay de candado
- slots de iconos

Usa controles JSON para layout y estado, pero usa texturas para gradientes complejos, bordes pixel-art y sombras decorativas. Es más estable que apilar muchos paneles translúcidos.
