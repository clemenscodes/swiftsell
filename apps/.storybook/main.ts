import { rootMain } from '../../.storybook/main';
import type { StorybookConfig, Options } from '@storybook/core-common';
import path from 'path';

const config: StorybookConfig = {
    ...rootMain,
    core: { ...rootMain.core, builder: 'webpack5' },
    stories: [
        ...rootMain.stories,
        '../../libs/shared/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    staticDirs: ['../web/public'],
    addons: [
        ...(rootMain.addons || []),
        '@nrwl/react/plugins/storybook',
        'storybook-addon-swc',
        'storybook-tailwind-dark-mode',
        {
            name: 'storybook-addon-next',
            options: {
                nextConfigPath: path.resolve(
                    __dirname,
                    '../web/next.config.js'
                ),
            },
        },
    ],
    webpackFinal: async (config, { configType }: Options) => {
        if (rootMain.webpackFinal) {
            config = await rootMain.webpackFinal(config, {
                configType,
            } as Options);
        }
        return config;
    },
};

module.exports = config;
