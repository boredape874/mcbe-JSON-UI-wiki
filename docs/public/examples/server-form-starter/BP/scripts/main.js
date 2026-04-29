import { system, world } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

const OPEN_ITEM = "minecraft:compass";

world.afterEvents.itemUse.subscribe((event) => {
  const player = event.source;
  const item = event.itemStack;

  if (!player || item?.typeId !== OPEN_ITEM) {
    return;
  }

  system.run(() => showMainMenu(player));
});

async function showMainMenu(player) {
  const form = new ActionFormData()
    .title("Wiki Server Menu")
    .body("This form is opened by script and rendered by RP/ui/server_form.json.")
    .button("Warps", "textures/items/compass")
    .button("Shop", "textures/items/emerald")
    .button("Settings", "textures/items/redstone_dust");

  const response = await form.show(player);
  if (response.canceled) {
    return;
  }

  switch (response.selection) {
    case 0:
      player.sendMessage("Open your warp form here.");
      break;
    case 1:
      player.sendMessage("Open your shop form here.");
      break;
    case 2:
      await showSettings(player);
      break;
  }
}

async function showSettings(player) {
  const form = new ModalFormData()
    .title("Wiki Settings")
    .toggle("Show HUD panel", true)
    .slider("Menu scale", 80, 120, 10, 100)
    .dropdown("Language", ["English", "Korean", "Spanish"], 0);

  const response = await form.show(player);
  if (response.canceled) {
    return;
  }

  const [showHud, scale, languageIndex] = response.formValues;
  player.sendMessage(`Settings: hud=${showHud}, scale=${scale}, language=${languageIndex}`);
}
