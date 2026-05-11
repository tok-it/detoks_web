export function DiscoverSession() {
  return (
    <>
      <h1>Discover와 세션</h1>

      <h2 id="discover">Discover 모드</h2>
      <p>
        Discover 모드는 현재 프로젝트 환경을 자동으로 분석하여 최적의 필터
        규칙을 생성합니다. 새 프로젝트를 시작할 때 한 번 실행하면 DeToks가
        해당 프로젝트에 맞게 최적화됩니다.
      </p>
      <pre>
        <code>{`detoks discover`}</code>
      </pre>
      <pre>
        <code>{`프로젝트 분석 중...

감지됨:
  ✓ Node.js 프로젝트 (package.json)
  ✓ TypeScript (tsconfig.json)
  ✓ Vite 빌드 도구
  ✓ Vitest 테스트 러너
  ✓ pnpm 패키지 매니저

최적화 규칙 생성:
  ✓ pnpm 진행 표시줄 필터
  ✓ TypeScript 컴파일 노이즈 제거
  ✓ Vitest 통과 메시지 요약

.detoksrc 업데이트 완료 ✓`}</code>
      </pre>

      <h3 id="discover-what-it-does">Discover가 하는 일</h3>
      <ol>
        <li>프로젝트 타입 감지 (Node.js, Python, Rust, Go 등)</li>
        <li>사용 중인 도구 목록 자동 수집</li>
        <li>최적화 가능한 명령어 패턴 분석</li>
        <li>
          <code>.detoksrc</code> 파일에 권장 설정 저장
        </li>
      </ol>

      <h2 id="session-mode">세션 모드</h2>
      <p>
        세션 모드는 여러 명령어에 걸쳐 작업 컨텍스트를 유지합니다. 복잡한
        구현 작업을 여러 단계로 나눠서 진행할 때 특히 유용합니다.
      </p>

      <h3 id="start-session">세션 시작</h3>
      <pre>
        <code>{`detoks session start`}</code>
      </pre>
      <pre>
        <code>{`새 세션 시작됨
세션 ID: abc123
컨텍스트 크기: 0 토큰
시작 시간: 2025-05-10 14:32:00`}</code>
      </pre>

      <h3 id="session-history">세션 히스토리 조회</h3>
      <pre>
        <code>{`detoks session list`}</code>
      </pre>
      <pre>
        <code>{`세션 목록
─────────────────────────────────────────────────
ID       날짜                 명령어   토큰 절감
abc123   2025-05-10 14:32    24       12,847
def456   2025-05-09 09:15    31       18,234`}</code>
      </pre>

      <h3 id="export-session">세션 내보내기</h3>
      <pre>
        <code>{`detoks session export session.json`}</code>
      </pre>
      <pre>
        <code>{`detoks session export --session abc123 output.json`}</code>
      </pre>

      <h3 id="import-session">세션 불러오기</h3>
      <p>이전에 내보낸 세션을 복원하여 이어서 작업할 수 있습니다:</p>
      <pre>
        <code>{`detoks session import session.json`}</code>
      </pre>

      <h2 id="comparison">Discover vs 세션</h2>
      <table>
        <thead>
          <tr>
            <th>기능</th>
            <th>Discover</th>
            <th>세션</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>목적</td>
            <td>초기 설정 최적화</td>
            <td>작업 컨텍스트 유지</td>
          </tr>
          <tr>
            <td>실행 시점</td>
            <td>프로젝트 시작 시 (1회)</td>
            <td>지속적 사용</td>
          </tr>
          <tr>
            <td>출력</td>
            <td>.detoksrc 설정 파일</td>
            <td>세션 히스토리</td>
          </tr>
          <tr>
            <td>주요 이점</td>
            <td>자동 필터 최적화</td>
            <td>컨텍스트 재사용으로 토큰 절감</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
