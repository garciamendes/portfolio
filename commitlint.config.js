export default {
  extends: [],
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'body-max-line-length': [2, 'always', 100],
  },
  plugins: [
    {
      rules: {
        'subject-case-start-capital': ({ raw }) => {
          const subject = raw.split(':')[1]?.trim() || ''
          return [
            /^[A-Z]/.test(subject),
            'Subject must start with a capital letter',
          ]
        },
      },
    },
  ],
}
