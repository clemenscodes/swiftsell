// import Image from 'next/image';
// import { useTheme } from 'next-themes';
// import { usePrefix } from '@hooks';
import Link from 'next/link';
import { Icons } from '../icons/icons';
import { siteConfig } from '@config';

/* eslint-disable-next-line */
export interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({ ...props }) => {
    // const { theme } = useTheme();
    // const { prefix } = usePrefix();
    // const defaultTheme = theme ? theme : 'dark';
    // const isDark = defaultTheme === 'dark';
    // const darkModeLogoUrl = 'svg/default-monochrome-white.svg';
    // const lightModeLogoUrl = 'svg/default-monochrome-black.svg';
    // const url = isDark ? darkModeLogoUrl : lightModeLogoUrl;
    return (
        <Link href='/' className='hidden items-center space-x-2 md:flex'>
            <Icons.Logo className='h-6 w-6' />
            <span className='hidden font-bold sm:inline-block'>
                {siteConfig.name}
            </span>
        </Link>
        // <Image
        //     alt='Logo'
        //     src={`${prefix}/${url}`}
        //     width={200}
        //     height={200}
        //     quality={100}
        // />
    );
};

export default Logo;
