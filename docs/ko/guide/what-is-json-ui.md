# JSON UI란?

Minecraft Bedrock JSON UI는 리소스팩 안에서 화면, 패널, 라벨, 이미지, 버튼, 서버폼, HUD 같은 클라이언트 UI를 정의하는 시스템입니다.

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

이 예시는 라벨 하나를 만들고, 텍스트와 크기, 기준 위치를 정합니다.

## 핵심 개념

JSON UI는 컨트롤 트리입니다.

<img class="jsonui-diagram" src="/assets/diagrams/control-tree.svg" alt="JSON UI 컨트롤 트리">

화면 안에 패널이 있고, 패널 안에 버튼이 있고, 버튼 안에 이미지나 라벨이 들어가는 식입니다. 부모 컨트롤의 크기와 위치가 자식 컨트롤의 기준이 됩니다.

## JSON UI로 할 수 있는 것

- HUD 오버레이
- 채팅 패널
- 타이틀과 액션바 표시 변경
- 서버폼 커스터마이징
- 인벤토리 비슷한 화면
- 스코어보드, 상태바, 데이터 표시 UI

서버 개발자에게 가장 중요한 부분은 서버폼입니다. PMMP나 BP Script가 폼을 열면 베드락 클라이언트는 `server_form.json`을 사용해 화면을 그립니다.

## JSON UI만으로 못 하는 것

JSON UI는 스크립트 언어가 아닙니다.

직접 할 수 없는 것:

- 서버 명령 실행
- 플레이어 데이터 저장
- 블록 이벤트 감지
- 게임플레이 로직 생성

게임 로직은 PMMP 플러그인, BP Script, 서버 시스템에서 처리하고 JSON UI는 화면 표시를 맡습니다.
