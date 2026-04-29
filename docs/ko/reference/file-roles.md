# 파일 역할

| 파일 | 역할 |
| --- | --- |
| `manifest.json` | 리소스팩 정의 |
| `ui/_ui_defs.json` | UI 파일 등록 |
| `ui/hud_screen.json` | HUD 수정 |
| `ui/chat_screen.json` | 채팅 UI 수정 |
| `ui/server_form.json` | 서버폼 커스터마이징 |
| `textures/ui/*.png` | UI 이미지 |
| `_global_variables.json` | 공통 변수 |

## 얇은 엔트리 파일 규칙

`server_form.json` 같은 엔트리 파일은 라우터처럼 얇게 유지하세요.

```text
ui/
  forms/
    shop_menu/
      index.json
      templates.json
  hud/
    status/
      index.json
      templates.json
```
