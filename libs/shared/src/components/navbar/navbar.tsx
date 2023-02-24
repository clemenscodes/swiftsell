import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../logo/logo';
import  env from '@beam-australia/react-env';

/* eslint-disable-next-line */
export interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({ ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-white shadow'>
            <div>
                <pre>{JSON.stringify(env(), null, 2)}</pre>
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                    <div className='flex-shrink-0 flex items-center'>
                        <Link href='/' className='flex items-start'>
                            <Logo />
                        </Link>
                    </div>
                    <div className='-mr-2 flex items-center md:hidden'>
                        <button
                            type='button'
                            className='bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                            onClick={toggleNavbar}
                        >
                            <span className='sr-only'>Open main menu</span>
                            <svg
                                className={`${
                                    isOpen ? 'hidden' : 'block'
                                } h-6 w-6`}
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                            <svg
                                className={`${
                                    isOpen ? 'block' : 'hidden'
                                } h-6 w-6`}
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                    </div>
                    <div className='hidden md:flex md:items-center md:justify-end'>
                        <div className='flex items-center'>
                            <Link
                                href='/'
                                className={`px-3 py-2 rounded-md text-sm font-medium ${
                                    router.pathname === '/'
                                        ? 'text-gray-900 bg-gray-100'
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                                aria-current={
                                    router.pathname === '/' ? 'page' : undefined
                                }
                            >
                                Home
                            </Link>
                            <Link
                                href='/about'
                                className={`ml-4 px-3 py-2 rounded-md text-sm font-medium ${
                                    router.pathname === '/about'
                                        ? 'text-gray-900 bg-gray-100'
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                                aria-current={
                                    router.pathname === '/about'
                                        ? 'page'
                                        : undefined
                                }
                            >
                                About
                            </Link>
                            <Link
                                href='/contact'
                                className={`ml-4 px-3 py-2 rounded-md text-sm font-medium ${
                                    router.pathname === '/contact'
                                        ? 'text-gray-900 bg-gray-100'
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                                aria-current={
                                    router.pathname === '/contact'
                                        ? 'page'
                                        : undefined
                                }
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                    <Link
                        href='/'
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                            router.pathname === '/'
                                ? 'text-gray-900 bg-gray-100'
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                        aria-current={
                            router.pathname === '/' ? 'page' : undefined
                        }
                    >
                        Home
                    </Link>
                    <Link
                        href='/about'
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                            router.pathname === '/about'
                                ? 'text-gray-900 bg-gray-100'
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                        aria-current={
                            router.pathname === '/about' ? 'page' : undefined
                        }
                    >
                        About
                    </Link>
                    <Link
                        href='/contact'
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                            router.pathname === '/contact'
                                ? 'text-gray-900 bg-gray-100'
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                        aria-current={
                            router.pathname === '/contact' ? 'page' : undefined
                        }
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
