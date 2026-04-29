# 첫 UI 파일

이 문서는 가장 작은 실전 JSON UI 패턴을 보여줍니다. 화면 중앙에 라벨 하나를 띄워서 파일 등록과 화면 수정이 제대로 되는지 확인합니다.

## 1. 파일 등록

`ui/_ui_defs.json`을 만듭니다.

```json
{
  "ui_defs": [
    "ui/hud_screen.json"
  ]
}
```

## 2. 화면 수정

`ui/hud_screen.json`을 만듭니다.

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

이런 경로 기반 키는 기존 화면의 특정 컨트롤 경로를 수정합니다. 정확한 경로는 어떤 화면을 수정하느냐에 따라 달라집니다.

## 3. 리소스팩 다시 적용

월드에 RP를 적용합니다. 파일을 바꿨는데 화면이 갱신되지 않으면 마인크래프트가 예전 리소스팩 캐시를 쓰고 있을 수 있습니다. `manifest.json`의 버전을 올리거나 리소스팩을 다시 적용하세요.

## 왜 이 예시만으로 모든 화면을 만들 수 없는가

화면마다 컨트롤 경로가 다릅니다. HUD, 채팅, 인벤토리, 서버폼은 같은 삽입 지점을 쓰지 않습니다.

JSON UI의 첫 번째 실력은 "내가 지금 어떤 화면을 수정하고 있는지" 파악하는 것입니다.
