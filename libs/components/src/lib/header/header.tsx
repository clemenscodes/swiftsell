import CartButton from '../cart-button/cart-button';
import ProfileButton from '../profile-button/profile-button';
import { Search } from '../search/search';
import { siteConfig } from '@config';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../navbar/navbar'));
const ModeToggle = dynamic(() => import('../mode-toggle/mode-toggle'));

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
    return (
        <header className='dark:bg-dimmed-900 dark:border-b-dimmed-700 sticky top-0 z-40 w-full border-b bg-white'>
            <div className='container flex h-20 max-h-full max-w-full items-center space-x-4 sm:justify-between sm:space-x-0'>
                <Navbar items={siteConfig.navbar} />
                <div className='flex flex-1 items-center justify-end space-x-4'>
                    <nav className='flex items-center space-x-4'>
                        <Search />
                        <CartButton />
                        <ProfileButton />
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
