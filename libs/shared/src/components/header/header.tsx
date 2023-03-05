import { Button } from '../button/button';
import { siteConfig } from '@config';
import { AuthUserContext } from 'next-firebase-auth';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Navbar = dynamic(() => import('../navbar/navbar'));
const ModeToggle = dynamic(() => import('../mode-toggle/mode-toggle'));

/* eslint-disable-next-line */
export interface HeaderProps {
    user: AuthUserContext;
}

export const Header: React.FC<HeaderProps> = ({ user, ...props }) => {
    return (
        <header className='sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900'>
            <div className='container flex h-16 max-h-full max-w-full items-center space-x-4 sm:justify-between sm:space-x-0'>
                <Navbar items={siteConfig.navbar} />
                <div className='flex flex-1 items-center justify-end space-x-4'>
                    <nav className='flex items-center space-x-1'>
                        <ModeToggle />
                        <div>
                            {user.email ? (
                                <>
                                    <p>Signed in as {user.email}</p>
                                    <div>
                                        <Button
                                            onClick={() => {
                                                user.signOut();
                                            }}
                                        >
                                            Sign out
                                        </Button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p>You are not signed in.</p>
                                    <div>
                                        <Link href='/auth'>
                                            <Button>Sign in</Button>
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
