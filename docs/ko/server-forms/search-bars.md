# 검색 바

서버폼 검색 바는 `form_buttons` 컬렉션에서 보이는 버튼을 필터링하는 UI입니다.

일반적으로 필요한 요소는 아래와 같습니다.

- 플레이어 입력용 `common.text_edit_box`
- 현재 검색어를 저장하는 view 바인딩
- 각 버튼 템플릿의 visible 조건
- 검색어가 비어 있을 때의 기본 상태

## 기본 개념

```text
text_edit_box 값
        -> #search
        -> 각 버튼이 #form_button_text와 #search를 비교
        -> 맞지 않는 버튼은 보이지 않음
```

## 대소문자 구분

문자열 비교는 기본적으로 대소문자를 구분합니다. 즉 `stone`과 `Stone`은 다릅니다.

간단한 메뉴에서는 괜찮지만, 실제 서비스 메뉴에서는 아래 방식 중 하나를 권장합니다.

- 서버가 버튼 라벨을 소문자로 보냄
- 서버가 별도의 소문자 검색 키를 페이로드에 포함함
- 제한된 helper로 입력값을 정규화함

## 서버 측 검색 키

가장 깔끔한 패턴은 서버가 예측 가능한 검색 키를 보내는 것입니다.

```text
visible label: Stone Bricks
search key: stone bricks
button index: 12
```

JSON UI는 검색 키로 필터링하고, 화면에는 보기 좋은 라벨을 보여줄 수 있습니다.

## 레이아웃 조언

검색 바는 스크롤되는 버튼 영역 밖에 두세요. 검색 입력칸이 결과 컬렉션과 같은 패널 안에 있으면 focus와 clipping 문제를 디버깅하기 어려워집니다.

권장 구조:

```text
form shell
  header
    search input
  body
    filtered button grid
```

## 서버 권한

검색은 플레이어에게 보이는 항목만 바꿉니다. 서버 검증을 바꾸면 안 됩니다. 플레이어가 버튼 인덱스 `12`를 클릭했다면 서버는 여전히 버튼 `12`가 무엇인지 검증해야 합니다.
