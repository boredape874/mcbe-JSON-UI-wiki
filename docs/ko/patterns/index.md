# 패턴 집약

이 섹션은 Minecraft Bedrock JSON UI에서 자주 재사용하는 패턴을 한곳에 모은 문서입니다. 그대로 복사해서 쓰는 완성 팩이 아니라, 자신의 namespace, 텍스처, 서버 계약에 맞게 바꿔 쓰는 구현 구조입니다.

<img class="jsonui-diagram" src="/assets/diagrams/pattern-map.svg" alt="JSON UI 패턴 지도">

권장 읽기 순서:

1. [커스텀 토글](./custom-toggles.md)
2. [애니메이션 이벤트](./animation-events.md)
3. [프로그레스바](./progress-bars.md)
4. [캐러셀](./carousels.md)
5. [텍스트 페이로드](./text-payloads.md)
6. [스코어보드](./scoreboards.md)
7. [컨테이너](./containers.md)
8. [프로토콜 HUD](./protocol-hud.md)
9. [특수 폼 묶음](./special-form-suites.md)

## 핵심 규칙

JSON UI 패턴은 상태 소유자와 시각 소유자를 분리할수록 안정적입니다.

| 패턴 | 상태 소유자 | 시각 소유자 |
| --- | --- | --- |
| 토글 | 실제 toggle 또는 서버 상태 | checked/unchecked 자식 컨트롤 |
| 프로그레스바 | scoreboard, title, form text, 서버 | clip 패널과 fill 이미지 |
| 캐러셀 | cycler, 숨김 토글, 서버 라우트 | 안정적인 카드 wrapper |
| 텍스트 페이로드 | 서버 메시지 규칙 | 바인딩과 라벨 |
| 애니메이션 | 버튼 이벤트 또는 상태 전환 | 안정적인 animated wrapper |

상태와 시각을 섞어두면 한 번은 작동해도 다음 클릭부터 애니메이션이 재생되지 않는 문제가 생기기 쉽습니다.

## 다루는 패턴군

- 서버폼: 라우트, 검색, 버튼, 잠금 상태, 폼 셸
- HUD와 채팅: title/actionbar 프로토콜, 채팅 필터, 스코어보드
- 컨테이너: chest 스타일 grid, pocket container, custom scroll panel
- 모션: 토글, 이벤트 애니메이션, 프로그레스바, 캐러셀
- 시각 완성도: 텍스처 기반 셸, hover frame, tooltip, hotbar layout
- 텍스트 로직: payload, slicing, fixed-width value, protocol marker
