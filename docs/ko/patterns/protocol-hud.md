# 프로토콜 HUD

프로토콜 HUD는 서버가 보낸 텍스트나 scoreboard 값을 가벼운 데이터 채널처럼 사용하고, JSON UI가 그 값을 파싱해 HUD 위젯을 갱신하는 방식입니다.

<img class="jsonui-diagram" src="/assets/diagrams/protocol-hud.svg" alt="프로토콜 HUD 흐름">

## 데이터 소스

자주 쓰는 소스:

- title
- actionbar
- chat message
- scoreboard value

## 페이로드 규칙

페이로드는 예측 가능해야 합니다.

```text
[hud]|hp=18|mana=42|zone=spawn
```

key 이름을 버전마다 바꾸지 마세요.

## 표시 규칙

원본 프로토콜 문자열이 최종 UI가 되어서는 안 됩니다. 원본은 숨기거나 대체하고, 파싱된 패널만 보여주는 편이 좋습니다.

## 안정성

이 패턴은 실용적이지만 데이터베이스가 아닙니다. 표시 상태에 사용하고, 권한, 구매, 잠금 해제, 중요한 액션은 서버에서 처리하세요.

## 디버깅

먼저 원본 페이로드를 라벨로 출력하세요. 값이 보이는 것을 확인한 뒤 slicing, visible 조건, formatting을 추가하는 편이 안전합니다.
