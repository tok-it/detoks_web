export function QuickStart() {
  return (
    <>
      <h1>빠른 시작</h1>

      <h2 id="init">초기화</h2>
      <p>
        DeToks를 처음 사용할 때 <code>init</code> 명령어로 프로젝트를
        설정하세요:
      </p>
      <pre>
        <code>{`detoks init`}</code>
      </pre>
      <p>
        이 명령어는 현재 프로젝트를 분석하고 최적의 필터 설정을 자동으로
        구성합니다.
      </p>

      <h2 id="how-it-works">동작 방식</h2>
      <p>
        DeToks는 Claude Code와 함께 사용할 때 완전히 투명하게 동작합니다.
        평소처럼 Claude Code를 사용하기만 하면 됩니다. DeToks가 백그라운드에서
        명령어 출력을 자동으로 필터링합니다.
      </p>
      <p>
        예를 들어 Claude Code에서 <code>git status</code>를 실행하면:
      </p>
      <pre>
        <code>{`# 필터링 전 (원본 출력 — 32줄)
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update index)
  (use "git restore <file>..." to discard changes)
        modified:   src/App.tsx
        modified:   src/components/Header.tsx
        ...20줄 더...

# DeToks 필터링 후 (LLM이 받는 것 — 3줄)
브랜치: main (최신)
수정됨: src/App.tsx, src/components/Header.tsx`}</code>
      </pre>

      <h2 id="oneshot">One-shot 모드</h2>
      <p>단일 작업을 빠르게 실행할 때 사용하세요:</p>
      <pre>
        <code>{`detoks run "현재 브랜치의 변경 사항을 요약해줘"`}</code>
      </pre>
      <pre>
        <code>{`detoks run "package.json의 의존성을 최신 버전으로 업데이트해줘"`}</code>
      </pre>

      <h2 id="repl">REPL 모드</h2>
      <p>
        연속적인 작업이나 복잡한 구현에는 REPL 모드를 사용하세요. 세션 전체에
        걸쳐 컨텍스트가 유지됩니다:
      </p>
      <pre>
        <code>{`detoks repl`}</code>
      </pre>
      <pre>
        <code>{`DeToks REPL v1.0.0
컨텍스트 보존 모드 활성화
(종료: Ctrl+C 또는 'exit')

> 인증 미들웨어를 리팩토링해줘
> 방금 만든 미들웨어에 테스트도 추가해줘
> 변경사항을 커밋할 메시지 작성해줘`}</code>
      </pre>

      <h2 id="continue-session">세션 이어가기</h2>
      <p>이전 REPL 세션을 이어서 계속할 수 있습니다:</p>
      <pre>
        <code>{`detoks repl --continue`}</code>
      </pre>
      <p>
        특정 세션을 지정하려면 세션 ID를 사용하세요:
      </p>
      <pre>
        <code>{`detoks repl --session abc123`}</code>
      </pre>

      <h2 id="tips">팁</h2>
      <ul>
        <li>
          <strong>One-shot 모드</strong>는 단발성 질문이나 짧은 작업에 적합합니다
        </li>
        <li>
          <strong>REPL 모드</strong>는 여러 단계로 이루어진 구현 작업에
          적합합니다
        </li>
        <li>
          토큰 절감 통계는 <code>detoks stats</code>로 언제든 확인 가능합니다
        </li>
        <li>
          <code>detoks discover</code>로 프로젝트에 맞는 최적화 설정을 자동
          생성할 수 있습니다
        </li>
      </ul>
    </>
  );
}
