# MCBE JSON UI 위키

이 위키는 마인크래프트 베드락 에디션의 JSON UI를 처음 배우는 사람도 따라올 수 있도록 만든 문서입니다.

처음이라면 아래 순서로 읽는 것이 좋습니다.

1. [JSON UI란?](./guide/what-is-json-ui.md)
2. [리소스팩 흐름](./guide/resource-pack-flow.md)
3. [첫 UI 파일](./guide/first-ui-file.md)
4. [서버폼 개요](./server-forms/index.md)

JSON UI는 웹 UI가 아닙니다. 리소스팩 안의 JSON 파일을 베드락 클라이언트가 읽고, 그 파일에 적힌 컨트롤 트리로 화면을 조립하는 방식입니다.

서버 개발자라면 가장 먼저 `server_form.json`을 이해하는 것이 좋습니다. PMMP 플러그인이나 BP Script가 여는 폼은 결국 베드락 클라이언트의 `server_form` 화면으로 들어오고, 여기서 제목, 본문, 버튼 컬렉션, 입력 필드가 JSON UI에 연결됩니다.

<img class="jsonui-diagram" src="/assets/diagrams/load-flow.svg" alt="JSON UI 로딩 흐름">
