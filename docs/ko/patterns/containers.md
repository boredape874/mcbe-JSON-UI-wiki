# 컨테이너

컨테이너 패턴은 chest 스타일 화면, pocket container, custom inventory grid, storage panel 같은 UI를 만들 때 사용합니다.

<img class="jsonui-diagram" src="/assets/diagrams/container-grid.svg" alt="컨테이너 grid 레이아웃">

## 기본 구조

```text
container shell
  title/header
  item grid
  detail panel
  action buttons
```

item grid는 규칙적이어야 합니다. 특별한 이유가 없다면 하나의 cell size와 하나의 gap 값을 유지하세요.

## Chest 스타일 폼

Chest 스타일 서버폼은 별도의 chest 또는 furnace form 파일을 통해 라우팅되는 경우가 많습니다. 서버 측 트리거가 리소스팩 라우트와 맞아야 합니다. 어떤 토큰이나 폼 타입으로 custom container가 열리는지 문서화하세요.

## Pocket 컨테이너

모바일이나 터치 환경을 고려한 pocket layout은 터치 영역이 커야 합니다. 작은 사이드 버튼을 남발하지 말고 주요 컨트롤을 중앙 근처에 배치하세요.

## 스크롤 컨테이너

긴 목록은 전체 shell이 아니라 collection 영역만 스크롤시키는 편이 안정적입니다.

```text
fixed shell
  fixed header
  scroll body
    item collection
  fixed footer
```

## 흔한 실수

카드를 장식 카드 안에 또 넣고, 그 안에 또 카드를 넣는 구조는 피하세요. 하나의 shell, 하나의 content region, 하나의 repeated item template으로 정리하는 편이 좋습니다.
