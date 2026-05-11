export function Installation() {
  return (
    <>
      <h1>설치</h1>

      <h2 id="requirements">요구사항</h2>
      <p>DeToks를 설치하기 전에 다음 환경을 갖추세요:</p>
      <table>
        <thead>
          <tr>
            <th>항목</th>
            <th>버전</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Node.js</td>
            <td>
              <code>{">=24.15.0 <26"}</code>
            </td>
            <td>필수</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>3.13.x</td>
            <td>로컬 LLM 서버 사용 시 필요 (선택)</td>
          </tr>
          <tr>
            <td>운영체제</td>
            <td>macOS, Linux</td>
            <td>Windows는 WSL(Ubuntu) 환경에서만 지원</td>
          </tr>
          <tr>
            <td>LLM CLI</td>
            <td>—</td>
            <td>선택한 어댑터의 CLI 도구 (Claude, Gemini, Codex)</td>
          </tr>
        </tbody>
      </table>

      <h2 id="install-global">전역 설치 (권장)</h2>
      <pre>
        <code>{`npm install -g @sorlros/detoks`}</code>
      </pre>
      <p>설치 후 버전을 확인하세요:</p>
      <pre>
        <code>{`detoks --help`}</code>
      </pre>

      <h2 id="install-npx">설치 없이 실행 (npx)</h2>
      <p>설치 없이 바로 실행할 수도 있습니다:</p>
      <pre>
        <code>{`npx @sorlros/detoks --help`}</code>
      </pre>

      <h2 id="update">최신 버전으로 업데이트</h2>
      <pre>
        <code>{`npm install -g @sorlros/detoks@latest`}</code>
      </pre>

      <h2 id="windows-wsl">Windows 사용자</h2>
      <p>
        Windows 네이티브 환경은 지원되지 않습니다. WSL(Windows Subsystem for
        Linux) Ubuntu 환경에서 사용하세요.
      </p>
      <pre>
        <code>{`# WSL Ubuntu에서 설치
wsl
npm install -g @sorlros/detoks`}</code>
      </pre>

      <h2 id="local-llm">로컬 LLM 서버 설정 (선택)</h2>
      <p>
        로컬 llama.cpp 서버를 사용하려면 Python 3.13.x와 llama-server 바이너리가
        필요합니다. 설정은 <a href="/docs/configuration">설정 페이지</a>의
        로컬 LLM 설정 항목을 참고하세요.
      </p>

      <h2 id="next-steps">다음 단계</h2>
      <p>
        설치가 완료되었습니다.{" "}
        <a href="/docs/quick-start">빠른 시작</a> 가이드로 이동하여 첫 번째
        세션을 시작해보세요.
      </p>
    </>
  );
}
