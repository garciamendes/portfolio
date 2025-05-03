export default {
  extends: [],
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [2, "always", "sentence-case"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "always", "."],
    "header-min-length": [2, "always", 20],
    "body-max-line-length": [2, "always", 72],
    "footer-max-line-length": [2, "always", 72],
  },
  plugins: [
    {
      rules: {
        "subject-case-start-capital": ({ raw }) => {
          const subject = raw.split(":")[1]?.trim() || "";
          return [
            /^[A-Z]/.test(subject),
            "Subject must start with a capital letter",
          ];
        },
      },
    },
  ],
};
