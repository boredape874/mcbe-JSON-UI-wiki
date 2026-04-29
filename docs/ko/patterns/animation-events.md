# 애니메이션 이벤트

JSON UI 애니메이션은 보통 이름이 있는 UI 이벤트에서 재생됩니다. 좋은 구조는 이벤트를 발생시키는 컨트롤과 실제로 애니메이션되는 컨트롤을 분리합니다.

<img class="jsonui-diagram" src="/assets/diagrams/animation-event-flow.svg" alt="애니메이션 이벤트 흐름">

## 기본 이벤트 패턴

입력 컨트롤이 커스텀 버튼 이벤트를 발생시킵니다.

```json
{
  "from_button_id": "button.menu_select",
  "to_button_id": "button.panel.slide_in",
  "mapping_type": "pressed"
}
```

애니메이션 컨트롤은 `play_event`로 그 이벤트를 듣습니다.

```json
{
  "anim_type": "offset",
  "duration": 0.35,
  "easing": "out_cubic",
  "from": [80, 0],
  "to": [0, 0],
  "play_event": "button.panel.slide_in",
  "resettable": true
}
```

## 안정적인 wrapper 규칙

컨트롤이 파괴되고 다시 생성되면 이벤트 타이밍을 추적하기 어려워집니다. 안정적인 wrapper를 유지하고 그 안의 자식을 애니메이션하세요.

```text
stable_panel
  motion_panel  <- anims는 여기에 둠
    content
```

## 상태와 모션 분리

복잡한 UI에서 하나의 이벤트가 모든 일을 하게 만들지 마세요.

더 좋은 분리:

- 상태 이벤트: 선택된 탭이나 visible route 변경
- 모션 이벤트: 전환 애니메이션 재생

서버폼에서는 custom mapping이 폼 제출이나 닫힘을 의도치 않게 발생시키지 않도록 주의하세요. 확실하지 않다면 실제 폼 제출은 `button.form_button_click`에만 연결하세요.

## 자주 쓰는 애니메이션 타입

| 타입 | 용도 |
| --- | --- |
| `offset` | 패널 슬라이드, 카드 이동 |
| `size` | 확대/축소, pulse, 프로그레스 착시 |
| `alpha` | fade in/out |
| `uv` 또는 sprite 계열 값 | 대상 화면이 지원하는 경우 텍스처 애니메이션 |

## 반복 재생 체크리스트

애니메이션이 한 번만 재생되고 멈추면:

1. `play_event`가 있는가?
2. `resettable`이 true인가?
3. 이벤트가 다시 발생하는가?
4. 애니메이션 컨트롤이 살아 있는가?
5. 다른 상태 변화가 애니메이션 전에 컨트롤을 교체하고 있지 않은가?
