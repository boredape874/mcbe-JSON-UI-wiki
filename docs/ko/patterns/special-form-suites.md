# 특수 폼 묶음

특수 폼 묶음은 하나의 router와 하나의 시각 언어를 공유하는 여러 서버폼 화면입니다.

예시:

- phone 또는 PDA 스타일 UI
- compact crafting menu
- shop 및 auction form
- crate preview와 reward form
- battle command panel
- database 및 storage UI

## 추천 구조

```text
ui/
  server_form.json
  forms/
    device/
      index.json
      home.json
      contacts.json
      storage.json
    market/
      shop.json
      auction.json
      preview.json
```

## 라우터 규칙

명확한 route token을 사용하세요.

```text
[device:home]
[market:shop]
[battle:attack]
```

하나의 애매한 제목 토큰으로 전체 suite를 처리하지 마세요.

## 공유 템플릿

아래 요소는 공유 템플릿으로 빼는 편이 좋습니다.

- shell frame
- header
- close/back button
- list row
- icon button
- loading placeholder

이렇게 하면 큰 UI 묶음도 일관된 스타일을 유지할 수 있습니다.
