import Image from 'next/image';
import usePrefix from '../../hooks/usePrefix';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
    const PREFIX = usePrefix();
    return (
        <Image
            alt='Logo'
            src={`${PREFIX}/img/default.png`}
            width={300}
            height={200}
        />
    );
}

export default Logo;
