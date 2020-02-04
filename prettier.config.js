module.exports = {
    tabWidth: 4,
    arrowParens: 'always',
    trailingComma: 'all',
    proseWrap: 'always',
    singleQuote: true,
    overrides: [
        {
            files: '**/package.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
