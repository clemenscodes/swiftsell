import { cn } from '@styles';
import Header from '../header/header';
import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface LayoutProps extends PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
    return (
        <>
            <Header />
            <main className={cn([])}>{children}</main>
        </>
    );
};

export default Layout;
