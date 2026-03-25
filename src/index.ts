import { antfu } from '@antfu/eslint-config'

export function defineConfig(): ReturnType<typeof antfu> {
  return antfu({
    ignores: ['**/_next/**', '**/cdk.out/**'],
    rules: {
      'curly': 'error',
      'no-else-return': 'error',
      'no-lonely-if': 'error',
      'no-new': 'off',
      'padding-line-between-statements': ['error', { blankLine: 'never', next: 'import', prev: 'import' }],
      'perfectionist/sort-objects': 'error',
      'pnpm/yaml-enforce-settings': 'off',
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

// TODO releases of versions, ci.yml
