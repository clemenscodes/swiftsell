import Image from 'next/image';
import { useTheme } from 'next-themes';
import { usePrefixStore } from '@redux';

/* eslint-disable-next-line */
export interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({ ...props }) => {
    const { theme } = useTheme();
    const { prefix } = usePrefixStore.getState();
    const isDark = theme === 'dark';

    const url = isDark
        ? `svg/default-monochrome-white.svg`
        : `svg/default-monochrome-black.svg`;

    return (
        <Image
            alt='Logo'
            src={`${prefix}/${url}`}
            width={200}
            height={200}
            priority={true}
            quality={100}
        />
    );
};

export default Logo;
