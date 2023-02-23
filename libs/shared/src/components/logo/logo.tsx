import Image from 'next/image';

/* eslint-disable-next-line */
export interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({ ...props }) => {
    const url = `/svg/default.svg`;
    return (
        <Image
            alt='Logo'
            src={url}
            width={200}
            height={200}
            priority={true}
            quality={100}
        />
    );
};

export default Logo;
