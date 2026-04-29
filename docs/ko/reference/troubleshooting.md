# 문제 해결

## 화면이 안 보임

확인할 것:

1. `_ui_defs.json`에 파일이 등록되어 있는가?
2. namespace가 맞는가?
3. 수정하려는 화면이 맞는가?
4. 마인크래프트가 예전 리소스팩 캐시를 쓰는가?

## 텍스쳐가 안 보임

확인할 것:

1. 파일이 실제로 있는가?
2. JSON UI 경로에 `.png`를 붙이지 않았는가?
3. 리소스팩 루트 기준 경로인가?

```json
"texture": "textures/ui/my_icon"
```

## `Type not specified`

대부분 `"type"`이 없거나 `@namespace.template` 참조가 실패한 경우입니다.

## `Dangling number`

크기 값에서 단위가 필요한 곳에 애매한 숫자가 들어간 경우입니다.

```json
"size": [20, 40]
"size": ["20px", "40px"]
```
