# 프로그레스바

JSON UI 프로그레스바는 보통 frame, clipping panel, fill image로 만듭니다.

<img class="jsonui-diagram" src="/assets/diagrams/progress-clip.svg" alt="프로그레스바 clipping 패턴">

## Clip 기반 바

가장 안정적인 구조:

```text
bar_frame
  clip_panel     <- 이 너비가 진행도를 의미
    fill_image   <- 더 크거나 전체 너비의 텍스처
```

frame은 고정하고, clipping panel의 보이는 너비만 바꿉니다.

## 데이터 소스

프로그레스바는 아래 값으로 구동할 수 있습니다.

- HUD에 노출된 scoreboard 값
- title/actionbar 페이로드
- 서버폼의 `#form_text` 페이로드
- 커스텀 폼 텍스트
- 값 없이 애니메이션만 있는 loading 상태

## 서버폼 진행도

서버폼에서는 서버가 본문 텍스트에 진행도 값을 인코딩할 수 있습니다.

```text
progress:75|Mining Level
```

JSON UI는 값을 파싱해 visible width를 조절하거나 preset segment를 선택합니다. 단순한 메뉴에서는 임의 픽셀 계산보다 segment preset이 더 쉽고 안정적입니다.

## 애니메이션 loading bar

실제 값이 없으면 indeterminate 애니메이션을 사용하세요.

```json
{
  "anim_type": "offset",
  "duration": 1.2,
  "from": [-80, 0],
  "to": [220, 0],
  "play_event": "always",
  "loop": true
}
```

이 방식은 실제 진행도가 아니라 대기 상태 표시에 적합합니다.

## 아이콘 진행도

하트나 배고픔 UI 같은 진행도는 보통 반복 아이콘과 segment별 visible 조건으로 만듭니다.

```text
segment 1 visible when value >= 1
segment 2 visible when value >= 2
segment 3 visible when value >= 3
```

아이콘 텍스처를 억지로 늘리는 것보다 예측하기 쉽습니다.

## 디버깅

바가 보이지 않으면:

1. frame과 fill 텍스처를 따로 확인합니다.
2. clipping을 잠시 끕니다.
3. 원본 값을 debug label에 출력합니다.
4. 부모 패널 크기가 0이 아닌지 확인합니다.
