export function SupportedAgents() {
  return (
    <>
      <h1>지원 에이전트</h1>

      <h2 id="claude-code">Claude Code</h2>
      <p>
        DeToks는 현재 <strong>Claude Code</strong>와 완전히 통합되어 있습니다.
        Claude Code의 훅 시스템을 활용하여 모든 Bash 도구 호출을 투명하게
        필터링합니다.
      </p>

      <h3 id="claude-supported-tools">지원 도구</h3>
      <p>Claude Code 내에서 다음 도구 유형의 출력이 필터링됩니다:</p>
      <ul>
        <li>
          <strong>Bash</strong> — 셸 명령어 실행 결과
        </li>
        <li>
          <strong>Git 작업</strong> — status, diff, log, blame 등
        </li>
        <li>
          <strong>패키지 매니저</strong> — npm, pnpm, yarn, bun
        </li>
        <li>
          <strong>빌드 도구</strong> — TypeScript 컴파일러, Vite, Webpack
        </li>
        <li>
          <strong>테스트 러너</strong> — Jest, Vitest, Mocha
        </li>
      </ul>

      <h3 id="claude-integration-method">통합 방식</h3>
      <p>
        DeToks는 Claude Code의 <code>PreToolUse</code> 훅을 사용합니다. 이
        훅은 Bash 도구가 실행되기 직전에 호출되며, DeToks가 출력을 가로채서
        필터링한 뒤 Claude에게 전달합니다.
      </p>
      <pre>
        <code>{`# ~/.claude/settings.json에 자동 등록됨
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [{ "type": "command", "command": "detoks filter" }]
      }
    ]
  }
}`}</code>
      </pre>

      <h2 id="upcoming">향후 지원 예정</h2>
      <p>
        다음 AI 에이전트 및 도구에 대한 지원을 개발 중입니다:
      </p>
      <table>
        <thead>
          <tr>
            <th>에이전트</th>
            <th>상태</th>
            <th>예상 시기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GitHub Copilot</td>
            <td>개발 중</td>
            <td>2025 Q3</td>
          </tr>
          <tr>
            <td>Cursor</td>
            <td>계획됨</td>
            <td>2025 Q3</td>
          </tr>
          <tr>
            <td>Aider</td>
            <td>계획됨</td>
            <td>2025 Q4</td>
          </tr>
          <tr>
            <td>Cline</td>
            <td>계획됨</td>
            <td>2025 Q4</td>
          </tr>
          <tr>
            <td>Amp</td>
            <td>검토 중</td>
            <td>미정</td>
          </tr>
        </tbody>
      </table>

      <h2 id="request-agent">지원 요청</h2>
      <p>
        사용 중인 에이전트가 목록에 없다면{" "}
        <a
          href="https://github.com/tok-it/detoks/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Issues
        </a>
        에서 요청해주세요. 커뮤니티 요청이 많은 순서대로 우선순위를
        결정합니다.
      </p>
    </>
  );
}
