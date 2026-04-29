# 툴팁

툴팁은 hover 또는 focus된 컨트롤 주변에 나타나는 작은 설명 패널입니다.

## 용도

- 아이템 설명
- 잠금 요구 조건
- 스킬 노드 상세 정보
- 버튼 설명
- 짧은 오류 메시지

## 구조

```text
hovered control
        -> hover/focus state
        -> tooltip panel visible
        -> label이 설명 텍스트를 표시
```

## 텍스트 맞춤

툴팁 label에는 명시적인 `size`를 주세요. 긴 텍스트는 의도적으로 줄바꿈하거나 잘라야 합니다. 툴팁 하나 때문에 전체 레이아웃이 흔들리면 안 됩니다.

## 애니메이션 툴팁

툴팁은 hover event로 fade 또는 slide in 시킬 수 있습니다. tooltip panel은 안정적으로 유지하고, 내부 content만 애니메이션하는 편이 안전합니다.
