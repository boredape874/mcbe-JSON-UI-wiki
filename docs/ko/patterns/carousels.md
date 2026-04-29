# 캐러셀

JSON UI는 JavaScript나 실제 삼각함수를 실행하지 않습니다. 원형 캐러셀은 여러 개의 이산 상태를 조합해 만든 착시입니다.

<img class="jsonui-diagram" src="/assets/diagrams/carousel-orbit.svg" alt="2D 원형 캐러셀 착시">

## 궤도 착시

카드가 원형 궤도를 도는 느낌을 주려면 상태마다 아래 속성을 바꿉니다.

- `offset`: 왼쪽, 중앙, 오른쪽 위치
- `size`: 중앙 카드는 크게, 양쪽 카드는 작게
- `alpha`: 뒤쪽 카드는 더 흐리게
- `layer`: 앞쪽 카드는 더 높은 layer

이 방식은 실제로 `cos(theta)`, `sin(theta)`를 계산하지 않고도 비슷한 시각 결과를 만듭니다.

## 상태 시스템 선택

아래 방식 중 하나를 사용합니다.

- 단순 순환: `common_cycler`, `image_cycler`, `text_cycler`
- 페이지별 장면: 숨김 radio toggle
- 서버가 제공하는 title/body 페이로드
- 서버폼에서 선택 항목별 route 분리

## 안정적인 버튼 이벤트

next/previous 버튼 이벤트를 사용합니다.

```text
button.carousel_next
button.carousel_prev
```

각 카드 wrapper는 같은 이벤트를 듣지만 서로 다른 offset/size 애니메이션을 재생합니다.

## 3장 카드 패턴

```text
left_card    작음, 뒤쪽 layer
center_card  큼, 앞쪽 layer
right_card   작음, 뒤쪽 layer
```

next를 누르면:

- center가 왼쪽 뒤로 이동하는 것처럼 보임
- right가 중앙 앞으로 이동하는 것처럼 보임
- left가 뒤쪽에서 반대편으로 감기는 것처럼 보임

많은 베드락 화면에서는 stable card wrapper를 애니메이션하고, 내용만 cycler로 바꾸는 방식이 더 안정적입니다.

## 흔한 실수

클릭할 때마다 모든 카드를 파괴하고 다시 만들지 마세요. 꼭 필요한 경우가 아니라면 stable wrapper가 전체 재생성보다 애니메이션 재생이 안정적입니다.
