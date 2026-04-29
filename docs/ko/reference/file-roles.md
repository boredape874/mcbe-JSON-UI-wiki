# 파일 역할

JSON UI 리소스팩에서 자주 보는 파일의 역할입니다.

| 파일 | 역할 |
| --- | --- |
| `manifest.json` | 리소스팩을 정의합니다. |
| `ui/_ui_defs.json` | UI 파일을 등록합니다. |
| `ui/hud_screen.json` | HUD 요소를 수정합니다. |
| `ui/chat_screen.json` | 채팅 UI를 수정합니다. |
| `ui/server_form.json` | 서버폼을 커스터마이징하고 라우팅합니다. |
| `textures/ui/*.png` | 이미지 컨트롤에서 쓰는 UI 이미지입니다. |
| `_global_variables.json` | 여러 UI 파일에서 공유하는 값입니다. |

## 얇은 엔트리 파일 규칙

엔트리 파일은 얇게 유지하세요.

- `_ui_defs.json`은 파일 등록만 담당합니다.
- `server_form.json`은 폼 라우팅을 담당합니다.
- `hud_screen.json`은 HUD 위젯 삽입을 담당합니다.

기능별 코드는 폴더로 분리합니다.

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
