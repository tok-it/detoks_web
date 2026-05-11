export function Telemetry() {
  return (
    <>
      <h1>텔레메트리와 개인정보</h1>

      <h2 id="what-we-collect">수집하는 데이터</h2>
      <p>
        DeToks는 서비스 개선을 위해 최소한의 익명 사용 데이터를 수집합니다.
        수집되는 모든 데이터는 개인을 특정할 수 없으며 집계된 형태로만
        처리됩니다.
      </p>
      <ul>
        <li>명령어 타입 (git, npm 등 — 명령어 내용은 수집하지 않음)</li>
        <li>토큰 절감 통계 (집계 수치만)</li>
        <li>오류 발생 유형 (오류 메시지 내용은 수집하지 않음)</li>
        <li>DeToks 버전 및 운영체제 종류</li>
        <li>세션 길이 (명령어 내용은 수집하지 않음)</li>
      </ul>

      <h2 id="what-we-dont-collect">수집하지 않는 데이터</h2>
      <p>
        다음 데이터는 절대 수집하지 않습니다:
      </p>
      <ul>
        <li>실제 명령어 내용 또는 인자</li>
        <li>파일 경로 또는 파일명</li>
        <li>코드 내용 또는 출력 텍스트</li>
        <li>IP 주소 또는 위치 정보</li>
        <li>이름, 이메일 등 개인 식별 정보</li>
        <li>Claude에게 전달되는 프롬프트 내용</li>
      </ul>

      <h2 id="disable-telemetry">텔레메트리 비활성화</h2>
      <p>
        텔레메트리는 언제든지 비활성화할 수 있습니다. 기능에는 아무런 영향이
        없습니다.
      </p>

      <h3 id="disable-env">환경 변수로 비활성화</h3>
      <pre>
        <code>{`export DETOKS_NO_TELEMETRY=1`}</code>
      </pre>
      <p>
        영구적으로 비활성화하려면 쉘 프로파일에 추가하세요 (
        <code>~/.zshrc</code>, <code>~/.bashrc</code> 등):
      </p>
      <pre>
        <code>{`echo 'export DETOKS_NO_TELEMETRY=1' >> ~/.zshrc`}</code>
      </pre>

      <h3 id="disable-config">.detoksrc로 비활성화</h3>
      <pre>
        <code>{`{
  "telemetry": false
}`}</code>
      </pre>

      <h2 id="data-retention">데이터 보관 정책</h2>
      <p>
        수집된 데이터는 <strong>90일</strong> 후 자동으로 완전 삭제됩니다.
        그 이전에도 GitHub Issues를 통해 데이터 삭제를 요청할 수 있습니다.
      </p>

      <h2 id="open-source">오픈소스 투명성</h2>
      <p>
        DeToks는 오픈소스입니다. 텔레메트리 수집 코드를 포함한 모든 소스
        코드를{" "}
        <a
          href="https://github.com/tok-it/detoks"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub에서 직접 확인
        </a>
        할 수 있습니다.
      </p>

      <h2 id="contact">문의</h2>
      <p>개인정보 관련 문의 사항이 있으시면 아래 이메일로 연락해주세요:</p>
      <p>
        <a href="mailto:privacy@tok-it.dev">privacy@tok-it.dev</a>
      </p>
    </>
  );
}
