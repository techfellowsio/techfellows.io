module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["standard-with-typescript", "plugin:vue/vue3-essential", "prettier"],
    overrides: [{
        env: {
            browser: true,
        },
        files: [".eslintrc.{js,cjs}"],
        parserOptions: {
            "sourceType": "script"
        }
    }, {
        files: ['*.ts', '*.tsx'], // Your TypeScript files extension
        // As mentioned in the comments, you should extend TypeScript plugins here,
        // instead of extending them outside the `overrides`.
        // If you don't want to extend any rules, you don't need an `extends` attribute.
        extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking',],
    }],
    parser: '@typescript-eslint/parser', // Specifies ESLint parser
    parserOptions: {
        project: './server/tsconfig.json', // Specify it here
        sourceType: 'module', // Allows for the use of imports
    },
    plugins: ["vue"],
    rules: {
        "@typescript-eslint/dot-notation": "error"
    }
}
