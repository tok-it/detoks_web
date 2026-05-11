export function WhatOptimizes() {
  return (
    <>
      <h1>DeToks가 최적화하는 것</h1>

      <h2 id="git">Git 명령어</h2>
      <p>
        DeToks는 가장 자주 사용되는 git 명령어의 출력을 대폭 줄입니다. 실제로
        필요한 변경 정보만 LLM에 전달합니다.
      </p>
      <table>
        <thead>
          <tr>
            <th>명령어</th>
            <th>평균 절감률</th>
            <th>제거 대상</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>git status</code>
            </td>
            <td>85%</td>
            <td>힌트 메시지, 색상 코드, 빈 줄</td>
          </tr>
          <tr>
            <td>
              <code>git diff</code>
            </td>
            <td>70%</td>
            <td>공백 변경, 바이너리 파일 알림</td>
          </tr>
          <tr>
            <td>
              <code>git log</code>
            </td>
            <td>80%</td>
            <td>커밋 메타데이터 중 불필요한 항목</td>
          </tr>
          <tr>
            <td>
              <code>git blame</code>
            </td>
            <td>75%</td>
            <td>날짜 형식, 이메일 주소</td>
          </tr>
          <tr>
            <td>
              <code>git branch</code>
            </td>
            <td>60%</td>
            <td>원격 브랜치 반복, 색상 코드</td>
          </tr>
        </tbody>
      </table>

      <h2 id="package-managers">패키지 매니저</h2>
      <p>
        npm, pnpm, yarn 실행 시 출력되는 진행 표시줄과 불필요한 경고를
        제거합니다:
      </p>
      <ul>
        <li>
          진행 표시줄 (<code>████████ 32%</code>)
        </li>
        <li>
          패키지별 설치 완료 메시지 (<code>added lodash@4.17.21</code>)
        </li>
        <li>
          npm warn... 경고 (보안상 중요한 경고는 유지)
        </li>
        <li>감사 결과 상세 내용 (요약만 유지)</li>
        <li>타임스탬프 및 속도 정보</li>
      </ul>

      <h3 id="npm-example">예시: npm install 필터링</h3>
      <pre>
        <code>{`# 원본 출력 (43줄)
npm warn deprecated inflight@1.0.6
npm warn deprecated glob@7.2.3
...
added 284 packages, and audited 285 packages in 8s

38 packages are looking for funding
  run \`npm fund\` for details

found 0 vulnerabilities

# DeToks 필터링 후 (1줄)
설치 완료: 284개 패키지, 취약점 없음`}</code>
      </pre>

      <h2 id="build-tools">빌드 도구</h2>
      <p>TypeScript, Vite, Webpack 등의 빌드 출력에서 노이즈를 제거합니다:</p>

      <h3 id="typescript">TypeScript</h3>
      <ul>
        <li>개별 파일 처리 진행 상황</li>
        <li>타임스탬프 메시지</li>
        <li>중복 경로 표시</li>
      </ul>

      <h3 id="vite">Vite</h3>
      <ul>
        <li>모듈 트리 전체 목록 (요약으로 대체)</li>
        <li>청크 생성 진행 표시</li>
        <li>불필요한 경고 메시지</li>
      </ul>

      <h2 id="test-runners">테스트 러너</h2>
      <p>Jest, Vitest 등의 테스트 출력을 최적화합니다:</p>
      <ul>
        <li>각 테스트 케이스 통과 메시지 (요약으로 대체)</li>
        <li>
          커버리지 상세 보고서 (최종 퍼센트만 유지)
        </li>
        <li>워처 모드 안내 메시지</li>
      </ul>

      <h3 id="test-example">예시: Vitest 출력 필터링</h3>
      <pre>
        <code>{`# 원본 출력 (28줄)
 ✓ src/components/Header.test.tsx (3)
   ✓ renders logo correctly
   ✓ shows navigation items
   ✓ GitHub button links correctly
 ✓ src/utils/format.test.ts (5)
   ✓ formatDate returns correct string
   ...

 Test Files  8 passed (8)
      Tests  24 passed (24)

# DeToks 필터링 후 (2줄)
테스트 통과: 24/24 (파일 8개)
소요 시간: 1.43s`}</code>
      </pre>
    </>
  );
}
