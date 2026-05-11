export function SupportedAgents() {
  return (
    <>
      <h1>지원 LLM</h1>

      <h2 id="overview">개요</h2>
      <p>
        DeToks는 어댑터(adapter) 구조를 통해 여러 LLM을 지원합니다. REPL 실행
        시 <code>--adapter</code> 옵션으로 사용할 LLM을 선택하고,{" "}
        <code>--execution-mode</code>로 실제 호출 여부를 결정합니다.
      </p>

      <h2 id="claude">Claude</h2>
      <p>Anthropic의 Claude 모델을 사용합니다.</p>
      <pre>
        <code>{`detoks repl --adapter claude --execution-mode real`}</code>
      </pre>

      <h2 id="gemini">Gemini</h2>
      <p>Google의 Gemini 모델을 사용합니다.</p>
      <pre>
        <code>{`detoks repl --adapter gemini --execution-mode real`}</code>
      </pre>

      <h2 id="codex">Codex</h2>
      <p>OpenAI의 Codex 모델을 사용합니다.</p>
      <pre>
        <code>{`detoks repl --adapter codex --execution-mode real`}</code>
      </pre>

      <h2 id="stub-mode">Stub 모드 (어댑터 공통)</h2>
      <p>
        모든 어댑터는 <code>stub</code> 실행 모드를 지원합니다. LLM API를
        실제로 호출하지 않고 파이프라인만 실행하므로 동작 테스트나 개발 환경
        확인에 유용합니다.
      </p>
      <pre>
        <code>{`detoks repl --adapter codex --execution-mode stub
detoks repl --adapter gemini --execution-mode stub
detoks repl --adapter claude --execution-mode stub`}</code>
      </pre>

      <h2 id="adapter-architecture">어댑터 구조</h2>
      <p>
        어댑터는 <code>src/integrations/adapters/</code> 아래에 구현되어
        있습니다:
      </p>
      <table>
        <thead>
          <tr>
            <th>파일</th>
            <th>역할</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>interface.ts</code>
            </td>
            <td>어댑터 인터페이스 계약 정의</td>
          </tr>
          <tr>
            <td>
              <code>real.ts</code>
            </td>
            <td>프로덕션 구현체</td>
          </tr>
          <tr>
            <td>
              <code>stub.ts</code>
            </td>
            <td>테스트용 구현체</td>
          </tr>
          <tr>
            <td>
              <code>claude/</code>
            </td>
            <td>Claude 전용 구현</td>
          </tr>
          <tr>
            <td>
              <code>codex/</code>
            </td>
            <td>Codex 전용 구현</td>
          </tr>
          <tr>
            <td>
              <code>gemini/</code>
            </td>
            <td>Gemini 전용 구현</td>
          </tr>
        </tbody>
      </table>

      <h2 id="local-llm">로컬 LLM (llama.cpp)</h2>
      <p>
        외부 API 없이 로컬 llama.cpp 서버를 통해 OpenAI 호환 엔드포인트로
        모델을 실행할 수도 있습니다. 자세한 설정은{" "}
        <a href="/docs/configuration">설정 페이지</a>를 참고하세요.
      </p>
      <pre>
        <code>{`# 기본 llama-server 설정
바인드 주소: 127.0.0.1:12370
API prefix:  /v1
컨텍스트:    4096 토큰
기본 모델:   mradermacher/gemma-4-e2b-it-heretic-ara-GGUF:Q4_K_S`}</code>
      </pre>
    </>
  );
}
