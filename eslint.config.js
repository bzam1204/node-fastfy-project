import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: { globals: globals.browser },
        plugins: {
            import: importPlugin,
        },
        rules: {
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin', // Node.js built-ins
                        'external', // External packages like 'globals' and '@eslint/js'
                        'internal', // Internal modules, if applicable
                        'parent', // Parent imports like '../module'
                        'sibling', // Sibling imports like './module'
                        'index', // Index imports like './'
                    ],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
        },
    },
    pluginJs.configs.recommended,
];
