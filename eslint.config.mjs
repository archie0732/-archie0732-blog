// @ts-check
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    plugins: {
      'readable-tailwind': eslintPluginReadableTailwind,
    },
    rules: {
      ...eslintPluginReadableTailwind.configs.warning.rules,
      'readable-tailwind/multiline': ['warn', { group: 'newLine' }],
    },
  },
).override('nuxt/import/rules', {
  rules: {
    'import/order': ['warn', {
      'groups': [
        'builtin',
        'external',
        'internal',
        ['parent', 'sibling', 'index'],
        'unknown',
        'type',
      ],
      'newlines-between': 'always',
      'alphabetize': {
        order: 'asc',
      },
    }],
  },
});
