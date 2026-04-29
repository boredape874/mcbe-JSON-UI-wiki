# 바인딩

바인딩은 UI 데이터 값을 컨트롤 속성으로 복사하거나 조건에 따라 변환하는 기능입니다.

<img class="jsonui-diagram" src="/assets/diagrams/binding-flow.svg" alt="바인딩 흐름">

## 간단한 바인딩

```json
{
  "type": "label",
  "text": "#title_text",
  "bindings": [
    {
      "binding_name": "#title_text"
    }
  ]
}
```

`#title_text` 값을 읽어서 라벨 텍스트로 사용합니다. 서버폼에서는 서버가 보낸 제목이 여기에 들어옵니다.

## 컬렉션 바인딩

서버폼 버튼은 `form_buttons` 컬렉션을 사용합니다.

```json
{
  "binding_name": "#form_button_text",
  "binding_type": "collection",
  "binding_collection_name": "form_buttons"
}
```

버튼 템플릿이 현재 버튼의 텍스트를 읽을 수 있게 합니다.

## view 바인딩

조건 계산도 가능합니다.

```json
{
  "binding_type": "view",
  "source_property_name": "(#form_button_text = 'Locked')",
  "target_property_name": "#visible"
}
```

이런 방식으로 특정 조건에서만 보이는 자물쇠, 검색 결과 필터, 제목 토큰 기반 라우팅을 만들 수 있습니다.

## 주의점

바인딩은 강력하지만 디버깅이 어렵습니다. 처음부터 긴 식을 만들지 말고, 값 하나를 라벨로 출력해 확인한 뒤 조건식을 추가하는 방식이 안전합니다.
