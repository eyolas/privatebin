# Changelog

# [1.0.2](https://github.com/eyolas/privatebin/compare/v1.0.1...v1.0.2) - (2025-02-27)

## <!-- 1 -->🐛 Bug Fixes

- Ensure baseURL ends with a trailing slash and update fetch calls accordingly.
  fix #5
  ([fc476fe](https://github.com/eyolas/privatebin/commit/fc476fe5940478fbfc962e1e75993da62599f64b)) -
  (eyolas)

## <!-- 3 -->📚 Documentation

- Add installation instructions for Deno and pnpm in README.md
  ([9ba367e](https://github.com/eyolas/privatebin/commit/9ba367e265f18f8acf1dd7211764755ed5088519)) -
  (eyolas)

## <!-- 7 -->⚙️ Miscellaneous Tasks

- Deno fmt
  ([f3659c9](https://github.com/eyolas/privatebin/commit/f3659c9fb9b64972c0abb67f97d1113213a383bf)) -
  (eyolas)
- Update deno.lock to include @std/async@1.0.10
  ([c915d87](https://github.com/eyolas/privatebin/commit/c915d87e119565911470971ec4c8b4b71013ffea)) -
  (eyolas)
- Add MIT License file
  ([3f8f498](https://github.com/eyolas/privatebin/commit/3f8f498d7482d3e7e347a74e350daa0b49328cd3)) -
  (eyolas)

## <!-- 9 -->⬆️ Upgrades

- Upgraded from v1.0.0 -> v1.0.1
  ([#3](https://github.com/eyolas/privatebin/issues/3))

Co-authored-by: eyolas <1489456+eyolas@users.noreply.github.com>
([9f0ad13](https://github.com/eyolas/privatebin/commit/9f0ad13389d8e8f773ef554860972ae2fae60b2a)) -
(github-actions[bot])

# [1.0.1](https://github.com/eyolas/privatebin/compare/v1.0.0...v1.0.1) - (2024-12-27)

## <!-- 0 -->🚀 Features

- Update exports in deno.json to include privatebin and create_key modules
  ([a661a88](https://github.com/eyolas/privatebin/commit/a661a887af69e79ce88f2454394e0d56688de97d)) -
  (eyolas)

## <!-- 2 -->🚜 Refactor

- Rename and reorganize cryptographic modules; update types and add
  documentation
  ([7c49ee6](https://github.com/eyolas/privatebin/commit/7c49ee6c96eb34206ede84821cfbeae173737302)) -
  (eyolas)

## <!-- 9 -->⬆️ Upgrades

- Upgraded from v1.0.0 -> v1.0.0
  ([#2](https://github.com/eyolas/privatebin/issues/2))

Co-authored-by: eyolas <1489456+eyolas@users.noreply.github.com>
([cadc2db](https://github.com/eyolas/privatebin/commit/cadc2dba9ddf245a65ee01ae0ce7e718b5297723)) -
(github-actions[bot])

# [1.0.0](https://github.com/eyolas/privatebin/tree/v1.0.0) - (2024-12-20)

## <!-- 1 -->🐛 Bug Fixes

- Rename github folder
  ([91251c8](https://github.com/eyolas/privatebin/commit/91251c8d32a58238ddb98d9368803997e15d5083)) -
  (eyolas)
- Standardize string quotes and formatting in README example
  ([bb9021f](https://github.com/eyolas/privatebin/commit/bb9021fb8f8e49600a6a29d112add48c2407a87b)) -
  (eyolas)

## <!-- 2 -->🚜 Refactor

- Standardize test formatting and improve readability in mod_test.ts
  ([1c19549](https://github.com/eyolas/privatebin/commit/1c195493d63a48821d01476f63a9726b7f5207d6)) -
  (eyolas)
- Reorganize cryptographic utilities and rename files for clarity
  ([991f1ee](https://github.com/eyolas/privatebin/commit/991f1ee8e983a3e4af59e4be611ddf832c3404d4)) -
  (eyolas)

## <!-- 30 -->📝 Other

- First commit
  ([f7c6611](https://github.com/eyolas/privatebin/commit/f7c6611df57765a87bdb60e066453c10c5fa5588)) -
  (eyolas)

## <!-- 7 -->⚙️ Miscellaneous Tasks

- Add workflow_dispatch trigger to publish workflow
  ([c5cf0e8](https://github.com/eyolas/privatebin/commit/c5cf0e831f2efa074c4884e707585ce9e124fad4)) -
  (eyolas)
- Add Deno installation and formatting steps to release workflow
  ([b3ccc3a](https://github.com/eyolas/privatebin/commit/b3ccc3a268b3489f9fb9f29070c2e5b930d688d5)) -
  (eyolas)
- Update CI workflow to use 'main' branch instead of 'master'
  ([a9ebd0c](https://github.com/eyolas/privatebin/commit/a9ebd0c49f1dad64f6968ac44e3b7541f98b3629)) -
  (eyolas)
- Update CI workflows to ignore deno.json and add Deno installation and testing
  steps
  ([602216a](https://github.com/eyolas/privatebin/commit/602216acc494b1366aca2df73ce8c5d5a19b9c4a)) -
  (eyolas)
- [skip ci] bump version to 1.0.0 in deno.json
  ([50e9df3](https://github.com/eyolas/privatebin/commit/50e9df37f3504c128dc8d3b211aa7231086bb701)) -
  (eyolas)
- Add CI workflow for Deno testing on pull requests and pushes
  ([3b66dd8](https://github.com/eyolas/privatebin/commit/3b66dd82fd788e09b576432c817113730a8238a3)) -
  (eyolas)
- Update workflows for consistent formatting and cleanup
  ([82c3f56](https://github.com/eyolas/privatebin/commit/82c3f568cabeefe6c8014c60bb8656257b5ff370)) -
  (eyolas)
- Add .editorconfig for consistent coding styles
  ([0dd1a03](https://github.com/eyolas/privatebin/commit/0dd1a0343839fae9e424994a64ca2d4fb60e219b)) -
  (eyolas)
- Update permissions for release workflow
  ([062983d](https://github.com/eyolas/privatebin/commit/062983d38c75073720cc33d8d549ba478aae8d80)) -
  (eyolas)
- Add GitHub Actions workflow for publishing package on jsr
  ([8f0b345](https://github.com/eyolas/privatebin/commit/8f0b3459d652f0cd11307ff4b95e5b2f0fada56a)) -
  (eyolas)
- Add GitHub Actions workflow for automated release management
  ([96d4a3a](https://github.com/eyolas/privatebin/commit/96d4a3afb645200ea7ce88dfbfc4a9b667926b20)) -
  (eyolas)
- Update dependencies and add tests for PrivatebinClient functionality
  ([3e82d3a](https://github.com/eyolas/privatebin/commit/3e82d3a875288ff3c63d7e39ba74f01795877b3d)) -
  (eyolas)

<!-- generated by git-cliff -->
