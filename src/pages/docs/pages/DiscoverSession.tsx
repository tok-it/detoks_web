export function DiscoverSession() {
  return (
    <>
      <h1>세션과 상태 관리</h1>

      <h2 id="overview">개요</h2>
      <p>
        DeToks는 파이프라인 8단계(State Manager)를 통해 세션 상태를 저장하고
        멀티턴 연속성을 지원합니다. 한 번 분석된 요청 결과는 다음 턴에 재사용할
        수 있으며, 다른 모델로 전환해도 컨텍스트를 이어갈 수 있습니다.
      </p>

      <h2 id="session-state">SessionState 구조</h2>
      <p>
        각 세션은 다음 정보를 포함하는 <code>SessionState</code> 객체로
        관리됩니다:
      </p>
      <table>
        <thead>
          <tr>
            <th>필드</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>goal</td>
            <td>원래 목표 및 현재 작업 포인터</td>
          </tr>
          <tr>
            <td>completedTasks</td>
            <td>완료된 작업 배열 및 롤링 요약</td>
          </tr>
          <tr>
            <td>decisions</td>
            <td>감사 추적을 위한 핵심 결정 사항 로그</td>
          </tr>
          <tr>
            <td>artifacts</td>
            <td>작업 결과물 및 오류 로그 구조체</td>
          </tr>
          <tr>
            <td>checkpoint</td>
            <td>파일 변경 내역 및 다음 작업 안내가 포함된 스냅샷</td>
          </tr>
        </tbody>
      </table>

      <h2 id="multi-turn">멀티턴 연속성</h2>
      <p>REPL 모드에서 여러 요청에 걸쳐 컨텍스트가 자동으로 유지됩니다:</p>
      <pre>
        <code>{`detoks repl --adapter claude --execution-mode real

> 인증 미들웨어를 리팩토링해줘
  → 파이프라인이 실행되고 결과가 SessionState에 저장됨

> 방금 만든 미들웨어에 단위 테스트도 추가해줘
  → 이전 턴의 컨텍스트(completedTasks, artifacts)를 자동으로 참조

> 변경사항을 커밋할 메시지 작성해줘
  → 두 턴의 작업 내역을 종합하여 커밋 메시지 생성`}</code>
      </pre>

      <h2 id="reusable-state">재사용 가능한 상태</h2>
      <p>세션 상태의 주요 재사용 특징:</p>
      <ul>
        <li>요청이 한 번 분석되면, 결과를 다시 실행할 수 있음</li>
        <li>다른 모델로 전환해도 결과를 그대로 이전 가능</li>
        <li>
          컨텍스트는 현재 작업에 관련된 정보만 선택적으로 압축하여 유지
        </li>
      </ul>

      <h2 id="checkpoint">체크포인트 시스템</h2>
      <p>
        작업이 완료될 때마다 체크포인트가 생성됩니다. 체크포인트에는 다음이
        포함됩니다:
      </p>
      <ul>
        <li>변경된 파일 목록</li>
        <li>다음 권장 작업 안내</li>
        <li>해당 시점의 전체 세션 스냅샷</li>
      </ul>

      <h2 id="context-optimization">컨텍스트 최적화 전략</h2>
      <p>
        5단계(Context Optimizer)가 세션 상태를 LLM에 전달하기 전에 자동으로
        최적화합니다:
      </p>
      <ul>
        <li>현재 작업과 무관한 과거 히스토리 제거</li>
        <li>중복된 내용 압축</li>
        <li>작업 타입에 따라 필요한 아티팩트만 선별하여 전달</li>
      </ul>
    </>
  );
}
