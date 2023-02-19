const { fontFamily } = require('tailwindcss/defaultTheme');
/**
 * @type {import('tailwindcss').Config}
 */
const theme = {
    // edit your tailwind theme here!
    // https://tailwindcss.com/docs/adding-custom-styles
    //
    extend: {
        fontFamily: {
            sans: ['var(--font-sans)', ...fontFamily.sans],
        },
        keyframes: {
            'accordion-down': {
                from: { height: 0 },
                to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
                from: { height: 'var(--radix-accordion-content-height)' },
                to: { height: 0 },
            },
        },
        animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
        },
    },
};

module.exports = {
    theme,
};
