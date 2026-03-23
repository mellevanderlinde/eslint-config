import { antfu } from '@antfu/eslint-config'

export function defineConfig(): ReturnType<typeof antfu> {
  return antfu({
    rules: {
      'curly': 'error',
      'no-new': 'off',
      'perfectionist/sort-objects': 'error',
      'style/array-bracket-newline': ['error', 'consistent'],
      'style/array-element-newline': ['error', 'consistent'],
      'style/object-curly-newline': ['error'],
      'style/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      'test/padding-around-all': 'error',
      'ts/explicit-function-return-type': 'error',
      'ts/no-non-null-assertion': 'error',
      'unicorn/no-empty-file': 'error',
    },
    typescript: true,
  })
}

// TODO imports line spacing, export, class etc
