module.exports = {
  root: true,
  env: {
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vuetify/recommended',
    'plugin:jest/recommended',
    'plugin:vue/vue3-recommended',
    'standard'
  ],
  rules: {
    'vue/first-attribute-linebreak': 'off',
    'vue/multi-word-component-names': 'off',
    'eol-last': 'off',
    'no-unused-vars': 'warn',
    'comma-dangle': 'warn',
    'vue/no-unused-components': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-multi-spaces': 'warn',
    'semi': 'warn',
    'space-before-function-paren': 'warn',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/this-in-template': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'padded-blocks': 'off',
    'no-trailing-spaces': 'off',
    'jest/expect-expect': 'off',
    'jest/no-standalone-expect': [
      'error',
      { 'additionalTestBlockFunctions': ['beforeEach'] }
    ],
    'spaced-comment': 'off',

    // I don't think we can enable this rule until we actually move to Vue 3 because the replacement of the
    // .sync modifier with v-model:propName in Vue 3 doesn't work in Vue 2
    'vue/no-deprecated-v-bind-sync': 'off'
  },
  plugins: [
    'jest'
  ],
  globals: {
    clientBuildTimestamp: 'readonly',
    clientBuildGitHash: 'readonly'
  }
}
