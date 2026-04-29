# 서버폼

서버폼은 서버, BP Script, PMMP 플러그인 등이 플레이어에게 여는 UI입니다.

주요 데이터:

- 제목: `#title_text`
- 본문: `#form_text`
- 액션폼 버튼: `form_buttons`
- 모달/커스텀폼 필드: `custom_form`

## 기본 흐름

```text
서버/스크립트가 폼 열기
        ↓
베드락이 제목, 본문, 버튼, 필드를 받음
        ↓
server_form.json이 표시 방식을 결정
        ↓
클릭/제출 결과가 서버나 스크립트로 돌아감
```

## 추천 구조

`server_form.json`은 라우터로 두고 실제 UI는 분리하세요.

```text
ui/forms/my_feature/index.json
ui/forms/my_feature/templates.json
```
