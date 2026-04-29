# 액션폼 버튼

액션폼은 `form_buttons`라는 컬렉션을 렌더링합니다. 이 컬렉션의 각 아이템은 서버가 보낸 버튼 하나입니다.

일반적인 렌더링 흐름은 아래와 같습니다.

```text
form_buttons 컬렉션
        -> grid 또는 stack panel
        -> 아이템마다 버튼 템플릿 하나 생성
        -> 템플릿 안에서 #form_button_text와 #form_button_texture 사용
```

## 버튼 그리드

메뉴형 폼에는 그리드를 사용하는 것이 좋습니다.

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

템플릿은 클릭 이벤트를 `button.form_button_click`에 계속 연결해야 합니다.

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

버튼 비주얼은 눌리는데 서버가 응답을 받지 못한다면, 먼저 `button.form_button_click` 매핑을 확인하세요.

## 잠긴 버튼

잠긴 스킬 노드나 상점 아이템을 만들 때는 실제 버튼 인덱스를 안정적으로 유지하세요. 자물쇠 오버레이를 JSON UI에서 그리더라도, 서버가 클릭을 다시 검증하고 거부해야 합니다. 잠금 상태의 최종 권한을 JSON UI에만 두면 안 됩니다.
