import type { StorybookConfig } from '@storybook/core-common';

export const rootMain: StorybookConfig = {
    core: {
        builder: 'webpack5',
        disableTelemetry: true,
    },
    stories: [],
    addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-controls'],
    // webpackFinal: async (config, { configType }) => {
    //   // Make whatever fine-grained changes you need that should apply to all storybook configs

    //   // Return the altered config
    //   return config;
    // },
};
