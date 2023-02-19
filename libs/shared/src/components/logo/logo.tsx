import { getAssetPrefix } from '@utils';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
    const url = getAssetPrefix();
    return (
        <Image
            alt='Logo'
            src={`${url}/img/default.png`}
            width={300}
            height={200}
        />
    );
}

export default Logo;
