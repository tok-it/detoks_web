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
      { title: "토큰 절감 분석", path: "/docs/token-analytics" },
      { title: "Discover와 세션", path: "/docs/discover-session" },
    ],
  },
  {
    title: "시작하기",
    pages: [
      { title: "설치", path: "/docs/installation" },
      { title: "빠른 시작", path: "/docs/quick-start" },
      { title: "지원 에이전트", path: "/docs/supported-agents" },
      { title: "설정", path: "/docs/configuration" },
    ],
  },
  {
    title: "리소스",
    pages: [
      { title: "DeToks가 최적화하는 것", path: "/docs/what-optimizes" },
      { title: "문제 해결", path: "/docs/troubleshooting" },
      { title: "텔레메트리와 개인정보", path: "/docs/telemetry" },
    ],
  },
];
