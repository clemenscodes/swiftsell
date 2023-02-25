import Navbar from '../navbar/navbar';
import ModeToggle from '../mode-toggle/mode-toggle';
import { siteConfig } from '@config';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
    return (
        <header className='sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900'>
            <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 max-w-full max-h-full'>
                <Navbar items={siteConfig.navbar} />
                <div className='flex flex-1 items-center justify-end space-x-4'>
                    <nav className='flex items-center space-x-1'>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
