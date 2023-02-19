const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require('../../tailwind-workspace-preset.js')],
    content: [
        join(__dirname, 'pages/**/*!(*.stories|*.spec).{ts,tsx,html}'),
        join(__dirname, '../../libs/**/*!(*.stories|*.spec).{ts,tsx,html}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
};
