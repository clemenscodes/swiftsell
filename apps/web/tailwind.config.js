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
};
