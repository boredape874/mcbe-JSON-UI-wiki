# 문제 해결

## 화면이 안 보임

확인할 것:

1. `_ui_defs.json`에 파일이 등록되어 있는가?
2. `namespace`가 맞는가?
3. 수정하려는 화면이 맞는가?
4. 마인크래프트가 예전 리소스팩 캐시를 쓰고 있지 않은가?

서버폼이라면 서버가 실제로 action form 또는 custom form을 열고 있는지도 확인하세요. JSON UI만 고쳐도 서버가 폼을 열지 않으면 화면은 나오지 않습니다.

## 텍스처가 안 보임

확인할 것:

1. 파일이 실제로 있는가?
2. JSON UI 경로에 `.png`를 붙이지 않았는가?
3. 리소스팩 루트 기준 경로인가?

```json
"texture": "textures/ui/my_icon"
```

## `Type not specified`

대부분 `"type"`이 없거나 `@namespace.template` 참조가 실패한 경우입니다.

확인할 것:

- 템플릿 이름 오타
- namespace 오타
- `_ui_defs.json` 등록 누락
- 파일 분리 후 경로 수정 누락

## `Dangling number`

크기 값에 단위가 필요한 위치에 순수 숫자가 들어간 경우입니다.

```json
"size": [20, 40]
"size": ["20px", "40px"]
```

로그에 나온 control path를 따라가서 해당 `size` 값을 먼저 확인하세요.

## 버튼을 눌러도 서버가 반응하지 않음

액션폼 버튼은 `button.form_button_click`으로 연결되어야 합니다. 커스텀 버튼을 만들 때 이 매핑을 빼면 비주얼은 눌리지만 서버에는 클릭 결과가 가지 않습니다.
