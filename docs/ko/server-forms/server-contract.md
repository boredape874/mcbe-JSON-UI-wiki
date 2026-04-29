# 서버 계약

커스텀 서버폼은 서버 코드와 리소스팩이 같은 약속을 공유할 때만 안정적으로 동작합니다.

<img class="jsonui-diagram" src="/assets/diagrams/server-contract.svg" alt="서버폼 계약 다이어그램">

이 약속은 아래 네 가지 질문에 답해야 합니다.

1. 어떤 UI 라우트가 열리는가?
2. 어떤 폼 종류를 쓰는가?
3. 각 버튼 인덱스는 무슨 의미인가?
4. 각 커스텀 폼 필드 인덱스는 무슨 의미인가?

## 라우트 계약

안정적인 제목 토큰을 사용하세요. 번역되거나 표시용으로 바뀔 수 있는 제목만 보고 라우팅하면 안 됩니다.

```text
[shop] Main Menu
[admin] Console
[traits] Skill Tree
```

플레이어에게 보이는 제목은 JSON UI에서 다시 그릴 수 있습니다. 토큰은 표시용이 아니라 라우팅용입니다.

## 버튼 인덱스 계약

액션폼은 버튼 인덱스를 반환합니다. 서버 코드나 문서 안에 작은 표로 남겨두세요.

```text
title: [shop] Main Menu
button 0: 워프 메뉴 열기
button 1: 섬 메뉴 열기
button 2: 상점 메뉴 열기
```

JSON UI에서 시각적 순서를 바꾸더라도 서버는 원래 컬렉션 인덱스를 받습니다. 의도적으로 매핑하는 경우가 아니라면 화면 순서와 서버 순서를 다르게 만들지 마세요.

## 커스텀 폼 필드 계약

커스텀 폼은 필드 순서대로 값을 반환합니다.

```text
title: [admin] Execute
field 0: 관리자 코드 텍스트
field 1: 실행 대상 섹터 드롭다운
field 2: 실행 출처 void 드롭다운
```

서버 스크립트의 필드 순서가 바뀌면 UI 문서도 같이 바꿔야 합니다.

## PMMP 주의점

PMMP 폼 라이브러리를 사용할 때는 제목 토큰과 버튼 순서를 응답 처리 코드 근처에 두세요. 리소스팩은 잘못된 인덱스를 기대하는 응답 핸들러를 고칠 수 없습니다.

## Script API 주의점

BP Script의 beta API는 문법이 바뀔 수 있습니다. UI 계약은 API 호출 문법과 분리해서 관리하세요. 폼 빌더 호출이 바뀌어도 제목 토큰, 버튼 순서, 필드 순서 계약은 유지되어야 합니다.

## 추천 이름

기능과 라우트를 설명하는 이름을 쓰세요.

```text
[shop] Main Menu
[shop:category] Blocks
[admin:execute] Console
[traits:combat] Combat Tree
```

팩이 커질 예정이라면 `[menu]` 같은 애매한 토큰은 피하는 편이 좋습니다.
