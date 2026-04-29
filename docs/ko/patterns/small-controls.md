# 소형 컨트롤

소형 컨트롤에는 slider, step slider, 작은 버튼, checkbox 스타일 toggle, icon button, compact field가 포함됩니다.

## Button

하나의 명령을 실행하는 컨트롤에는 button을 사용합니다.

```text
press -> event -> action
```

## Toggle

지속적인 on/off 상태를 컨트롤이 직접 가져야 한다면 toggle을 사용합니다.

```text
checked / unchecked -> 다른 시각 상태
```

## Slider

플레이어가 숫자나 선택지를 고르는 경우 slider 또는 step slider를 사용합니다. custom form 안에 있다면 서버 응답 순서를 반드시 문서화하세요.

## Icon Button

close, back, next, previous, refresh, search clear 같은 작은 명령은 icon button이 잘 맞습니다.

## 크기

작은 컨트롤도 터치 가능한 크기가 필요합니다. 모바일에서도 눌러야 하는 컨트롤이라면 시각적으로 너무 작게 만들지 마세요.
