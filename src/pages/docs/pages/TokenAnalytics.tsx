export function TokenAnalytics() {
  return (
    <>
      <h1>처리 파이프라인</h1>

      <h2 id="overview">개요</h2>
      <p>
        DeToks는 모든 요청을 예측 가능하고 결정론적인 8단계 순차 파이프라인으로
        처리합니다. 각 단계는 명확한 책임을 가지며, 단방향 데이터 흐름으로
        동작합니다.
      </p>

      <h2 id="stage1">1단계 — Prompt Compiler</h2>
      <p>사용자 입력을 LLM에 전달하기 전에 정규화합니다:</p>
      <ul>
        <li>코드, 경로, JSON, 명령어 등 보호 요소를 마스킹</li>
        <li>한국어 입력을 영어로 번역 (Kompress 모델 사용)</li>
        <li>Kompress를 통한 프롬프트 압축 적용</li>
      </ul>

      <h2 id="stage2">2단계 — Translation Guardrails</h2>
      <p>번역 결과의 품질을 검증합니다:</p>
      <ul>
        <li>보호된 용어가 번역 후에도 온전히 유지되는지 확인</li>
        <li>검증 실패 시 최대 5회 재시도</li>
        <li>재시도 초과 시 원본 그대로 진행</li>
      </ul>

      <h2 id="stage3">3단계 — Request Analyzer</h2>
      <p>요청을 8가지 표준 타입 중 하나로 분류합니다:</p>
      <pre>
        <code>{`explore | analyze | create | modify
validate | execute | document | plan`}</code>
      </pre>
      <p>
        각 타입에 대한 자세한 설명은{" "}
        <a href="/docs/what-optimizes">요청 타입</a> 페이지를 참고하세요.
      </p>

      <h2 id="stage4">4단계 — Task Graph Builder</h2>
      <p>복잡한 요청을 실행 가능한 단위로 분해합니다:</p>
      <ul>
        <li>다단계 요청을 개별 작업(task)으로 분해</li>
        <li>작업 간 의존 관계 파악</li>
        <li>위상 정렬(topological sort)로 실행 순서 결정</li>
      </ul>

      <h2 id="stage5">5단계 — Context Optimizer</h2>
      <p>LLM에 전달되는 컨텍스트를 최적화하여 토큰을 절감합니다:</p>
      <ul>
        <li>중복 코드 및 내용 제거</li>
        <li>현재 작업과 관련된 파일만 선택</li>
        <li>불필요한 과거 컨텍스트 제거</li>
        <li>
          작업 타입별 적응형 요약 적용
          <ul>
            <li>
              <code>validate</code> — 엄격한 압축
            </li>
            <li>
              <code>create</code> / <code>modify</code> — 상세 컨텍스트 유지
            </li>
            <li>
              <code>analyze</code> — 포괄적인 탐색 결과 포함
            </li>
          </ul>
        </li>
      </ul>

      <h2 id="stage6">6단계 — Executor</h2>
      <p>설정된 LLM 어댑터를 통해 실제 추론을 실행합니다:</p>
      <ul>
        <li>타임아웃 관리 포함</li>
        <li>
          <code>stub</code> / <code>real</code> 실행 모드 전환 가능
        </li>
      </ul>

      <h2 id="stage7">7단계 — Output Processor</h2>
      <p>LLM 응답을 정규화합니다:</p>
      <ul>
        <li>긴 결과는 요약으로 대체 (기본 동작)</li>
        <li>페이로드를 일관된 형식으로 정규화</li>
        <li>불필요한 토큰 낭비 방지</li>
      </ul>

      <h2 id="stage8">8단계 — State Manager</h2>
      <p>다음 턴을 위해 세션 상태를 저장합니다:</p>
      <ul>
        <li>목표 추적, 완료된 작업 히스토리, 핵심 결정 사항 보존</li>
        <li>아티팩트 저장 및 체크포인트 시스템</li>
        <li>멀티턴 연속성 지원</li>
      </ul>

      <h2 id="token-threshold">토큰 압축 임계값</h2>
      <p>
        현재 보수적인 임계값은 <strong>3,000 토큰</strong>이며, 실제 평균
        세션 크기는 210 토큰(임계값의 약 7%)입니다.
      </p>
      <table>
        <thead>
          <tr>
            <th>모델</th>
            <th>컨텍스트 윈도우</th>
            <th>권장 임계값</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Claude Haiku</td>
            <td>200K</td>
            <td>85K 토큰</td>
          </tr>
          <tr>
            <td>Claude 3 Sonnet</td>
            <td>200K</td>
            <td>85K 토큰</td>
          </tr>
          <tr>
            <td>Gemini 1.5 Pro</td>
            <td>1M</td>
            <td>985K 토큰</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
