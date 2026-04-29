# 리소스팩 흐름

JSON UI는 리소스팩 안에 들어갑니다. 베드락은 아무 JSON 파일이나 자동으로 읽지 않습니다. 올바른 위치에 넣고 등록해야 합니다.

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

## 각 파일의 역할

`manifest.json`은 이 폴더가 리소스팩임을 알려줍니다.

`ui/_ui_defs.json`은 어떤 UI JSON 파일을 로드할지 알려줍니다.

`ui/server_form.json`, `ui/hud_screen.json` 같은 파일은 특정 기본 화면을 수정합니다.

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

파일이 여기에 없으면 베드락이 로드하지 않을 수 있습니다.
