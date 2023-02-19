import path from 'path';
import { rootMain } from '../../.storybook/main';
import type { StorybookConfig, Options } from '@storybook/core-common';

const config: StorybookConfig = {
    ...rootMain,
    core: { ...rootMain.core, builder: 'webpack5' },
    stories: [
        ...rootMain.stories,
        '../web/stories/**/*.stories.?(ts|tsx|js|jsx)',
        '../../libs/shared/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    staticDirs: ['../web/public'],
    addons: [
        ...(rootMain.addons || []),
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-controls',
        '@nrwl/react/plugins/storybook',
        'storybook-addon-swc',
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
