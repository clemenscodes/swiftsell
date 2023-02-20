import Image from 'next/image';
import { usePrefixStore } from '../../store/usePrefixStore';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
    const PREFIX = usePrefixStore((state) => state.prefix);
    console.log(PREFIX)
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
