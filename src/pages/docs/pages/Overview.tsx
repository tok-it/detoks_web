export function Overview() {
  return (
    <>
      <h1>DeToks 문서</h1>

      <h2 id="what-is-detoks">DeToks — 개발자를 위한 토큰 킬러</h2>
      <p>
        DeToks는 AI 어시스턴트와 개발 도구 사이에 위치하는 CLI 프록시입니다.
        명령어 출력을 LLM에 전달하기 전에 필터링하여 꼭 필요한 정보만 유지하고,
        진행 표시줄, 반복적인 로그, 불필요한 노이즈를 제거합니다.
      </p>
      <p>
        <strong>결과:</strong> 명령어 1회당 60~90% 토큰 절감, 작업 방식은
        그대로 유지됩니다. <code>git status</code>를 평소처럼 실행하면 DeToks의
        훅이 가로채서 필터링하고, LLM은 40줄 대신 3줄의 요약을 받게 됩니다.
      </p>

      <h2 id="how-it-works">어떻게 동작하나요?</h2>
      <p>
        DeToks는 Claude Code의 <code>PreToolUse</code> 훅을 활용합니다. AI가
        명령어를 실행하기 직전에 훅이 개입하여 출력을 투명하게 재작성합니다.
      </p>
      <pre>
        <code>{`AI 어시스턴트가 실행:  git status
              ↓
    훅이 가로채기 (PreToolUse)
              ↓
  detoks git status  (투명한 재작성)
              ↓
    필터링된 출력 → LLM`}</code>
      </pre>
      <p>
        사용자는 아무것도 바꾸지 않아도 됩니다. DeToks가 백그라운드에서 조용히
        동작합니다.
      </p>

      <h2 id="what-optimizes">DeToks가 최적화하는 것</h2>
      <p>
        DeToks는 다음 카테고리의 명령어 출력을 자동으로 필터링합니다:
      </p>
      <ul>
        <li>
          <strong>Git 명령어</strong> — <code>git status</code>,{" "}
          <code>git diff</code>, <code>git log</code>, <code>git blame</code>
        </li>
        <li>
          <strong>패키지 매니저</strong> — npm, pnpm, yarn 진행 표시줄 및 경고
        </li>
        <li>
          <strong>빌드 도구</strong> — TypeScript, Vite, Webpack 출력 노이즈
        </li>
        <li>
          <strong>테스트 러너</strong> — Jest, Vitest 상세 통과 메시지
        </li>
      </ul>

      <h2 id="get-started">시작하기</h2>
      <p>npm을 통해 전역으로 설치하세요:</p>
      <pre>
        <code>{`npm install -g detoks`}</code>
      </pre>
      <p>
        설치 후 DeToks가 Claude Code와 자동으로 통합됩니다. 별도 설정 없이 바로
        사용할 수 있습니다.
      </p>

      <h2 id="measure-savings">절감량 측정</h2>
      <p>다음 명령어로 지금까지 절약된 토큰 수를 확인하세요:</p>
      <pre>
        <code>{`detoks stats`}</code>
      </pre>
      <pre>
        <code>{`총 절감 토큰:   142,847
평균 절감률:    73%
처리된 명령어:  1,284`}</code>
      </pre>

      <h2 id="analyze-usage">사용량 분석</h2>
      <p>더 상세한 분석을 위해 세션별 보고서를 확인할 수 있습니다:</p>
      <pre>
        <code>{`detoks stats --session`}</code>
      </pre>
      <p>
        토큰 절감 분석 페이지에서 더 많은 분석 기능을 알아보세요.
      </p>

      <h2 id="further-reading">추가 자료</h2>
      <ul>
        <li>
          <a href="/docs/installation">설치 가이드</a> — 자세한 설치 방법 및
          요구사항
        </li>
        <li>
          <a href="/docs/quick-start">빠른 시작</a> — 첫 번째 명령어 실행하기
        </li>
        <li>
          <a href="/docs/what-optimizes">DeToks가 최적화하는 것</a> — 지원
          명령어 전체 목록
        </li>
        <li>
          <a href="/docs/configuration">설정</a> — 커스텀 필터 규칙 작성하기
        </li>
      </ul>
    </>
  );
}
