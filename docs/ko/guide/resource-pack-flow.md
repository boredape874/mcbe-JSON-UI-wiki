# 리소스팩 흐름

JSON UI는 리소스팩 안에서 동작합니다. 베드락 클라이언트는 아무 JSON 파일이나 자동으로 읽지 않습니다. 파일을 올바른 폴더에 넣고 등록해야 합니다.

<img class="jsonui-diagram" src="/assets/diagrams/load-flow.svg" alt="리소스팩 UI 로딩 흐름">

## 최소 리소스팩 구조

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

`manifest.json`은 이 폴더가 리소스팩이라는 것을 마인크래프트에 알려줍니다.

`ui/_ui_defs.json`은 어떤 UI JSON 파일을 로드할지 등록합니다.

`ui/server_form.json`, `ui/hud_screen.json` 같은 파일은 베드락의 특정 기본 화면을 수정하거나 대체합니다.

`textures/ui/`에는 UI 컨트롤에서 사용할 이미지 파일을 넣습니다.

## `_ui_defs.json` 예시

```json
{
  "ui_defs": [
    "ui/server_form.json",
    "ui/hud_screen.json"
  ]
}
```

여기에 등록되지 않은 UI 파일은 베드락이 로드하지 않을 수 있습니다.

## 흔한 실수

`my_menu.json` 같은 파일을 예쁘게 만들어도 그것만으로 화면에 나타나지는 않습니다. 필요한 것은 아래 네 가지입니다.

1. `_ui_defs.json`에 등록된 UI 파일
2. 올바른 `namespace`
3. 기존 화면에 끼워 넣을 위치
4. UI에서 사용하는 텍스처 파일
