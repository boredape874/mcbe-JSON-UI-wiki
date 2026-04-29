# 첫 UI 파일

가장 작은 실전 예시는 HUD 중앙에 라벨을 띄우는 것입니다.

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

이런 경로형 키는 기존 화면의 특정 컨트롤 경로에 새 컨트롤을 넣거나 수정합니다.

## 3. 팩 다시 적용

변경했는데 안 보이면 리소스팩 캐시일 수 있습니다. `manifest.json` 버전을 올리거나 팩을 다시 적용하세요.
