import { antfu } from '@antfu/eslint-config'

export function defineConfig(): ReturnType<typeof antfu> {
  return antfu({
    rules: {
      'curly': 'error',
      'no-new': 'off',
      'perfectionist/sort-objects': 'error',
      'ts/explicit-function-return-type': 'error',
      'unicorn/no-empty-file': 'error',
    },
    typescript: true,
  })
}
