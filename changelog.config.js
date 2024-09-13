module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['ci', 'deploy', 'docs', 'feat', 'fix', 'perf', 'refactor', 'setting', 'style', 'test'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: ['FE', 'BE', "DO"],
  types: {
    deploy: {
      description: '배포',
      emoji: '🤖',
      value: 'deploy'
    },
    ci: {
      description: 'CI 관련 변경',
      emoji: '🎡',
      value: 'ci'
    },
    docs: {
      description: '문서 추가 및 수정',
      emoji: '✏️',
      value: 'docs'
    },
    feat: {
      description: '기능 추가 및 수정',
      emoji: '🎸',
      value: 'feat'
    },
    fix: {
      description: '버그 수정',
      emoji: '🐛',
      value: 'fix'
    },
    setting: {
      description: '환경 설정',
      emoji: '🔧',
      value: 'setting'
    },
    perf: {
      description: '성능 변화를 목적으로 코드 추가 및 수정',
      emoji: '⚡️',
      value: 'perf'
    },
    refactor: {
      description: '코드 리팩토링',
      emoji: '💡',
      value: 'refactor'
    },
    style: {
      description: '주석, 프리티어 등 기능의 영향없이 코드의 모양새만 바뀌는 경우',
      emoji: '💄',
      value: 'style'
    },
    test: {
      description: '테스트 코드 추가 및 수정',
      emoji: '💍',
      value: 'test'
    },
    messages: {
      type: '커밋 타입: 소문자 영단어로 작성\n',
      customScope: 'FE (클라이언트 관련 작업), BE (서버 관련 작업), DO (DevOps 관련 작업) 중 관련된 작업으로 작성\n',
      subject: '명령형으로 작성, 마침표로 끝나지 않음 커밋과 관련된 이슈 번호 작성\n',
      body: '커밋에 대한 내용 작성\n ',
      breaking: 'List any breaking changes:\n',
      footer: 'Issues this commit closes, e.g #123:',
      confirmCommit: 'The packages that this commit has affected\n',
    },
  }
};