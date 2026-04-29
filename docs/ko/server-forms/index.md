# 서버폼 개요

서버폼은 서버 개발자가 JSON UI를 실전에서 가장 자주 만지는 진입점입니다. PMMP 플러그인, BP Script, 명령 시스템이 폼을 열면 베드락 클라이언트는 리소스팩의 `server_form` 화면으로 그 폼을 렌더링합니다.

핵심 흐름은 아래와 같습니다.

<img class="jsonui-diagram" src="/assets/diagrams/server-form-flow.svg" alt="서버폼 흐름">

```text
서버 코드가 폼을 연다
        -> 베드락 클라이언트가 제목, 본문, 버튼, 입력 필드를 받는다
        -> RP/ui/server_form.json이 표시 방식을 결정한다
        -> 플레이어가 클릭하거나 제출한다
        -> 결과가 서버 코드로 돌아간다
```

## JSON UI가 읽는 값

일반 액션폼에서는 주로 아래 값을 사용합니다.

- `#title_text`: 서버가 보낸 폼 제목
- `#form_text`: 서버가 보낸 본문
- `form_buttons`: 버튼 컬렉션
- `#form_button_text`: 버튼 하나를 그릴 때의 텍스트
- `#form_button_texture`: 서버가 버튼 이미지를 보냈을 때의 텍스처 경로

커스텀 폼은 `custom_form` 경로로 들어오며 입력칸, 토글, 슬라이더, 드롭다운, 라벨 같은 필드를 렌더링합니다.

## 추천 파일 구조

`server_form.json`은 얇게 유지하는 것이 좋습니다. 모든 디자인을 한 파일에 넣지 말고 라우터 역할만 맡기세요.

```text
RP/
  ui/
    _ui_defs.json
    server_form.json
    forms/
      shop_menu/
        index.json
        templates.json
        motion.json
      trait_tree/
        index.json
        templates.json
```

서버폼은 금방 커집니다. 상점, 관리자 패널, 특성 트리, 이미지 폼, 설정 폼을 전부 `server_form.json` 하나에 넣으면 유지보수가 어려워집니다.

## 서버와 리소스팩의 약속

커스텀 UI를 안정적으로 열려면 서버와 리소스팩이 같은 규칙을 공유해야 합니다.

- 제목 접두사: `[shop] Main Menu`
- 숨김 토큰: `§0shop_menu`
- 폼 종류: 액션폼인지 커스텀 폼인지
- 버튼 순서: 버튼 인덱스 `0`, `1`, `2`가 서버 동작과 어떻게 연결되는지
- 페이로드 텍스트: 버튼 텍스트나 본문 안에 JSON UI가 파싱할 마커를 넣는지

UI를 만들기 전에 이 약속을 먼저 정하세요. 서버폼 오류의 상당수는 레이아웃 문제가 아니라 서버 코드와 리소스팩 사이의 약속이 어긋난 문제입니다.

## 다음 문서

1. [라우팅](./routing.md)
2. [액션 버튼](./action-buttons.md)
3. [커스텀 폼](./custom-forms.md)
