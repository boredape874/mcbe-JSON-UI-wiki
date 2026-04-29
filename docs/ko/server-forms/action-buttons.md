# 액션폼 버튼

액션폼은 `form_buttons`라는 컬렉션으로 버튼 목록을 렌더링합니다. 컬렉션의 아이템 하나가 서버 버튼 하나입니다.

일반적인 렌더링 흐름은 아래와 같습니다.

```text
form_buttons 컬렉션
        -> grid 또는 stack panel
        -> 아이템마다 버튼 템플릿 하나 생성
        -> 템플릿 안에서 #form_button_text, #form_button_texture 사용
```

## 버튼 그리드

메뉴형 폼은 보통 그리드가 편합니다.

```json
{
  "button_grid": {
    "type": "grid",
    "collection_name": "form_buttons",
    "grid_dimensions": [3, 1],
    "maximum_grid_items": 3,
    "grid_item_template": "server_form.menu_button",
    "size": [620, 140]
  }
}
```

## 버튼 템플릿

서버에 클릭 결과가 돌아가려면 `button.form_button_click` 연결을 유지해야 합니다.

```json
{
  "menu_button": {
    "type": "button",
    "size": [190, 110],
    "default_control": "default",
    "hover_control": "hover",
    "pressed_control": "pressed",
    "button_mappings": [
      {
        "from_button_id": "button.menu_select",
        "to_button_id": "button.form_button_click",
        "mapping_type": "pressed"
      }
    ],
    "bindings": [
      {
        "binding_type": "collection_details",
        "binding_collection_name": "form_buttons"
      }
    ]
  }
}
```

버튼 비주얼은 눌리는데 서버에서 응답을 못 받는다면 먼저 `button.form_button_click` 매핑을 확인하세요.

## 잠긴 버튼

특성 노드나 상점 아이템을 잠금 처리할 때는 실제 버튼 인덱스를 안정적으로 유지하세요. JSON UI에서는 자물쇠 오버레이를 보여주고, 서버에서도 클릭을 다시 검증해야 합니다. 잠금 해제 여부를 JSON UI에만 맡기면 우회 가능성이 생깁니다.
