# 시작 화면

시작 화면 패턴은 게임의 초기 UI, 배경 이미지, panorama 스타일 배경, 메뉴 shell을 수정할 때 사용합니다.

## 정적 배경

가장 단순한 방식은 화면 배경 컨텐츠를 이미지로 교체하는 것입니다.

```json
{
  "namespace": "start",
  "start_screen": {
    "$screen_bg_content": "start.background",
    "$screen_content": "start.start_screen_content"
  },
  "background": {
    "type": "image",
    "texture": "textures/ui/my_start_background",
    "size": ["100%", "100%"]
  }
}
```

## 조언

복잡한 배경은 실제 텍스처로 처리하세요. 투명한 JSON 패널을 수십 개 쌓아 큰 배경을 만드는 방식은 유지보수가 어렵습니다.

## 주의

시작 화면은 버전 변화에 민감합니다. 필요한 부분만 작게 patch하고, 불필요하게 많은 컨트롤을 교체하지 마세요.
