export interface DocPage {
  title: string;
  path: string;
}

export interface DocSection {
  title: string;
  pages: DocPage[];
}

export const docsNav: DocSection[] = [
  {
    title: "가이드",
    pages: [{ title: "DeToks 문서", path: "/docs/overview" }],
  },
  {
    title: "분석",
    pages: [
      { title: "처리 파이프라인", path: "/docs/token-analytics" },
      { title: "세션과 상태 관리", path: "/docs/discover-session" },
    ],
  },
  {
    title: "시작하기",
    pages: [
      { title: "설치", path: "/docs/installation" },
      { title: "빠른 시작", path: "/docs/quick-start" },
      { title: "지원 LLM", path: "/docs/supported-agents" },
      { title: "설정", path: "/docs/configuration" },
    ],
  },
  {
    title: "리소스",
    pages: [
      { title: "요청 타입", path: "/docs/what-optimizes" },
      { title: "문제 해결", path: "/docs/troubleshooting" },
      { title: "아키텍처", path: "/docs/telemetry" },
    ],
  },
];
