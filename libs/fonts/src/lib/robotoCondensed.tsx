import { Roboto_Condensed } from '@next/font/google';

const robotoCondensed = Roboto_Condensed({
    weight: '300',
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

/* eslint-disable-next-line */
export interface FontsProps extends React.PropsWithChildren {}

export function RobotoCondensed({ children }: FontsProps) {
    return (
        <main className={`${robotoCondensed.variable} font-sans`}>
            {children}
        </main>
    );
}

export default RobotoCondensed;
