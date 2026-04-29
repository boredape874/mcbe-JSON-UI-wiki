# 바인딩

바인딩은 UI 데이터 값을 컨트롤 속성으로 복사하거나 변환합니다.

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

`#title_text` 값을 읽어서 라벨에 사용합니다.

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

이런 방식으로 특정 조건에서만 보이게 만들 수 있습니다.
