# 문제 해결

## 화면이 나타나지 않음

확인할 것:

1. 파일이 `_ui_defs.json`에 등록되어 있는가?
2. `namespace`가 올바른가?
3. 실제로 수정하려는 화면을 고치고 있는가?
4. 마인크래프트가 예전 리소스팩 버전을 캐시하고 있지 않은가?

## 텍스처가 보이지 않음

확인할 것:

1. 파일이 실제로 존재하는가?
2. JSON UI 경로에 `.png` 확장자를 붙이지 않았는가?
3. 경로가 리소스팩 루트를 기준으로 작성되어 있는가?

예시:

```json
"texture": "textures/ui/my_icon"
```

## `Type not specified`

대부분 컨트롤에 `"type"`이 없거나 `@namespace.template` 참조가 실패한 경우입니다.

깨진 참조 예시:

```json
"button@my_pack.unknown_template": {}
```

namespace를 고치거나, 파일을 등록하거나, 템플릿을 정의해야 합니다.

## `Dangling number`

베드락이 `"20px"`나 `"50%"` 같은 크기 문자열을 기대하는 위치에서 지원하지 않는 순수 숫자를 받은 경우입니다.

숫자 배열과 단위 문자열을 일관되게 사용하세요.

```json
"size": [20, 40]
"size": ["20px", "40px"]
```
