# 레이아웃 기초

Bedrock JSON UI 레이아웃은 주로 아래 속성으로 결정됩니다.

- `size`
- `anchor_from`
- `anchor_to`
- `offset`
- 부모와 자식 컨트롤 구조

## size

```json
"size": [120, 40]
```

너비 120, 높이 40입니다.

```json
"size": ["100%", "100%"]
```

부모 크기를 기준으로 100%를 사용합니다.

일부 위치에서는 순수 숫자 대신 `"20px"` 같은 단위가 필요할 수 있습니다. 로그에 `Dangling number`가 나오면 크기 값의 단위를 먼저 확인하세요.

## anchor

```json
"anchor_from": "center",
"anchor_to": "center"
```

내 컨트롤의 어느 지점을 부모의 어느 지점에 붙일지 정합니다.

## offset

```json
"offset": [0, -20]
```

앵커를 기준으로 위치를 이동합니다. `x` 양수는 오른쪽, `y` 양수는 아래쪽입니다.

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

작동을 확인한 뒤 반응형으로 바꾸는 편이 안전합니다. 서버폼 카드, 버튼, 입력칸은 크기를 명확히 잡아야 텍스트 잘림과 클릭 영역 문제를 줄일 수 있습니다.
