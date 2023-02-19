const { theme } = require('./libs/shared/src/styles/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        ...theme,
    },
    darkMode: ['class', '[data-theme="dark"]'],
    plugins: [require('tailwindcss-animate')],
};
