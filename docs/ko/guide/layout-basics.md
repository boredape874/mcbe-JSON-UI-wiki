# 레이아웃 기초

Bedrock JSON UI 레이아웃은 주로 다음 속성으로 결정됩니다.

- `size`
- `anchor_from`
- `anchor_to`
- `offset`
- 부모/자식 컨트롤 구조

## size

```json
"size": [120, 40]
```

너비 120, 높이 40입니다.

```json
"size": ["100%", "100%"]
```

부모 크기를 기준으로 100%를 사용합니다.

## anchor

```json
"anchor_from": "center",
"anchor_to": "center"
```

이 컨트롤의 어느 지점을 부모의 어느 지점에 붙일지 정합니다.

## offset

```json
"offset": [0, -20]
```

앵커를 기준으로 위치를 이동합니다. `x` 양수는 오른쪽, `y` 양수는 아래입니다.

## 실전 규칙

처음에는 중요한 패널에 고정 크기를 주세요.

```json
{
  "type": "panel",
  "size": [300, 180],
  "anchor_from": "center",
  "anchor_to": "center"
}
```

작동을 확인한 뒤 반응형으로 다듬는 편이 안전합니다.
