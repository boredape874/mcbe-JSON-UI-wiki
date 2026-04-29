# 바로 쓰는 예제 코드

이 페이지는 설명용 글이 아니라 실제 파일 묶음입니다. `RP`와 `BP` 구조를 그대로 넣어 두었기 때문에, 어떤 파일을 어디에 둬야 하는지 바로 볼 수 있습니다.

## 서버폼 스타터

서버폼을 처음 만질 때는 이 예제부터 보는 게 가장 빠릅니다.

```text
server-form-starter/
  RP/
    manifest.json
    ui/
      _ui_defs.json
      server_form.json
  BP/
    manifest.json
    scripts/
      main.js
```

파일 바로가기:

- [RP manifest](/examples/server-form-starter/RP/manifest.json)
- [RP ui/_ui_defs.json](/examples/server-form-starter/RP/ui/_ui_defs.json)
- [RP ui/server_form.json](/examples/server-form-starter/RP/ui/server_form.json)
- [BP manifest](/examples/server-form-starter/BP/manifest.json)
- [BP scripts/main.js](/examples/server-form-starter/BP/scripts/main.js)

동작 방식은 단순합니다. 플레이어가 나침반을 쓰면 BP Script가 서버폼을 열고, 리소스팩의 `server_form.json`이 기본 서버폼 화면을 커스텀 레이아웃으로 바꿔 그립니다.

### RP/ui/server_form.json

<<< @/public/examples/server-form-starter/RP/ui/server_form.json{json}

### BP/scripts/main.js

<<< @/public/examples/server-form-starter/BP/scripts/main.js{js}

## 복사해서 쓰는 스니펫

아래 파일들은 완성 팩이 아니라 부품입니다. 자기 팩의 namespace, 컨트롤 이름, 텍스처 경로에 맞게 바꿔 넣으면 됩니다.

### 커스텀 토글

토글은 상태를 보관하는 컨트롤입니다. 단순 클릭 애니메이션용이면 버튼을 쓰는 편이 낫고, on/off 상태가 필요할 때만 토글을 쓰세요.

<<< @/public/examples/snippets/custom_toggle.json{json}

### 프로그레스바

가장 안정적인 방식은 바 전체를 늘리는 게 아니라, `clips_children`가 켜진 패널의 너비만 바꾸는 방식입니다.

<<< @/public/examples/snippets/progress_bar.json{json}

### 서버폼 검색 필터

`common.text_edit_box`의 입력값을 각 `form_buttons` 아이템에서 읽고, 버튼 텍스트에 검색어가 포함될 때만 보이게 하는 구조입니다.

<<< @/public/examples/snippets/search_button_filter.json{json}

## 버전 메모

예제 BP manifest는 `@minecraft/server` `2.0.0`, `@minecraft/server-ui` `2.0.0`을 사용합니다. 더 최신 beta를 목표로 하면 dependency 버전만 먼저 맞추고, 제목/버튼 인덱스/필드 인덱스 같은 서버폼 연동 규칙은 그대로 유지하세요.
