import { Icons } from '../icons/icons';
import { siteConfig } from '@config';
import dynamic from 'next/dynamic';

const Link = dynamic(() => import('next/link'));

/* eslint-disable-next-line */
export interface LogoProps extends React.HTMLProps<HTMLDivElement> {}

export const Logo: React.FC<LogoProps> = ({ ...props }) => {
    return (
        <Link
            href='/'
            className='hidden h-14 items-center space-x-2 rounded-md bg-transparent p-6 pr-9 hover:bg-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent md:flex'
        >
            <Icons.Logo className='-ml-12 -mr-12 hidden sm:flex' />
            <span className='hidden text-3xl font-bold text-slate-900 dark:text-white sm:inline-block'>
                {siteConfig.name}
            </span>
        </Link>
    );
};

export default Logo;
