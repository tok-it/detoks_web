export function Troubleshooting() {
  return (
    <>
      <h1>문제 해결</h1>

      <h2 id="node-version">Node.js 버전 오류</h2>
      <p>
        DeToks는 Node.js <code>{">=24.15.0 <26"}</code>을 요구합니다. 버전이
        맞지 않으면 설치 또는 실행 시 오류가 발생합니다.
      </p>
      <pre>
        <code>{`node --version   # v24.x.x 이상인지 확인`}</code>
      </pre>
      <p>nvm을 사용한다면:</p>
      <pre>
        <code>{`nvm install 24
nvm use 24`}</code>
      </pre>

      <h2 id="command-not-found">
        <code>detoks</code> 명령어를 찾을 수 없음
      </h2>
      <p>전역 설치 후에도 명령어가 인식되지 않는 경우:</p>
      <pre>
        <code>{`# npm 전역 경로 확인
npm config get prefix

# PATH에 추가되어 있는지 확인
echo $PATH

# 경로 추가 예시 (~/.zshrc 또는 ~/.bashrc)
export PATH="$(npm config get prefix)/bin:$PATH"`}</code>
      </pre>
      <p>
        또는 설치 없이 <code>npx</code>로 실행하세요:
      </p>
      <pre>
        <code>{`npx @sorlros/detoks --help`}</code>
      </pre>

      <h2 id="llm-connection">LLM 연결 오류</h2>
      <p>
        <code>--execution-mode real</code>로 실행 시 LLM API 연결에 실패하면:
      </p>
      <ol>
        <li>선택한 어댑터의 CLI 도구가 설치되어 있는지 확인하세요</li>
        <li>
          API 키 또는 인증 설정이 올바른지 확인하세요
        </li>
        <li>
          <code>--execution-mode stub</code>으로 전환하여 파이프라인 자체가
          정상 동작하는지 먼저 확인하세요:
          <pre>
            <code>{`detoks repl --adapter claude --execution-mode stub`}</code>
          </pre>
        </li>
      </ol>

      <h2 id="local-llm-startup">로컬 LLM 서버 시작 실패</h2>
      <p>
        로컬 llama.cpp 서버를 사용하는 경우 다음을 확인하세요:
      </p>
      <ul>
        <li>
          Python 3.13.x가 설치되어 있고 <code>KOMPRESS_PYTHON_BIN</code> 경로가
          올바른지 확인
        </li>
        <li>
          <code>LOCAL_LLM_SERVER_BINARY</code> 경로에 llama-server 바이너리가
          존재하는지 확인
        </li>
        <li>
          <code>LOCAL_LLM_SERVER_PORT</code>가 이미 사용 중이지 않은지 확인:
          <pre>
            <code>{`lsof -i :12345`}</code>
          </pre>
        </li>
        <li>
          <code>LOCAL_LLM_STARTUP_TIMEOUT</code> 값을 늘려 서버 시작 대기
          시간을 연장
        </li>
      </ul>

      <h2 id="windows">Windows 환경</h2>
      <p>
        Windows 네이티브 환경은 지원되지 않습니다. WSL(Ubuntu)을 사용하세요.
        WSL 없이 실행하면 예기치 않은 오류가 발생할 수 있습니다.
      </p>

      <h2 id="debug-mode">디버그 모드</h2>
      <p>
        파이프라인 단계별 상세 로그를 보려면 <code>.env</code>에서 파이프라인
        모드를 변경하세요:
      </p>
      <pre>
        <code>{`PIPELINE_MODE=debug`}</code>
      </pre>
      <p>
        또는 <code>--tui</code> 옵션으로 터미널 UI에서 실시간 파이프라인
        진행 상황을 확인하세요:
      </p>
      <pre>
        <code>{`detoks repl --adapter claude --execution-mode stub --tui`}</code>
      </pre>

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
          <code>node --version</code> 출력
        </li>
        <li>
          <code>detoks --help</code> 출력
        </li>
        <li>오류 메시지 전문</li>
        <li>운영체제 및 환경 (WSL 여부 포함)</li>
      </ul>
    </>
  );
}
