# 바인딩

바인딩은 UI 데이터 값을 컨트롤 속성으로 복사하거나, 간단한 식으로 변환해서 쓰는 기능입니다.

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

이 예시는 `#title_text`를 읽어서 해당 컨트롤에서 사용합니다.

## 컬렉션 바인딩

서버폼 버튼은 `form_buttons` 컬렉션을 사용합니다.

```json
{
  "binding_name": "#form_button_text",
  "binding_type": "collection",
  "binding_collection_name": "form_buttons"
}
```

이 바인딩을 사용하면 버튼 템플릿이 현재 렌더링 중인 서버폼 버튼의 텍스트를 읽을 수 있습니다.

## View 바인딩

view 바인딩은 값을 계산해서 다른 속성에 넣을 수 있습니다.

```json
{
  "binding_type": "view",
  "source_property_name": "(#form_button_text = 'Locked')",
  "target_property_name": "#visible"
}
```

이런 방식은 자물쇠 표시, 검색 필터, 제목 토큰 기반 라우팅처럼 동적인 JSON UI 패턴의 기반이 됩니다.

## 중요한 주의점

바인딩은 강력하지만 JavaScript가 아닙니다. 식은 짧고 단순하게 유지하고, 반드시 게임 안에서 테스트하세요.
