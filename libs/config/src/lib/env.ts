import env from '@beam-australia/react-env';

const PREFIX = 'NEXT_PUBLIC';

export const readRuntimeEnv: (key: string | undefined) => string | undefined = (
    key?: string
) => (key ? env(`${PREFIX}_${key}`) : env());

export const readBuildtimeEnv = (key: string) => process.env[`${PREFIX}_{key}`];
