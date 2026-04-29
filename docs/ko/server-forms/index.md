# 서버폼 개요

서버폼은 서버 기반 JSON UI 작업에서 가장 실용적인 진입점입니다. PMMP 플러그인, BP Script, 명령 시스템이 폼을 열면 베드락 클라이언트는 리소스팩의 `server_form` 화면을 통해 그 폼을 렌더링합니다.

핵심 흐름은 단순합니다.

<img class="jsonui-diagram" src="/assets/diagrams/server-form-flow.svg" alt="서버폼 흐름">

```text
서버 코드가 폼을 만든다
        -> 베드락이 제목, 본문, 버튼 또는 필드를 받는다
        -> RP/ui/server_form.json이 시각 레이아웃을 결정한다
        -> 플레이어가 클릭하거나 제출한다
        -> 결과가 서버 코드로 돌아간다
```

## JSON UI가 읽을 수 있는 값

일반 액션폼에서 UI가 주로 읽는 값은 아래와 같습니다.

- `#title_text`: 서버가 보낸 제목
- `#form_text`: 서버가 보낸 본문
- `form_buttons`: 버튼 컬렉션
- `#form_button_text`: 컬렉션 아이템을 렌더링할 때의 버튼 텍스트
- `#form_button_texture`: 서버가 이미지 버튼을 보냈을 때의 버튼 이미지 경로

커스텀 폼은 `custom_form` 경로를 사용하며, 폼 내용에 따라 입력칸, 토글, 슬라이더, 드롭다운, 라벨을 렌더링합니다.

## 추천 파일 구조

`server_form.json`은 얇게 유지하세요. 전체 디자인을 넣는 파일이 아니라 라우터로 취급하는 편이 좋습니다.

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

서버폼은 금방 커집니다. 상점, 관리자 패널, 스킬 트리, 이미지 폼, 설정 폼을 모두 하나의 거대한 `server_form.json`에 넣으면 유지보수가 어려워집니다.

## 서버 측 약속

리소스팩과 서버는 커스텀 폼을 어떻게 선택할지 같은 규칙을 공유해야 합니다. 자주 쓰는 약속은 아래와 같습니다.

- 제목 접두사: `[shop] Main Menu`
- 숨김 토큰: `§0shop_menu`
- 폼 종류: 액션폼 또는 커스텀 폼
- 버튼 순서: 버튼 인덱스 `0`, `1`, `2`가 서버 동작에 매핑됨
- 페이로드 텍스트: 버튼 텍스트나 본문에 JSON UI가 파싱할 마커를 포함함

UI를 만들기 전에 이 약속을 문서화하세요. 망가진 서버폼의 대부분은 레이아웃 문제가 아니라 서버와 리소스팩 사이의 약속이 어긋난 문제입니다.

## 다음 문서

1. [라우팅](./routing.md)
2. [서버 계약](./server-contract.md)
3. [액션 버튼](./action-buttons.md)
4. [커스텀 폼](./custom-forms.md)
5. [검색 바](./search-bars.md)
6. [잠금 상태](./locked-states.md)
7. [디버깅](./debugging.md)
