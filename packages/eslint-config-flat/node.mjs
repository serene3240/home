import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';

/** @type {import("eslint").Linter.FlatConfig} */
export default [{
    files: ['**/*.{js,mjs,cjs,ts}'],
  }, {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
];