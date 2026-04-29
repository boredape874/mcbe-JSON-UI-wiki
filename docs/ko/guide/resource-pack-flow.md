# 리소스팩 흐름

JSON UI는 리소스팩 안에서 동작합니다. 베드락 클라이언트는 아무 JSON 파일이나 자동으로 읽지 않습니다. 올바른 위치에 넣고 `_ui_defs.json`에 등록해야 합니다.

<img class="jsonui-diagram" src="/assets/diagrams/load-flow.svg" alt="리소스팩 UI 로딩 흐름">

## 최소 구조

```text
MyPack_RP/
  manifest.json
  ui/
    _ui_defs.json
    hud_screen.json
    server_form.json
  textures/
    ui/
      my_icon.png
```

## 파일 역할

`manifest.json`은 이 폴더가 리소스팩이라는 것을 알려줍니다.

`ui/_ui_defs.json`은 어떤 UI JSON 파일을 로드할지 등록합니다.

`ui/server_form.json`, `ui/hud_screen.json` 같은 파일은 베드락 기본 화면을 수정하거나 대체합니다.

`textures/ui/`에는 UI에서 사용할 이미지가 들어갑니다.

## `_ui_defs.json` 예시

```json
{
  "ui_defs": [
    "ui/server_form.json",
    "ui/hud_screen.json"
  ]
}
```

여기에 빠진 UI 파일은 게임이 로드하지 않을 수 있습니다. 서버폼을 만들 때도 `ui/server_form.json`이 등록되어 있는지 먼저 확인하세요.
