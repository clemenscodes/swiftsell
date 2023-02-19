import { getAssetPrefix } from '@utils';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
    const url = getAssetPrefix();
    const logoUrl = `${url}/img/default.png`;
    return (
        <div>
            <Image src={logoUrl} alt='Logo' width={500} height={500} />
        </div>
    );
}

export default Logo;
