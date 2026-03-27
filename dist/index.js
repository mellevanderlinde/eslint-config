"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineConfig = defineConfig;
const eslint_config_1 = require("@antfu/eslint-config");
function defineConfig() {
    return (0, eslint_config_1.antfu)({
        ignores: ['**/_next/**', '**/cdk.out/**', '**/*.d.ts'],
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
            'style/function-paren-newline': ['error', 'consistent'],
            'style/newline-per-chained-call': ['error'],
            'style/object-curly-newline': ['error'],
            'style/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            'test/padding-around-all': 'error',
            'ts/explicit-function-return-type': 'error',
            'ts/no-non-null-assertion': 'error',
            'unicorn/no-empty-file': 'error',
        },
        typescript: true,
    });
}
