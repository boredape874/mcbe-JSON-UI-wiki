# 첫 UI 파일

가장 작은 실전 예시는 HUD 중앙에 라벨 하나를 추가하는 것입니다. 이 예시는 JSON UI 파일이 어떻게 로드되고 화면에 붙는지 확인하기 좋습니다.

## 1. 파일 등록

`ui/_ui_defs.json`:

```json
{
  "ui_defs": [
    "ui/hud_screen.json"
  ]
}
```

## 2. 화면 수정

`ui/hud_screen.json`:

```json
{
  "namespace": "hud",
  "root_panel/root_panel/test_label": {
    "type": "label",
    "text": "Hello Bedrock UI",
    "localize": false,
    "size": [160, 20],
    "anchor_from": "center",
    "anchor_to": "center",
    "color": [1, 1, 1],
    "shadow": true
  }
}
```

이런 경로 수정은 기존 화면의 특정 컨트롤 경로에 새 컨트롤을 넣는 방식입니다.

## 3. 다시 적용

변경했는데 보이지 않으면 리소스팩 캐시가 남아 있을 수 있습니다. `manifest.json` 버전을 올리거나 팩을 다시 적용해 보세요.

서버폼을 작업할 때도 원리는 같습니다. `hud_screen.json` 대신 `server_form.json`을 등록하고, `third_party_server_screen` 또는 factory 경로를 수정합니다.
