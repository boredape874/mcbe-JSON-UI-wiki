# 텍스트 페이로드

텍스트 페이로드는 서버에서 JSON UI로 작은 상태 값을 보내는 실용적인 방법입니다.

<img class="jsonui-diagram" src="/assets/diagrams/payload-pipeline.svg" alt="텍스트 페이로드 흐름">

## 페이로드 소스

자주 쓰는 소스:

- `#title_text`
- `#form_text`
- `#form_button_text`
- title/actionbar 텍스트
- chat 텍스트
- 특정 화면에 노출된 scoreboard 값

## 토큰 형식

예측 가능한 형식을 사용하세요.

```text
[shop]|coins=120|page=2
```

가능하면 사람이 보는 라벨과 기계가 읽는 토큰을 분리하세요.

## 고정 폭 형식

값을 잘라서 써야 한다면 고정 폭 페이로드가 더 쉽습니다.

```text
HP:075MP:040XP:123
```

사용자 표시 텍스트에 공백이나 기호가 들어가도 delimiter 파싱이 깨질 가능성이 줄어듭니다.

## 서버폼 버튼

버튼 텍스트도 metadata를 담을 수 있습니다.

```text
item|stone|price=32|name=Stone
```

UI는 `Stone`, 가격 라벨, 텍스처를 보여주고, 서버는 여전히 원래 버튼 인덱스를 받습니다.

## 프로토콜 메시지 숨기기

chat이나 actionbar를 프로토콜처럼 사용한다면 원본 프로토콜 메시지는 플레이어에게 보이지 않게 처리하세요. 화면에는 파싱된 UI만 보여주는 편이 좋습니다.

## 안전 규칙

페이로드는 표시용 데이터입니다. 권한, 가격, 잠금 상태, 선택된 액션은 서버가 반드시 다시 검증해야 합니다.
