# 핫바 레이아웃

핫바 레이아웃 작업은 퀵 슬롯과 관련 HUD 컨트롤이 보이는 방식을 바꾸는 작업입니다.

## 자주 쓰는 형태

- compact horizontal hotbar
- vertical side hotbar
- circular 또는 radial hotbar 착시
- custom selected-slot frame
- hotbar 근처 상태 클러스터

## 실전 규칙

핫바 UI는 게임플레이를 막으면 안 됩니다. 이동하거나 전투 중에도 읽히고, 클릭이나 터치가 헷갈리지 않아야 합니다.

## 레이아웃 조언

slot size, gap, selected-state 텍스처를 안정적으로 유지하세요. hover할 때 슬롯 크기가 바뀌어 전체 hotbar가 밀리는 구조는 피하는 편이 좋습니다.

## 리스크

핫바 파일은 핵심 HUD 동작과 겹칩니다. 여러 기기를 대상으로 한다면 터치, 컨트롤러, 키보드/마우스 환경을 모두 테스트하세요.
