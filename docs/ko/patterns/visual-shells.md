# 폼 외형

폼 외형은 폼, HUD 패널, 메뉴를 감싸는 재사용 가능한 프레임입니다. 쉽게 말하면 기능마다 새로 배경과 테두리를 만들지 않고, 같은 틀 안에 내용만 갈아 끼우는 방식입니다.

<img class="jsonui-diagram" src="/assets/diagrams/visual-shell.svg" alt="시각 셸 레이어">

## 레이어 구조

```text
background
  outer frame
    header
    content region
    footer buttons
    overlays
```

## 텍스처와 JSON의 역할

텍스처로 처리하기 좋은 것:

- 복잡한 배경
- 그라데이션
- 픽셀 테두리
- 그림자
- 장식 모서리

JSON 컨트롤로 처리하기 좋은 것:

- 배치
- 바인딩
- visible 조건
- focus와 hover 상태
- 반복 row와 버튼

## 공유 외형 템플릿

큰 팩에서는 화면 계열마다 하나의 shell template을 두는 편이 좋습니다.

```text
common/visuals/panel_shell.json
common/visuals/shop_card.json
common/visuals/dialog_shell.json
```

각 기능은 frame을 다시 만들지 말고 content region만 채우면 됩니다.
