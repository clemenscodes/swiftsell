export const error = (...args: unknown[]) => {
    if (process.env['NODE_ENV'] !== 'production') {
        console.error(...args);
    }
};
