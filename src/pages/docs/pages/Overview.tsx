export function Overview() {
  return (
    <>
      <h1>DeToks 문서</h1>

      <h2 id="what-is-detoks">DeToks — LLM CLI 인터랙티브 래퍼</h2>
      <p>
        DeToks는 LLM 커맨드라인 인터페이스(Claude, Gemini, Codex) 앞에 위치하는
        인터랙티브 래퍼 CLI입니다. 입력을 정규화하고, 컨텍스트를 지능적으로
        관리하며, 실행 상태를 추적하고, 결과를 세션에 저장하여 재사용할 수
        있도록 합니다.
      </p>
      <p>
        <strong>핵심 목표:</strong> 코드 품질을 유지하면서 토큰 소비를 줄이고,
        LLM과의 워크플로를 안정적이고 재현 가능하게 만드는 것입니다.
      </p>

      <h2 id="how-it-works">어떻게 동작하나요?</h2>
      <p>
        DeToks는 모든 요청을 결정론적인 <strong>8단계 파이프라인</strong>으로
        처리합니다:
      </p>
      <pre>
        <code>{`UserRequest
    ↓ Prompt Compiler       — 입력 정규화, 한국어→영어 번역, 압축
    ↓ Translation Guardrails — 보호된 용어 번역 검증
    ↓ Request Analyzer      — 요청을 8가지 타입으로 분류
    ↓ Task Graph Builder    — 다단계 작업을 의존성 그래프로 분해
    ↓ Context Optimizer     — 중복 제거, 관련 파일만 선택
    ↓ Executor              — LLM 어댑터를 통한 추론 실행
    ↓ Output Processor      — 결과 요약 및 정규화
    ↓ State Manager         — 세션 상태 저장, 다음 턴에 재사용
SessionState`}</code>
      </pre>

      <h2 id="supported-llms">지원 LLM</h2>
      <p>현재 세 가지 LLM 어댑터를 지원합니다:</p>
      <ul>
        <li>
          <strong>Claude</strong>
        </li>
        <li>
          <strong>Gemini</strong>
        </li>
        <li>
          <strong>Codex</strong>
        </li>
      </ul>

      <h2 id="get-started">시작하기</h2>
      <p>npm을 통해 전역으로 설치하세요:</p>
      <pre>
        <code>{`npm install -g @sorlros/detoks`}</code>
      </pre>
      <p>설치 없이 바로 실행할 수도 있습니다:</p>
      <pre>
        <code>{`npx @sorlros/detoks --help`}</code>
      </pre>

      <h2 id="basic-usage">기본 사용법</h2>
      <p>REPL 모드로 인터랙티브 세션을 시작하세요:</p>
      <pre>
        <code>{`detoks repl --adapter claude --execution-mode real`}</code>
      </pre>
      <p>단일 요청을 바로 실행할 수도 있습니다:</p>
      <pre>
        <code>{`detoks "현재 레포지토리 상태를 요약해줘"`}</code>
      </pre>

      <h2 id="further-reading">추가 자료</h2>
      <ul>
        <li>
          <a href="/docs/installation">설치 가이드</a> — 요구사항 및 설치 방법
        </li>
        <li>
          <a href="/docs/quick-start">빠른 시작</a> — 어댑터 옵션과 첫 실행
        </li>
        <li>
          <a href="/docs/token-analytics">처리 파이프라인</a> — 8단계 파이프라인
          상세
        </li>
        <li>
          <a href="/docs/configuration">설정</a> — .env 환경 변수 전체 목록
        </li>
      </ul>
    </>
  );
}
