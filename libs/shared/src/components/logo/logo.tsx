import Link from 'next/link';
import { Icons } from '../icons/icons';
import { siteConfig } from '@config';

/* eslint-disable-next-line */
export interface LogoProps extends React.HTMLProps<HTMLDivElement> {}

export const Logo: React.FC<LogoProps> = ({ ...props }) => {
    return (
        <Link
            href='/'
            className='hidden rounded-md h-14 p-6 pr-9 items-center space-x-2 sm:flex bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent'
        >
            <Icons.Logo className='hidden sm:flex -ml-12 -mr-12' />
            <span className='hidden font-bold sm:inline-block text-2xl text-slate-900 dark:text-white'>
                {siteConfig.name}
            </span>
        </Link>
    );
};

export default Logo;
