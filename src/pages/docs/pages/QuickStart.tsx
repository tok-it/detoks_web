export function QuickStart() {
  return (
    <>
      <h1>빠른 시작</h1>

      <h2 id="help">도움말 확인</h2>
      <p>사용 가능한 명령어와 옵션 목록을 확인하세요:</p>
      <pre>
        <code>{`detoks --help`}</code>
      </pre>

      <h2 id="repl-mode">REPL 모드</h2>
      <p>
        REPL 모드는 세션 컨텍스트를 유지하며 여러 요청을 연속으로 처리할 수
        있는 인터랙티브 모드입니다.
      </p>
      <pre>
        <code>{`detoks repl --adapter [claude|gemini|codex] \
            --execution-mode [stub|real]`}</code>
      </pre>

      <h3 id="repl-examples">실행 예시</h3>
      <pre>
        <code>{`# Claude 어댑터로 실제 실행
detoks repl --adapter claude --execution-mode real

# Codex 어댑터로 테스트 실행 (stub 모드)
detoks repl --adapter codex --execution-mode stub

# TUI(터미널 UI)와 함께 실행 — 파이프라인 단계별 진행 상황 표시
detoks repl --adapter codex --execution-mode stub --tui

# Gemini 어댑터로 실제 실행
detoks repl --adapter gemini --execution-mode real`}</code>
      </pre>

      <h2 id="single-request">단일 요청 실행</h2>
      <p>REPL 없이 단일 요청을 바로 실행할 수 있습니다:</p>
      <pre>
        <code>{`detoks "현재 레포지토리 상태를 요약해줘"`}</code>
      </pre>

      <h2 id="execution-modes">실행 모드</h2>
      <table>
        <thead>
          <tr>
            <th>모드</th>
            <th>설명</th>
            <th>용도</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>real</code>
            </td>
            <td>실제 LLM API를 호출하여 응답을 생성</td>
            <td>실제 개발 작업</td>
          </tr>
          <tr>
            <td>
              <code>stub</code>
            </td>
            <td>LLM 호출 없이 파이프라인만 실행</td>
            <td>동작 테스트, 개발 환경 확인</td>
          </tr>
        </tbody>
      </table>

      <h2 id="tui">TUI 모드</h2>
      <p>
        <code>--tui</code> 옵션을 추가하면 터미널 UI가 활성화되어 파이프라인
        8단계의 진행 상황을 실시간으로 확인할 수 있습니다:
      </p>
      <pre>
        <code>{`detoks repl --adapter claude --execution-mode real --tui`}</code>
      </pre>

      <h2 id="repl-session-example">REPL 세션 예시</h2>
      <pre>
        <code>{`$ detoks repl --adapter claude --execution-mode real

DeToks v0.1.2 — REPL 모드
어댑터: claude | 실행 모드: real

> 인증 미들웨어를 리팩토링해줘
  [1/8] Prompt Compiler...
  [2/8] Translation Guardrails...
  [3/8] Request Analyzer → modify
  [4/8] Task Graph Builder → 3 tasks
  ...
  완료.

> 방금 만든 미들웨어에 단위 테스트도 추가해줘
  이전 컨텍스트를 참조 중...
  ...`}</code>
      </pre>

      <h2 id="next-steps">다음 단계</h2>
      <ul>
        <li>
          <a href="/docs/supported-agents">지원 LLM</a> — 각 어댑터 상세 정보
        </li>
        <li>
          <a href="/docs/configuration">설정</a> — .env 환경 변수 구성
        </li>
        <li>
          <a href="/docs/token-analytics">처리 파이프라인</a> — 8단계 파이프라인
          이해하기
        </li>
      </ul>
    </>
  );
}
