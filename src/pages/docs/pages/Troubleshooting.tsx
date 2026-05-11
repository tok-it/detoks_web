export function Troubleshooting() {
  return (
    <>
      <h1>문제 해결</h1>

      <h2 id="common-issues">일반적인 문제</h2>

      <h3 id="not-filtering">DeToks가 필터링을 적용하지 않음</h3>
      <p>
        명령어 출력이 줄어들지 않는다면 다음 순서로 확인하세요:
      </p>
      <ol>
        <li>
          설치 확인:
          <pre>
            <code>{`detoks --version`}</code>
          </pre>
        </li>
        <li>
          훅 등록 확인:
          <pre>
            <code>{`detoks check-hooks`}</code>
          </pre>
        </li>
        <li>
          Claude Code 설정 파일 직접 확인:
          <pre>
            <code>{`cat ~/.claude/settings.json`}</code>
          </pre>
          <code>PreToolUse</code> 훅이 있는지 검토하세요.
        </li>
        <li>
          훅을 수동으로 재등록:
          <pre>
            <code>{`detoks install-hooks`}</code>
          </pre>
        </li>
      </ol>

      <h3 id="too-much-filtered">너무 많은 정보가 필터링됨</h3>
      <p>
        중요한 정보가 사라지는 경우, <code>maxLines</code> 값을 높이거나 특정
        필터를 비활성화하세요:
      </p>
      <pre>
        <code>{`{
  "maxLines": 100,
  "filters": {
    "npm": false
  }
}`}</code>
      </pre>
      <p>
        특정 명령어의 필터링만 임시로 비활성화하려면:
      </p>
      <pre>
        <code>{`DETOKS_DISABLE=1 npm install`}</code>
      </pre>

      <h3 id="permission-error">권한 오류</h3>
      <p>
        macOS/Linux에서 전역 설치 시 권한 오류가 발생하면 npx를 사용하거나
        npm 전역 경로 권한을 수정하세요:
      </p>
      <pre>
        <code>{`# npx로 실행
npx detoks --version

# 또는 로컬 사용자 경로에 설치
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
npm install -g detoks`}</code>
      </pre>

      <h3 id="hook-conflict">훅 충돌</h3>
      <p>
        다른 Claude Code 훅과 충돌이 발생하면 설정 파일에서 순서를 조정하세요.
        DeToks 훅은 다른 <code>PreToolUse</code> 훅과 함께 동작할 수 있습니다.
      </p>

      <h2 id="debug-mode">디버그 모드</h2>
      <p>
        문제를 더 자세히 진단하려면 상세 로그를 활성화하세요:
      </p>
      <pre>
        <code>{`DETOKS_VERBOSE=1 detoks run "git status"`}</code>
      </pre>
      <p>
        로그 파일은 <code>~/.detoks/debug.log</code>에 저장됩니다:
      </p>
      <pre>
        <code>{`tail -f ~/.detoks/debug.log`}</code>
      </pre>

      <h2 id="reset">초기화</h2>
      <p>
        모든 설정을 초기화하고 다시 시작하려면:
      </p>
      <pre>
        <code>{`detoks reset`}</code>
      </pre>
      <p>
        이 명령어는 <code>~/.detoksrc</code>와 캐시를 삭제하지만 통계 데이터는
        유지합니다.
      </p>

      <h2 id="get-help">지원 받기</h2>
      <p>
        문제가 해결되지 않으면{" "}
        <a
          href="https://github.com/tok-it/detoks/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Issues
        </a>
        에 다음 정보와 함께 제보해주세요:
      </p>
      <ul>
        <li>
          <code>detoks --version</code> 출력
        </li>
        <li>
          <code>~/.detoks/debug.log</code> 내용
        </li>
        <li>운영체제 및 Node.js 버전</li>
        <li>재현 방법</li>
      </ul>
    </>
  );
}
