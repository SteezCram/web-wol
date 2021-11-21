module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        'brace-style': 0,
        'comma-dangle': 0,
        'eol-last': 0,
        'indent': 0,
        'no-trailing-spaces': 0,
        'no-multiple-empty-lines': 0,
        'no-useless-escape': 0,
        'object-shorthand': 0,
        'semi': 0,
        'space-before-function-paren': 0,
        'vue/max-attributes-per-line': 0,
        'vue/html-closing-bracket-spacing': 0,
        'vue/html-indent': 0,
    },
}
