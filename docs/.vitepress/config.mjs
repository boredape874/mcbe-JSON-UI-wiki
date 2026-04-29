import { defineConfig } from "vitepress";

const sharedNav = {
  en: [
    { text: "Start", link: "/en/guide/what-is-json-ui" },
    { text: "Server Forms", link: "/en/server-forms/" },
    { text: "Reference", link: "/en/reference/file-roles" },
    { text: "Patterns", link: "/en/patterns/server-forms" }
  ],
  ko: [
    { text: "시작하기", link: "/ko/guide/what-is-json-ui" },
    { text: "서버폼", link: "/ko/server-forms/" },
    { text: "레퍼런스", link: "/ko/reference/file-roles" },
    { text: "패턴", link: "/ko/patterns/server-forms" }
  ],
  es: [
    { text: "Inicio", link: "/es/guide/what-is-json-ui" },
    { text: "Formularios", link: "/es/server-forms/" },
    { text: "Referencia", link: "/es/reference/file-roles" },
    { text: "Patrones", link: "/es/patterns/server-forms" }
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
        { text: "Action Buttons", link: "/en/server-forms/action-buttons" },
        { text: "Custom Forms", link: "/en/server-forms/custom-forms" }
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
        { text: "Server Form Patterns", link: "/en/patterns/server-forms" },
        { text: "HUD And Chat", link: "/en/patterns/hud-chat" }
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
        { text: "액션 버튼", link: "/ko/server-forms/action-buttons" },
        { text: "커스텀 폼", link: "/ko/server-forms/custom-forms" }
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
        { text: "서버폼 패턴", link: "/ko/patterns/server-forms" },
        { text: "HUD와 채팅", link: "/ko/patterns/hud-chat" }
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
        { text: "Botones de acción", link: "/es/server-forms/action-buttons" },
        { text: "Custom forms", link: "/es/server-forms/custom-forms" }
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
        { text: "Patrones de server form", link: "/es/patterns/server-forms" },
        { text: "HUD y chat", link: "/es/patterns/hud-chat" }
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
