export function Telemetry() {
  return (
    <>
      <h1>아키텍처</h1>

      <h2 id="no-telemetry">텔레메트리 없음</h2>
      <p>
        DeToks는 사용자 데이터나 텔레메트리를 수집하지 않습니다. 엔지니어링
        가이드라인에 따라 외부 데이터 수집 대신 내부 세션 상태 관리에 집중하도록
        설계되어 있습니다.
      </p>

      <h2 id="layered-architecture">레이어드 아키텍처</h2>
      <p>DeToks는 4개의 레이어로 구성됩니다:</p>
      <table>
        <thead>
          <tr>
            <th>레이어</th>
            <th>역할</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CLI Layer</td>
            <td>사용자 인터페이스, 인터랙티브 명령 환경</td>
          </tr>
          <tr>
            <td>Core Layer</td>
            <td>
              8단계 파이프라인 조율, 프롬프트 정제, 번역 검증, 세션 상태 관리
            </td>
          </tr>
          <tr>
            <td>LLM Layer</td>
            <td>
              llama.cpp 서버를 통한 모델 추론, 모델 로딩 및 엔드포인트 설정
              관리
            </td>
          </tr>
          <tr>
            <td>Integration Layer</td>
            <td>외부 CLI 도구 연결, 서브프로세스 실행 관리</td>
          </tr>
        </tbody>
      </table>

      <h2 id="data-flow">데이터 흐름</h2>
      <pre>
        <code>{`UserRequest
    → CompiledPrompt
    → Role2PromptInput
    → AnalyzedRequest
    → TaskGraph
    → ExecutionContext
    → ExecutionResult
    → SessionState`}</code>
      </pre>

      <h2 id="design-principles">설계 원칙</h2>
      <ul>
        <li>
          <strong>단방향 데이터 흐름</strong> — 예측 가능성을 위해 파이프라인은
          항상 한 방향으로만 진행
        </li>
        <li>
          <strong>상태 기반 처리 로직</strong> — 모든 처리 결정은 명시적인
          상태에 의존
        </li>
        <li>
          <strong>AI와 코드의 명확한 분리</strong> — AI 추론 영역과 결정론적
          코드 영역을 분리
        </li>
      </ul>

      <h2 id="role-based-ownership">역할 기반 소유권</h2>
      <p>파이프라인 책임은 역할별로 명확히 구분됩니다:</p>
      <table>
        <thead>
          <tr>
            <th>역할</th>
            <th>담당 단계</th>
            <th>책임</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Role 1</td>
            <td>Prompt Engineer</td>
            <td>입력 정규화, 번역, 프롬프트 압축</td>
          </tr>
          <tr>
            <td>Role 2.1</td>
            <td>Task Graph</td>
            <td>요청 분류, 작업 분해, 의존성 관리</td>
          </tr>
          <tr>
            <td>Role 2.2</td>
            <td>State / Context</td>
            <td>컨텍스트 최적화, 세션 상태 유지</td>
          </tr>
          <tr>
            <td>Role 3</td>
            <td>CLI / System</td>
            <td>LLM 실행, 출력 처리, 서브프로세스 관리</td>
          </tr>
        </tbody>
      </table>

      <h2 id="tech-stack">기술 스택</h2>
      <table>
        <thead>
          <tr>
            <th>항목</th>
            <th>버전</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TypeScript</td>
            <td>5.8.3</td>
          </tr>
          <tr>
            <td>Vitest</td>
            <td>3.2.4</td>
          </tr>
          <tr>
            <td>tiktoken</td>
            <td>^1.0.22</td>
          </tr>
          <tr>
            <td>zod</td>
            <td>4.3.6</td>
          </tr>
          <tr>
            <td>chalk</td>
            <td>^5.6.2</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
