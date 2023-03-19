export const isCloudRunProd = process.env.NEXT_PUBLIC_PROJECT_TYPE === 'production';
export const isCloudRunDev = process.env.NEXT_PUBLIC_PROJECT_TYPE === 'development';
export const isCloudRun = isCloudRunDev || isCloudRunProd;
