/* eslint-disable */
export default {
    displayName: 'db-web',
    preset: '../../../jest.preset.js',
    transform: {
        '^.+\\.[tj]sx?$': [
            '@swc/jest',
            { jsc: { transform: { react: { runtime: 'automatic' } } } },
        ],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
