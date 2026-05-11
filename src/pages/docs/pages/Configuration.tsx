export function Configuration() {
  return (
    <>
      <h1>설정</h1>

      <h2 id="zero-config">기본 설정</h2>
      <p>
        DeToks는 설정 없이 즉시 사용할 수 있습니다. 설치하면 기본 필터 규칙이
        자동으로 적용되어 주요 개발 도구의 출력을 최적화합니다.
      </p>
      <p>
        더 세밀한 제어가 필요하다면 <code>.detoksrc</code> 파일을 통해
        커스터마이즈할 수 있습니다.
      </p>

      <h2 id="detoksrc">
        <code>.detoksrc</code> 파일
      </h2>
      <p>
        프로젝트 루트나 홈 디렉토리(<code>~/.detoksrc</code>)에{" "}
        <code>.detoksrc</code> 파일을 생성하세요. 프로젝트별 설정이 전역 설정보다
        우선적으로 적용됩니다.
      </p>
      <pre>
        <code>{`{
  "filters": {
    "git": true,
    "npm": true,
    "build": true,
    "test": true
  },
  "maxLines": 50,
  "verbose": false,
  "telemetry": true
}`}</code>
      </pre>

      <h3 id="config-options">설정 옵션</h3>
      <table>
        <thead>
          <tr>
            <th>옵션</th>
            <th>기본값</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>filters.git</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>git 명령어 출력 필터링</td>
          </tr>
          <tr>
            <td>
              <code>filters.npm</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>npm/pnpm/yarn 출력 필터링</td>
          </tr>
          <tr>
            <td>
              <code>filters.build</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>빌드 도구 출력 필터링</td>
          </tr>
          <tr>
            <td>
              <code>filters.test</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>테스트 러너 출력 필터링</td>
          </tr>
          <tr>
            <td>
              <code>maxLines</code>
            </td>
            <td>
              <code>50</code>
            </td>
            <td>필터링 후 최대 출력 줄 수</td>
          </tr>
          <tr>
            <td>
              <code>verbose</code>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>필터링 과정 상세 로그 출력</td>
          </tr>
          <tr>
            <td>
              <code>telemetry</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>익명 사용 통계 수집</td>
          </tr>
        </tbody>
      </table>

      <h2 id="env-vars">환경 변수</h2>
      <p>환경 변수로 설정을 빠르게 재정의할 수 있습니다:</p>
      <pre>
        <code>{`# 텔레메트리 비활성화
export DETOKS_NO_TELEMETRY=1

# 상세 로그 출력
export DETOKS_VERBOSE=1

# 최대 출력 줄 수 설정
export DETOKS_MAX_LINES=100

# 모든 필터 비활성화 (디버깅 시 유용)
export DETOKS_DISABLE=1`}</code>
      </pre>
      <p>
        환경 변수는 <code>.detoksrc</code> 파일 설정보다 우선적으로 적용됩니다.
      </p>

      <h2 id="custom-filters">커스텀 필터 규칙</h2>
      <p>
        특정 명령어에 대해 커스텀 필터 규칙을 정의할 수 있습니다:
      </p>
      <pre>
        <code>{`{
  "customFilters": [
    {
      "pattern": "docker",
      "removeLines": ["Pulling from", "Pull complete", "Digest:"],
      "maxLines": 20
    },
    {
      "pattern": "kubectl",
      "keepOnly": ["NAME", "STATUS", "READY", "RESTARTS"]
    }
  ]
}`}</code>
      </pre>

      <h2 id="validate">설정 검증</h2>
      <p>설정 파일이 올바른지 확인하려면:</p>
      <pre>
        <code>{`detoks config validate`}</code>
      </pre>
      <p>현재 적용된 설정을 확인하려면:</p>
      <pre>
        <code>{`detoks config show`}</code>
      </pre>
    </>
  );
}
