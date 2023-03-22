const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const baseConfig = require('../../tailwind-workspace-preset.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [baseConfig],
    content: [
        join(__dirname, 'pages/**/*!(*.stories|*.spec).{ts,tsx,html}'),
        join(__dirname, '../../libs/**/*!(*.stories|*.spec).{ts,tsx,html}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {
            colors: {
                dimmed: {
                    font: '#adbac7',
                    muted: '#768390',
                    100: '#adbac7',
                    200: '#909dab',
                    300: '#768390',
                    400: '#636e7b',
                    500: '#545d68',
                    600: '#444c56',
                    700: '#373e47',
                    800: '#2d333b',
                    900: '#22272e',
                },
            },
        },
    },
};
