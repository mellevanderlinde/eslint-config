import { antfu } from '@antfu/eslint-config'

export function defineConfig(): ReturnType<typeof antfu> {
  return antfu({
    rules: {
      'curly': 'error',
      'no-new': 'off',
      'perfectionist/sort-objects': 'error',
      'style/array-bracket-newline': ['error', 'consistent'],
      'style/array-element-newline': ['error', 'consistent'],
      'test/padding-around-all': 'error',
      'ts/explicit-function-return-type': 'error',
      'unicorn/no-empty-file': 'error',
    },
    typescript: true,
  })
}
