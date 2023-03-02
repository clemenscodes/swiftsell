import env from '@beam-australia/react-env';

export const readRuntimeEnv: (key: string | undefined) => string | undefined = (
    key?: string
) => (key ? env(key) : env());

export const readBuildtimeEnv = (key: string) =>
    process.env[`NEXT_PUBLIC_${key}`];
