import { RouterContext } from 'next/dist/shared/lib/router-context';
import '../web/global.css';

export const parameters = {
    nextRouter: {
        Provider: RouterContext.Provider,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const globalTypes = {
    darkMode: true,
};
