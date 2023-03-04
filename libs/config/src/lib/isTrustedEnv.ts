import { isCloudRun } from './isCloudRun';

export const isCI =
    process.env.CI !== undefined || process.env.NEXT_PUBLIC_CI !== undefined;
export const isTrustedEnv = isCloudRun || isCI;
