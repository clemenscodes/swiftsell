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
            className='dark:hover:bg-dimmed-800 dark:hover:text-dimmed-100 dark:text-dimmed-font hidden h-14 items-center space-x-2 rounded-md bg-transparent p-6 pr-9 hover:bg-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent md:flex'
        >
            <Icons.Logo className='-ml-12 -mr-12 hidden sm:flex' />
            <span className='dark:text-dimmed-font hidden text-3xl font-bold sm:inline-block'>{siteConfig.name}</span>
        </Link>
    );
};

export default Logo;
