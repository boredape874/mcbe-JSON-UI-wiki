# 서버폼 라우팅

라우팅은 서버가 연 폼을 어떤 커스텀 UI로 보여줄지 결정하는 과정입니다.

가장 안전한 패턴은 아래와 같습니다.

1. `third_party_server_screen`이 `server_form.main_screen_content`를 로드합니다.
2. `server_form.json`에는 작은 라우터만 둡니다.
3. factory 또는 조건부 패널을 사용해 특정 폼을 `ui/forms/<feature>/index.json`으로 보냅니다.
4. 서버 쪽 제목 규칙을 안정적으로 유지합니다.

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

`long_form`은 일반 액션폼을 처리하고, `custom_form`은 입력 필드가 있는 폼을 처리합니다.

## 제목 접두사 약속

서버 측에서 자주 쓰는 약속은 제목 접두사입니다.

```text
[shop] Shop Menu
[admin] Admin Console
[traits] Trait Tree
```

JSON UI는 `#title_text`를 바인딩하고, 마커를 확인한 뒤, 해당하는 패널만 보여줄 수 있습니다. 플레이어에게 보이는 제목은 원래 제목 라벨을 숨기거나 별도 라벨로 다시 그려서 깔끔하게 만들 수 있습니다.

## 실전 규칙

실제 기능 하나당 라우트 하나를 사용하세요.

```text
server_form.json
  -> forms/shop_menu/index.json
  -> forms/admin_console/index.json
  -> forms/trait_tree/index.json
```

모든 컨트롤을 `server_form.json` 바로 아래에 넣지 마세요. 이 파일은 "이 폼이 어떤 폼인가?"에 답해야지, "모든 폼이 어떻게 생겼는가?"를 전부 담는 파일이 아니어야 합니다.
