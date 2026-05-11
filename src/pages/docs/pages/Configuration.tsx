export function Configuration() {
  return (
    <>
      <h1>설정</h1>

      <h2 id="overview">개요</h2>
      <p>
        DeToks의 모든 설정은 프로젝트 루트의 <code>.env</code> 파일을 통해
        환경 변수로 구성합니다.
      </p>

      <h2 id="local-llm-connection">로컬 LLM 연결 설정</h2>
      <pre>
        <code>{`LOCAL_LLM_API_BASE=http://localhost:12345/v1
LOCAL_LLM_API_KEY=example-local-llm-api-key
LOCAL_LLM_MODEL_NAME=example-model-name`}</code>
      </pre>

      <h2 id="local-llm-runtime">로컬 LLM 런타임 설정</h2>
      <pre>
        <code>{`LOCAL_LLM_AUTO_START=0
LOCAL_LLM_SERVER_BINARY=example-llama-server
LOCAL_LLM_SERVER_HOST=localhost
LOCAL_LLM_SERVER_PORT=12345
LOCAL_LLM_GPU_LAYERS=8
LOCAL_LLM_CONTEXT_SIZE=8192
LOCAL_LLM_TOP_K=20
LOCAL_LLM_TOP_P=0.9
LOCAL_LLM_SLEEP_IDLE_SECONDS=600
LOCAL_LLM_MAX_TOKENS=256
LOCAL_LLM_REASONING=off
LOCAL_LLM_STARTUP_TIMEOUT=300000`}</code>
      </pre>

      <h2 id="model-source">모델 소스 설정</h2>
      <p>Hugging Face 레포지토리에서 GGUF 모델을 자동으로 다운로드할 수 있습니다:</p>
      <pre>
        <code>{`LOCAL_LLM_HF_REPO=example-user/example-model-repo:main
LOCAL_LLM_HF_FILE=example-model.gguf
LOCAL_LLM_MODEL_PATH=   # 선택: 로컬 모델 경로 직접 지정
LOCAL_LLM_MODEL_URL=    # 선택: 모델 다운로드 URL`}</code>
      </pre>

      <h2 id="kompress">Kompress 설정</h2>
      <p>
        Kompress는 한국어 입력을 영어로 번역하는 내부 모델입니다. Python
        3.13.x 환경이 필요합니다.
      </p>
      <pre>
        <code>{`KOMPRESS_PYTHON_BIN=python3.11
KOMPRESS_MODEL_ID=example/kompress-model
KOMPRESS_STARTUP_TIMEOUT=60000`}</code>
      </pre>

      <h2 id="pipeline">파이프라인 튜닝</h2>
      <pre>
        <code>{`PIPELINE_MODE=debug          # debug | production
REQUEST_TIMEOUT=15000        # 요청 타임아웃 (밀리초)
TRANSLATION_MAX_ATTEMPTS=3   # 번역 재시도 최대 횟수
TEMPERATURE=0.7              # LLM 온도 값`}</code>
      </pre>

      <h2 id="options-reference">전체 옵션 참조</h2>
      <table>
        <thead>
          <tr>
            <th>변수</th>
            <th>기본값</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>LOCAL_LLM_AUTO_START</code></td>
            <td><code>0</code></td>
            <td>llama-server 자동 시작 여부</td>
          </tr>
          <tr>
            <td><code>LOCAL_LLM_GPU_LAYERS</code></td>
            <td><code>8</code></td>
            <td>GPU 레이어 수 (CPU fallback 지원)</td>
          </tr>
          <tr>
            <td><code>LOCAL_LLM_CONTEXT_SIZE</code></td>
            <td><code>8192</code></td>
            <td>컨텍스트 크기 (토큰)</td>
          </tr>
          <tr>
            <td><code>LOCAL_LLM_MAX_TOKENS</code></td>
            <td><code>256</code></td>
            <td>최대 출력 토큰 수</td>
          </tr>
          <tr>
            <td><code>LOCAL_LLM_SLEEP_IDLE_SECONDS</code></td>
            <td><code>600</code></td>
            <td>유휴 시 서버 언로드 대기 시간</td>
          </tr>
          <tr>
            <td><code>PIPELINE_MODE</code></td>
            <td><code>production</code></td>
            <td>파이프라인 실행 모드</td>
          </tr>
          <tr>
            <td><code>REQUEST_TIMEOUT</code></td>
            <td><code>15000</code></td>
            <td>요청 타임아웃 (밀리초)</td>
          </tr>
          <tr>
            <td><code>TRANSLATION_MAX_ATTEMPTS</code></td>
            <td><code>3</code></td>
            <td>번역 검증 재시도 횟수 (최대 5)</td>
          </tr>
          <tr>
            <td><code>TEMPERATURE</code></td>
            <td><code>0.7</code></td>
            <td>LLM 응답 다양성 조절</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
