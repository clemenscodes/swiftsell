import { getPrefix } from '@utils';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
    return (
        <Image
            alt='Logo'
            src={`${getPrefix()}/img/default.png`}
            width={300}
            height={200}
        />
    );
}

export default Logo;
