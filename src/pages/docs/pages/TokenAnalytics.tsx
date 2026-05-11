export function TokenAnalytics() {
  return (
    <>
      <h1>토큰 절감 분석</h1>

      <h2 id="overview">분석 개요</h2>
      <p>
        DeToks는 모든 필터링 작업을 추적하여 절약된 토큰 수를 정확히
        측정합니다. 이 데이터를 통해 DeToks가 얼마나 효과적으로 동작하는지
        확인하고, 비용 절감 효과를 정량적으로 파악할 수 있습니다.
      </p>

      <h2 id="realtime-stats">실시간 통계 확인</h2>
      <p>다음 명령어로 지금까지의 통계를 확인하세요:</p>
      <pre>
        <code>{`detoks stats`}</code>
      </pre>
      <pre>
        <code>{`DeToks 통계 리포트
─────────────────────────────
총 절감 토큰:    142,847
총 원본 토큰:    198,412
평균 절감률:     72.0%
처리된 명령어:   1,284

카테고리별 절감:
  git          45,231 토큰 (32%)
  npm/pnpm     38,614 토큰 (27%)
  빌드 도구    35,882 토큰 (25%)
  테스트       23,120 토큰 (16%)`}</code>
      </pre>

      <h2 id="session-report">세션별 보고서</h2>
      <p>세션 단위로 분석하려면:</p>
      <pre>
        <code>{`detoks stats --session`}</code>
      </pre>
      <pre>
        <code>{`세션 히스토리
─────────────────────────────────────────────
세션 ID   시작 시간            절감 토큰   절감률
abc123    2025-05-10 14:32    12,847     68%
def456    2025-05-09 09:15    18,234     75%
ghi789    2025-05-08 16:48     9,102     71%`}</code>
      </pre>

      <h2 id="daily-report">일별 보고서</h2>
      <p>날짜별 통계를 확인하세요:</p>
      <pre>
        <code>{`detoks stats --daily`}</code>
      </pre>
      <pre>
        <code>{`일별 통계 (최근 7일)
─────────────────────────────────────────────
날짜          절감 토큰   처리 명령어   절감률
2025-05-10   12,847      156         72%
2025-05-09   18,234      221         75%
2025-05-08    9,102      108         69%`}</code>
      </pre>

      <h2 id="export">데이터 내보내기</h2>
      <p>분석 데이터를 CSV나 JSON 형식으로 내보낼 수 있습니다:</p>
      <pre>
        <code>{`# CSV 내보내기
detoks stats --export stats.csv

# JSON 내보내기
detoks stats --export stats.json --format json`}</code>
      </pre>

      <h2 id="improve-savings">절감 효과 높이기</h2>
      <p>토큰 절감률을 더 높이려면 다음 방법을 시도해보세요:</p>
      <ul>
        <li>
          <strong>REPL 모드 활용</strong> — 세션 내 컨텍스트 재사용으로 중복
          전달 감소
        </li>
        <li>
          <strong>Discover 실행</strong> — <code>detoks discover</code>로
          프로젝트 맞춤 필터 자동 생성
        </li>
        <li>
          <strong>maxLines 조정</strong> — 필요에 따라 더 적은 줄만 LLM에
          전달
        </li>
        <li>
          <strong>커스텀 필터 추가</strong> — 자주 사용하는 명령어의 패턴을
          등록
        </li>
      </ul>
    </>
  );
}
