export function WhatOptimizes() {
  return (
    <>
      <h1>요청 타입</h1>

      <h2 id="overview">개요</h2>
      <p>
        DeToks는 3단계(Request Analyzer)에서 모든 요청을 8가지 표준 타입 중
        하나로 분류합니다. 타입에 따라 Task Graph 구성 방식, 컨텍스트 최적화
        전략, 출력 처리 방식이 달라집니다.
      </p>

      <h2 id="explore">
        <code>explore</code> — 탐색
      </h2>
      <p>
        <strong>질문:</strong> "무엇이 있나요?" / "어디에 있나요?"
      </p>
      <p>위치, 참조, 구조, 진입점, 호출 경로, 컨텍스트를 수집합니다.</p>
      <pre>
        <code>{`"인증 관련 파일이 어디에 있어?"
"프로젝트 전체 구조를 파악해줘"`}</code>
      </pre>

      <h2 id="analyze">
        <code>analyze</code> — 분석
      </h2>
      <p>
        <strong>질문:</strong> "왜 이런 일이 발생하나요?"
      </p>
      <p>원인, 동작, 관계, 영향, 트레이드오프를 해석합니다.</p>
      <pre>
        <code>{`"왜 이 함수가 느린 거야?"
"이 두 컴포넌트의 의존 관계를 분석해줘"`}</code>
      </pre>

      <h2 id="create">
        <code>create</code> — 생성
      </h2>
      <p>
        <strong>질문:</strong> "어떤 새로운 결과물을 만들어야 하나요?"
      </p>
      <p>새로운 코드, 파일, 테스트, 스키마, 문서를 생성합니다.</p>
      <pre>
        <code>{`"JWT 인증 미들웨어를 새로 만들어줘"
"이 API에 대한 OpenAPI 스키마를 작성해줘"`}</code>
      </pre>

      <h2 id="modify">
        <code>modify</code> — 수정
      </h2>
      <p>
        <strong>질문:</strong> "어떤 기존 결과물을 변경해야 하나요?"
      </p>
      <p>기존 코드, 파일, 테스트, 설정을 수정합니다.</p>
      <pre>
        <code>{`"이 함수를 async/await로 리팩토링해줘"
"Header 컴포넌트에 Docs 링크를 추가해줘"`}</code>
      </pre>

      <h2 id="validate">
        <code>validate</code> — 검증
      </h2>
      <p>
        <strong>질문:</strong> "이것이 올바른가요?"
      </p>
      <p>테스트, 타입 검사, 품질 검사를 실행합니다.</p>
      <pre>
        <code>{`"현재 코드에 타입 오류가 있는지 확인해줘"
"테스트를 전부 실행하고 실패 항목을 알려줘"`}</code>
      </pre>

      <h2 id="execute">
        <code>execute</code> — 실행
      </h2>
      <p>
        <strong>질문:</strong> "무엇을 실행해야 하나요?"
      </p>
      <p>명령어 실행, 프로세스 시작, 빌드, 배포, 트리거 작업을 수행합니다.</p>
      <pre>
        <code>{`"프로덕션 빌드를 실행해줘"
"도커 컨테이너를 재시작해줘"`}</code>
      </pre>

      <h2 id="document">
        <code>document</code> — 문서화
      </h2>
      <p>
        <strong>질문:</strong> "이것을 어떻게 설명해야 하나요?"
      </p>
      <p>설명, 문서, 리포트를 생성합니다.</p>
      <pre>
        <code>{`"이 모듈의 JSDoc을 작성해줘"
"변경사항에 대한 커밋 메시지를 작성해줘"`}</code>
      </pre>

      <h2 id="plan">
        <code>plan</code> — 계획
      </h2>
      <p>
        <strong>질문:</strong> "실행 계획이 무엇인가요?"
      </p>
      <p>실행 순서와 작업 의존성을 정의합니다.</p>
      <pre>
        <code>{`"이 기능을 구현하는 단계별 계획을 세워줘"
"마이그레이션 작업 순서를 정리해줘"`}</code>
      </pre>

      <h2 id="type-impact">타입이 파이프라인에 미치는 영향</h2>
      <table>
        <thead>
          <tr>
            <th>타입</th>
            <th>컨텍스트 전략</th>
            <th>출력 처리</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>validate</code></td>
            <td>엄격한 압축</td>
            <td>통과/실패 요약</td>
          </tr>
          <tr>
            <td><code>create</code> / <code>modify</code></td>
            <td>상세 컨텍스트 유지</td>
            <td>파일 변경 문서 포함</td>
          </tr>
          <tr>
            <td><code>analyze</code></td>
            <td>포괄적인 탐색 결과</td>
            <td>원인 해석 중심 요약</td>
          </tr>
          <tr>
            <td><code>explore</code></td>
            <td>구조 정보 우선</td>
            <td>위치/경로 목록</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
