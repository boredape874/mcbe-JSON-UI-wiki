# 커스텀 토글

커스텀 토글은 지속적인 on/off 상태, checked/unchecked 시각 상태, 애니메이션이 있는 스위치 효과가 필요할 때 사용합니다.

<img class="jsonui-diagram" src="/assets/diagrams/toggle-illusion.svg" alt="애니메이션 토글 착시 구조">

## 어떤 컨트롤을 쓸지 먼저 고르기

지속 상태가 필요하면 실제 toggle을 사용하세요.

- 설정 on/off
- 선택된 탭
- 표시/숨김 상태
- radio 버튼처럼 한 상태만 선택되는 메뉴

클릭 이벤트만 필요하면 button이 더 적합합니다.

- 애니메이션 재생
- 다음 페이지 이동
- 카드 pulse 효과
- 서버폼 버튼 제출

`common.toggle`을 범용 이벤트 발생기처럼 억지로 쓰지 마세요. `toggle_on_button`, `toggle_off_button`은 toggle이 듣는 입력 이벤트에 가깝고, 다른 컨트롤을 위한 안정적인 출력 API가 아닙니다.

## 단순 클릭 애니메이션

클릭으로 애니메이션만 재생하려면 custom pressed event를 가진 버튼이 더 단순합니다.

```json
{
  "type": "button",
  "size": [40, 20],
  "button_mappings": [
    {
      "from_button_id": "button.menu_select",
      "to_button_id": "button.my_feature.play",
      "mapping_type": "pressed"
    }
  ]
}
```

애니메이션 자식은 그 이벤트를 듣습니다.

```json
{
  "anim_type": "offset",
  "duration": 0.25,
  "from": [16, 0],
  "to": [0, 0],
  "play_event": "button.my_feature.play",
  "resettable": true
}
```

## 애니메이션 토글 착시

on/off 애니메이션은 문제를 나누는 편이 안정적입니다.

- 실제 toggle이 `#toggle_state`를 소유
- 바인딩이 상태를 `#collection_length`로 변환
- factory가 entry child 또는 exit child를 생성
- entry/exit child가 생성되면서 애니메이션 재생

토글 자체가 애니메이션되는 것이 아니라, 토글 상태가 바뀐 뒤 새로 생성된 자식 컨트롤이 애니메이션되는 구조라서 착시라고 부릅니다.

## 다중 상태 토글

1페이지 -> 2페이지 -> 3페이지처럼 여러 상태가 필요하면 radio toggle group, 숨김 state toggle, cycler를 사용하세요. toggle 하나는 on/off이므로 세 상태 컨트롤러로 쓰기에 적합하지 않습니다.

## Hover와 Focus

hover와 focus 시각은 아래 상태 컨트롤이 담당합니다.

- `checked_control`
- `unchecked_control`
- `checked_hover_control`
- `unchecked_hover_control`
- locked 상태를 쓰는 경우 locked variants

focus border 색을 바꾸고 싶다면 실제 상태 컨트롤을 교체하세요. 하나의 마법 같은 focus-color 속성을 찾는 방식은 안정적이지 않습니다.

## 디버깅

토글 애니메이션이 한 번만 재생된다면:

1. 애니메이션 컨트롤이 다시 생성되는지 확인합니다.
2. 반복 재생이 필요한 애니메이션에 `resettable: true`를 넣습니다.
3. `play_event`를 쓸 때 animated wrapper를 안정적으로 유지합니다.
4. 상태 이벤트와 모션 이벤트를 분리합니다.
