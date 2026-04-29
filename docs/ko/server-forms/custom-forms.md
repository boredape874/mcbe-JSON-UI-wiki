# 커스텀 폼

커스텀 폼은 텍스트 입력, 토글, 슬라이더, 드롭다운, 스텝 슬라이더, 라벨 같은 필드를 포함합니다.

JSON UI에서 커스텀 폼은 `custom_form` factory control id를 통해 라우팅됩니다. 그래서 커스텀 폼 디자인은 일반 액션폼과 다른 레이아웃을 쓰는 경우가 많습니다.

## 언제 커스텀 폼을 쓰는가

플레이어가 값을 제출해야 할 때 커스텀 폼을 사용합니다.

- 관리자 코드 입력
- 설정 토글
- 숫자 수량 선택
- 지역 또는 섹터 드롭다운
- 여러 필드가 있는 확인 화면

플레이어가 버튼 하나만 고르면 되는 경우에는 액션폼을 쓰는 편이 더 단순합니다.

## 텍스트 입력

텍스트 박스는 보통 `common.text_edit_box`를 기반으로 만듭니다. 입력 영역을 충분히 크게 잡고 placeholder를 명확하게 작성하세요. 제출된 문자열은 서버 측에서 반드시 다시 검증해야 합니다.

```json
{
  "admin_code_input@common.text_edit_box": {
    "size": [240, 28],
    "$text_box_name": "admin_code",
    "$place_holder_text": "Enter the admin code",
    "$text_alignment": "center"
  }
}
```

## UI 약속

서버는 커스텀 폼 결과를 필드 순서대로 받습니다. 서버 스크립트에서 필드 순서를 바꾸면 UI의 의미도 같이 바뀝니다. 순서를 문서화하세요.

```text
field 0: 관리자 코드 텍스트
field 1: 실행 대상 섹터 드롭다운
field 2: 실행 출처 void 드롭다운
```

PMMP 플러그인과 beta Script API 폼에서는 서버 코드와 UI 문서가 같은 결과 순서를 유지해야 합니다.
