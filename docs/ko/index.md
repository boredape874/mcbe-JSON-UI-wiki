# MCBE JSON UI 위키

이 위키는 마인크래프트 베드락 에디션의 JSON UI를 기초부터 설명합니다.

처음이라면 아래 순서로 읽는 것을 권장합니다.

1. [JSON UI란?](./guide/what-is-json-ui.md)
2. [리소스팩 흐름](./guide/resource-pack-flow.md)
3. [첫 UI 파일](./guide/first-ui-file.md)
4. [서버폼 개요](./server-forms/index.md)
5. [바로 쓰는 예제 코드](./examples/index.md)

JSON UI는 웹 UI가 아닙니다. 리소스팩 안의 JSON 파일을 베드락 클라이언트가 읽고, 그 파일에 적힌 컨트롤 트리로 화면을 조립하는 방식입니다.

서버 개발자라면 `server_form.json`부터 이해하는 편이 가장 빠릅니다. PMMP 플러그인이나 BP Script가 여는 폼은 결국 베드락 클라이언트의 `server_form` 화면으로 들어오며, 여기에서 제목, 본문, 버튼 컬렉션, 커스텀 폼 필드가 JSON UI 레이아웃에 연결됩니다.

<img class="jsonui-diagram" src="/assets/diagrams/load-flow.svg" alt="JSON UI 로딩 흐름">

개념 설명만으로 감이 안 오면 [바로 쓰는 예제 코드](./examples/index.md)를 먼저 열어도 됩니다. 실제 `RP/ui/server_form.json`, `BP/scripts/main.js`, 커스텀 토글, 프로그레스바, 검색 필터 스니펫을 같이 넣어 두었습니다.
