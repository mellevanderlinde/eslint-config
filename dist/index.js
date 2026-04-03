import { antfu } from '@antfu/eslint-config';
export function defineConfig() {
    return antfu({
        ignores: ['**/_next/**', '**/cdk.out/**', '**/*.d.ts'],
        rules: {
            'curly': 'error',
            'no-else-return': 'error',
            'no-lonely-if': 'error',
            'no-negated-condition': 'error',
            'no-new': 'off',
            'no-unreachable': 'error',
            'no-useless-escape': 'error',
            'padding-line-between-statements': ['error', { blankLine: 'never', next: 'import', prev: 'import' }],
            'perfectionist/sort-objects': 'error',
            'pnpm/yaml-enforce-settings': 'off',
            'style/array-bracket-newline': ['error', 'consistent'],
            'style/array-element-newline': ['error', 'consistent'],
            'style/function-paren-newline': ['error', 'consistent'],
            'style/newline-per-chained-call': 'error',
            'style/object-curly-newline': 'error',
            'style/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            'test/padding-around-all': 'error',
            'ts/explicit-function-return-type': 'error',
            'ts/no-non-null-assertion': 'error',
            'ts/no-unnecessary-parameter-property-assignment': 'error',
            'ts/no-useless-empty-export': 'error',
            'unicorn/no-empty-file': 'error',
        },
        type: 'lib',
        typescript: {
            overrides: {
                'ts/no-unnecessary-condition': 'error',
                'ts/no-useless-constructor': 'error',
            },
            parserOptions: {
                projectService: true,
            },
        },
    });
}
