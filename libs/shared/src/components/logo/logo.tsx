import Image from 'next/image';
import { usePrefixStore } from '../../store/usePrefixStore';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
    const PREFIX = usePrefixStore((state) => state.prefix);
    const url = `${PREFIX}/svg/default.svg`;
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
}

export default Logo;
