/* eslint-disable */
export default {
    displayName: 'components',
    preset: '../../jest.preset.js',
    transform: {
        '^.+\\.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }],
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
