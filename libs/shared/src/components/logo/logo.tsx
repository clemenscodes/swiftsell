import Image from 'next/image';
import { usePrefixStore } from '../../store/usePrefixStore';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
    const PREFIX = usePrefixStore((state) => state.prefix);
    const url = `${PREFIX}/img/default.png`;
    console.log('logo', { PREFIX });
    return (
        <Image
            alt='Logo'
            loader={() => url}
            src={url}
            width={300}
            height={200}
        />
    );
}

export default Logo;
