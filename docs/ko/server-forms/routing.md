# 서버폼 라우팅

라우팅은 서버가 연 폼을 어떤 커스텀 UI로 보여줄지 고르는 과정입니다.

가장 안정적인 구조는 아래와 같습니다.

1. `third_party_server_screen`이 `server_form.main_screen_content`를 로드합니다.
2. `server_form.json`에는 작은 라우터만 둡니다.
3. 실제 화면은 `ui/forms/<기능>/index.json`으로 보냅니다.
4. 서버 쪽 제목 규칙을 고정합니다.

## 최소 진입 구조

```json
{
  "namespace": "server_form",
  "third_party_server_screen@common.base_screen": {
    "$screen_content": "server_form.main_screen_content",
    "$screen_bg_content": "common.screen_background",
    "render_game_behind": true
  },
  "main_screen_content": {
    "type": "panel",
    "size": ["100%", "100%"],
    "controls": [
      {
        "form_factory": {
          "type": "factory",
          "control_ids": {
            "long_form": "@server_form.long_form_router",
            "custom_form": "@server_form.custom_form_router"
          }
        }
      }
    ]
  }
}
```

`long_form`은 일반 액션폼, `custom_form`은 입력 필드가 있는 커스텀 폼에 대응합니다.

## 제목 접두사 약속

서버 쪽에서 제목에 접두사를 붙이는 방식이 가장 다루기 쉽습니다.

```text
[shop] Shop Menu
[admin] Admin Console
[traits] Trait Tree
```

JSON UI는 `#title_text`를 읽고 해당 마커가 있는 폼만 보여주도록 만들 수 있습니다. 실제 화면에 표시되는 제목은 별도 라벨로 다시 그리거나 원래 제목 라벨을 숨기면 됩니다.

## 실전 규칙

기능 하나당 라우트 하나를 두세요.

```text
server_form.json
  -> forms/shop_menu/index.json
  -> forms/admin_console/index.json
  -> forms/trait_tree/index.json
```

`server_form.json`은 "이 폼이 어떤 폼인가?"만 판단하게 하고, "이 폼이 어떻게 생겼는가?"는 각 기능 폴더에서 처리하는 편이 안전합니다.
