import { defineConfig } from "vitepress";

const sharedNav = {
  en: [
    { text: "Start", link: "/en/guide/what-is-json-ui" },
    { text: "Server Forms", link: "/en/server-forms/" },
    { text: "Reference", link: "/en/reference/file-roles" },
    { text: "Patterns", link: "/en/patterns/" }
  ],
  ko: [
    { text: "시작하기", link: "/ko/guide/what-is-json-ui" },
    { text: "서버폼", link: "/ko/server-forms/" },
    { text: "레퍼런스", link: "/ko/reference/file-roles" },
    { text: "패턴", link: "/ko/patterns/" }
  ],
  es: [
    { text: "Inicio", link: "/es/guide/what-is-json-ui" },
    { text: "Formularios", link: "/es/server-forms/" },
    { text: "Referencia", link: "/es/reference/file-roles" },
    { text: "Patrones", link: "/es/patterns/" }
  ]
};

const sidebars = {
  en: [
    {
      text: "Beginner Guide",
      items: [
        { text: "What Is JSON UI?", link: "/en/guide/what-is-json-ui" },
        { text: "Resource Pack Flow", link: "/en/guide/resource-pack-flow" },
        { text: "First UI File", link: "/en/guide/first-ui-file" },
        { text: "Layout Basics", link: "/en/guide/layout-basics" },
        { text: "Bindings", link: "/en/guide/bindings" }
      ]
    },
    {
      text: "Server Forms",
      items: [
        { text: "Overview", link: "/en/server-forms/" },
        { text: "Routing", link: "/en/server-forms/routing" },
        { text: "Server Contract", link: "/en/server-forms/server-contract" },
        { text: "Action Buttons", link: "/en/server-forms/action-buttons" },
        { text: "Custom Forms", link: "/en/server-forms/custom-forms" },
        { text: "Search Bars", link: "/en/server-forms/search-bars" },
        { text: "Locked States", link: "/en/server-forms/locked-states" },
        { text: "Debugging", link: "/en/server-forms/debugging" }
      ]
    },
    {
      text: "Reference",
      items: [
        { text: "File Roles", link: "/en/reference/file-roles" },
        { text: "Troubleshooting", link: "/en/reference/troubleshooting" }
      ]
    },
    {
      text: "Patterns",
      items: [
        { text: "Pattern Compendium", link: "/en/patterns/" },
        { text: "Server Form Patterns", link: "/en/patterns/server-forms" },
        { text: "HUD And Chat", link: "/en/patterns/hud-chat" },
        { text: "Custom Toggles", link: "/en/patterns/custom-toggles" },
        { text: "Animation Events", link: "/en/patterns/animation-events" },
        { text: "Progress Bars", link: "/en/patterns/progress-bars" },
        { text: "Carousels", link: "/en/patterns/carousels" },
        { text: "Text Payloads", link: "/en/patterns/text-payloads" },
        { text: "Scoreboards", link: "/en/patterns/scoreboards" },
        { text: "Containers", link: "/en/patterns/containers" },
        { text: "Protocol HUD", link: "/en/patterns/protocol-hud" },
        { text: "Chat Panels", link: "/en/patterns/chat-panels" },
        { text: "Start Screens", link: "/en/patterns/start-screens" },
        { text: "Hotbar Layouts", link: "/en/patterns/hotbar-layouts" },
        { text: "Tooltips", link: "/en/patterns/tooltips" },
        { text: "Special Form Suites", link: "/en/patterns/special-form-suites" },
        { text: "Small Controls", link: "/en/patterns/small-controls" },
        { text: "Visual Shells", link: "/en/patterns/visual-shells" }
      ]
    }
  ],
  ko: [
    {
      text: "입문 가이드",
      items: [
        { text: "JSON UI란?", link: "/ko/guide/what-is-json-ui" },
        { text: "리소스팩 흐름", link: "/ko/guide/resource-pack-flow" },
        { text: "첫 UI 파일", link: "/ko/guide/first-ui-file" },
        { text: "레이아웃 기초", link: "/ko/guide/layout-basics" },
        { text: "바인딩", link: "/ko/guide/bindings" }
      ]
    },
    {
      text: "서버폼",
      items: [
        { text: "개요", link: "/ko/server-forms/" },
        { text: "라우팅", link: "/ko/server-forms/routing" },
        { text: "서버 계약", link: "/ko/server-forms/server-contract" },
        { text: "액션 버튼", link: "/ko/server-forms/action-buttons" },
        { text: "커스텀 폼", link: "/ko/server-forms/custom-forms" },
        { text: "검색 바", link: "/ko/server-forms/search-bars" },
        { text: "잠금 상태", link: "/ko/server-forms/locked-states" },
        { text: "디버깅", link: "/ko/server-forms/debugging" }
      ]
    },
    {
      text: "레퍼런스",
      items: [
        { text: "파일 역할", link: "/ko/reference/file-roles" },
        { text: "문제 해결", link: "/ko/reference/troubleshooting" }
      ]
    },
    {
      text: "패턴",
      items: [
        { text: "패턴 집약", link: "/ko/patterns/" },
        { text: "서버폼 패턴", link: "/ko/patterns/server-forms" },
        { text: "HUD와 채팅", link: "/ko/patterns/hud-chat" },
        { text: "커스텀 토글", link: "/ko/patterns/custom-toggles" },
        { text: "애니메이션 이벤트", link: "/ko/patterns/animation-events" },
        { text: "프로그레스바", link: "/ko/patterns/progress-bars" },
        { text: "캐러셀", link: "/ko/patterns/carousels" },
        { text: "텍스트 페이로드", link: "/ko/patterns/text-payloads" },
        { text: "스코어보드", link: "/ko/patterns/scoreboards" },
        { text: "컨테이너", link: "/ko/patterns/containers" },
        { text: "프로토콜 HUD", link: "/ko/patterns/protocol-hud" },
        { text: "채팅 패널", link: "/ko/patterns/chat-panels" },
        { text: "시작 화면", link: "/ko/patterns/start-screens" },
        { text: "핫바 레이아웃", link: "/ko/patterns/hotbar-layouts" },
        { text: "툴팁", link: "/ko/patterns/tooltips" },
        { text: "특수 폼 묶음", link: "/ko/patterns/special-form-suites" },
        { text: "소형 컨트롤", link: "/ko/patterns/small-controls" },
        { text: "시각 셸", link: "/ko/patterns/visual-shells" }
      ]
    }
  ],
  es: [
    {
      text: "Guía inicial",
      items: [
        { text: "¿Qué es JSON UI?", link: "/es/guide/what-is-json-ui" },
        { text: "Flujo del resource pack", link: "/es/guide/resource-pack-flow" },
        { text: "Primer archivo UI", link: "/es/guide/first-ui-file" },
        { text: "Bases de layout", link: "/es/guide/layout-basics" },
        { text: "Bindings", link: "/es/guide/bindings" }
      ]
    },
    {
      text: "Formularios del servidor",
      items: [
        { text: "Resumen", link: "/es/server-forms/" },
        { text: "Enrutamiento", link: "/es/server-forms/routing" },
        { text: "Contrato del servidor", link: "/es/server-forms/server-contract" },
        { text: "Botones de acción", link: "/es/server-forms/action-buttons" },
        { text: "Custom forms", link: "/es/server-forms/custom-forms" },
        { text: "Barras de búsqueda", link: "/es/server-forms/search-bars" },
        { text: "Estados bloqueados", link: "/es/server-forms/locked-states" },
        { text: "Depuración", link: "/es/server-forms/debugging" }
      ]
    },
    {
      text: "Referencia",
      items: [
        { text: "Rol de cada archivo", link: "/es/reference/file-roles" },
        { text: "Solución de problemas", link: "/es/reference/troubleshooting" }
      ]
    },
    {
      text: "Patrones",
      items: [
        { text: "Compendio de patrones", link: "/es/patterns/" },
        { text: "Patrones de server form", link: "/es/patterns/server-forms" },
        { text: "HUD y chat", link: "/es/patterns/hud-chat" },
        { text: "Toggles personalizados", link: "/es/patterns/custom-toggles" },
        { text: "Eventos de animación", link: "/es/patterns/animation-events" },
        { text: "Barras de progreso", link: "/es/patterns/progress-bars" },
        { text: "Carruseles", link: "/es/patterns/carousels" },
        { text: "Payloads de texto", link: "/es/patterns/text-payloads" },
        { text: "Scoreboards", link: "/es/patterns/scoreboards" },
        { text: "Contenedores", link: "/es/patterns/containers" },
        { text: "HUD por protocolo", link: "/es/patterns/protocol-hud" },
        { text: "Paneles de chat", link: "/es/patterns/chat-panels" },
        { text: "Pantallas de inicio", link: "/es/patterns/start-screens" },
        { text: "Layouts de hotbar", link: "/es/patterns/hotbar-layouts" },
        { text: "Tooltips", link: "/es/patterns/tooltips" },
        { text: "Suites de forms especiales", link: "/es/patterns/special-form-suites" },
        { text: "Controles pequeños", link: "/es/patterns/small-controls" },
        { text: "Shells visuales", link: "/es/patterns/visual-shells" }
      ]
    }
  ]
};

export default defineConfig({
  title: "MCBE JSON UI Wiki",
  description: "A beginner-first Minecraft Bedrock JSON UI wiki.",
  base: "/mcbe-JSON-UI-wiki/",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/assets/logo.svg",
    search: {
      provider: "local"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/boredape874/mcbe-JSON-UI-wiki" }
    ]
  },
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      themeConfig: {
        nav: sharedNav.en,
        sidebar: sidebars.en
      }
    },
    ko: {
      label: "한국어",
      lang: "ko-KR",
      link: "/ko/",
      title: "MCBE JSON UI 위키",
      description: "마인크래프트 베드락 JSON UI를 기초부터 배우는 위키",
      themeConfig: {
        nav: sharedNav.ko,
        sidebar: sidebars.ko,
        outline: { label: "이 페이지" },
        docFooter: { prev: "이전", next: "다음" }
      }
    },
    es: {
      label: "Español",
      lang: "es-ES",
      link: "/es/",
      title: "Wiki de MCBE JSON UI",
      description: "Una wiki para aprender Minecraft Bedrock JSON UI desde cero",
      themeConfig: {
        nav: sharedNav.es,
        sidebar: sidebars.es,
        outline: { label: "En esta página" },
        docFooter: { prev: "Anterior", next: "Siguiente" }
      }
    }
  }
});
