# JSON UI란?

Minecraft Bedrock JSON UI는 리소스팩에서 화면, 패널, 라벨, 이미지, 버튼, 서버폼, HUD 같은 클라이언트 UI를 정의하는 시스템입니다.

대부분의 UI 구조를 JSON으로 작성하기 때문에 JSON UI라고 부릅니다.

```json
{
  "type": "label",
  "text": "Hello JSON UI",
  "size": [120, 20],
  "anchor_from": "center",
  "anchor_to": "center"
}
```

이 예시는 라벨을 만들고, 텍스트를 넣고, 크기와 위치 기준을 정합니다.

## 핵심 개념

JSON UI는 컨트롤 트리입니다.

<img class="jsonui-diagram" src="/assets/diagrams/control-tree.svg" alt="JSON UI 컨트롤 트리">

화면 안에 컨트롤이 있고, 그 컨트롤 안에 또 다른 컨트롤이 들어갑니다.

- 화면 패널 안에 배경 이미지가 들어감
- 같은 패널 안에 버튼이 들어감
- 버튼 안에 텍스트 라벨이 들어감
- 버튼은 hover/pressed 상태마다 다른 자식 컨트롤을 보여줄 수 있음

## JSON UI로 할 수 있는 것

- HUD 오버레이
- 채팅 패널
- 타이틀/액션바 표시
- 서버폼 디자인
- 인벤토리 비슷한 화면
- 스코어보드, 타이틀, 폼 데이터를 이용한 시각 UI

## JSON UI만으로 못 하는 것

JSON UI는 스크립트 언어가 아닙니다.

직접 할 수 없는 것:

- 서버 명령 실행
- 플레이어 데이터 저장
- 블록 이벤트 감지
- 게임플레이 로직 생성

게임 로직은 서버, BP Script, PMMP 플러그인에서 처리하고 JSON UI는 화면 표시를 맡습니다.
