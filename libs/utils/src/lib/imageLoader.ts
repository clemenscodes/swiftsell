import { type ImageLoader } from 'next/dist/client/image';

const normalizeLeading = (src: string): string => (src[0] === '/' ? src.slice(1) : src);
const normalizeTrailing = (src: string): string =>
    src[src.length - 1] === '/' ? src.substring(0, src.length - 1) : src;

export const imageLoader: ImageLoader = ({ src, width, quality }) => {
    const normalizedSrc = normalizeLeading(src);
    const params = [`w-${width}`];
    if (quality) {
        params.push(`q-${quality}`);
    }
    const paramsString = params.join(',');
    const urlEndpoint = normalizeTrailing(
        (process.env.NEXT_PUBLIC_IMAGE_KIT_URL_ENDPOINT as string) ?? 'http://localhost:3000'
    );
    if (!urlEndpoint.includes('https://ik.imagekit.io')) {
        return `${src}/?tr=${paramsString}`;
    }
    return `${urlEndpoint}/${normalizedSrc}?tr=${paramsString}`;
};
