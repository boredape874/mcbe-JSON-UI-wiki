# 서버폼 디버깅

서버폼이 망가졌다면 비주얼보다 계약을 먼저 디버깅하세요.

## 첫 체크리스트

1. 서버가 실제로 폼을 열고 있는가?
2. 액션폼인가, 커스텀 폼인가?
3. 제목에 기대한 토큰이 들어 있는가?
4. `ui/server_form.json`이 `_ui_defs.json`에 등록되어 있는가?
5. `third_party_server_screen`이 교체되고 있는가?
6. 버튼이 여전히 `button.form_button_click`에 매핑되어 있는가?

## 폼은 열리지만 커스텀 레이아웃이 안 나옴

가능성이 높은 원인:

- 제목 토큰 불일치
- 잘못된 factory id: `long_form` vs `custom_form`
- namespace 오타
- 라우트 패널 조건이 절대 visible이 되지 않음
- `_ui_defs.json` 등록 누락

## 버튼 클릭이 서버에 전달되지 않음

버튼 템플릿을 확인하세요.

```json
{
  "from_button_id": "button.menu_select",
  "to_button_id": "button.form_button_click",
  "mapping_type": "pressed"
}
```

이 매핑이 빠져 있으면 버튼 비주얼은 눌리는 것처럼 보여도 서버가 응답을 받지 못할 수 있습니다.

## 커스텀 폼 값이 잘못 들어옴

대부분 필드 순서 문제입니다.

확인할 것:

- 서버 폼 빌더의 필드 순서
- JSON UI에서 보이는 순서
- 응답 핸들러의 인덱스 순서
- 드롭다운 옵션 순서

## 텍스처가 보이지 않음

리소스팩 경로에는 `.png`를 붙이지 않습니다.

```json
"texture": "textures/ui/shop_menu/card"
```

어떤 화면에서는 보이고 다른 화면에서는 안 보인다면, 해당 텍스처가 들어 있는 리소스팩이 실제로 활성화되어 있고 UI 팩보다 위에 있는지 확인하세요.

## 디버깅 습관

임시로 원본 값을 라벨에 출력하세요.

```json
"text": "#title_text"
```

값이 화면에 보이는 것을 확인한 뒤 라우팅과 조건식을 단계적으로 추가하는 편이 안전합니다.
