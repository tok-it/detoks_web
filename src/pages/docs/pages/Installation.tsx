export function Installation() {
  return (
    <>
      <h1>설치</h1>

      <h2 id="requirements">요구사항</h2>
      <p>DeToks를 설치하기 전에 다음 환경을 갖추세요:</p>
      <ul>
        <li>
          <strong>Node.js</strong> 18 이상
        </li>
        <li>
          <strong>npm</strong> 9+ 또는 <strong>pnpm</strong> 8+
        </li>
        <li>
          <strong>운영체제</strong> — macOS, Linux, Windows (WSL 권장)
        </li>
        <li>
          <strong>Claude Code</strong> — AI 어시스턴트 통합을 위해 필요
        </li>
      </ul>

      <h2 id="install-npm">npm으로 설치하기</h2>
      <p>전역 패키지로 설치하는 것을 권장합니다:</p>
      <pre>
        <code>{`npm install -g detoks`}</code>
      </pre>
      <p>pnpm을 선호하신다면:</p>
      <pre>
        <code>{`pnpm add -g detoks`}</code>
      </pre>

      <h2 id="verify">설치 확인</h2>
      <p>설치가 완료되면 버전을 확인하세요:</p>
      <pre>
        <code>{`detoks --version`}</code>
      </pre>
      <pre>
        <code>{`detoks v1.0.0`}</code>
      </pre>
      <p>훅이 올바르게 등록되었는지 확인하려면:</p>
      <pre>
        <code>{`detoks check-hooks`}</code>
      </pre>
      <pre>
        <code>{`✓ Claude Code hooks registered
✓ PreToolUse hook active
✓ Ready to filter`}</code>
      </pre>

      <h2 id="claude-code-integration">Claude Code 통합</h2>
      <p>
        DeToks는 설치 시 자동으로 Claude Code의 훅을 등록합니다. 수동으로
        설정할 필요가 없습니다.
      </p>
      <p>
        훅은 <code>~/.claude/settings.json</code>에 저장됩니다. 언제든지 이
        파일을 열어 설정을 확인하거나 수정할 수 있습니다.
      </p>
      <pre>
        <code>{`{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "detoks filter"
          }
        ]
      }
    ]
  }
}`}</code>
      </pre>

      <h2 id="uninstall">제거하기</h2>
      <p>DeToks를 제거하려면 먼저 훅을 해제하세요:</p>
      <pre>
        <code>{`detoks uninstall`}</code>
      </pre>
      <p>그 다음 패키지를 제거합니다:</p>
      <pre>
        <code>{`npm uninstall -g detoks`}</code>
      </pre>

      <h2 id="next-steps">다음 단계</h2>
      <p>
        설치가 완료되었습니다. <a href="/docs/quick-start">빠른 시작</a>{" "}
        가이드로 이동하여 첫 번째 명령어를 실행해보세요.
      </p>
    </>
  );
}
