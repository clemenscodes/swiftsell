import '@beam-australia/react-env';

declare module '@beam-australia/react-env' {
    export function env(key?: string): string | undefined;
    export = env;
}
