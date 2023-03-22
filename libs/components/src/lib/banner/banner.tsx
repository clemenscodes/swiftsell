import Image from 'next/image';

// import BannerImg from '/img/banner.jpg'
/* eslint-disable-next-line */
export interface BannerProps {}

export const Banner: React.FC<BannerProps> = ({ ...props }) => {
    return (
        <div className='relative h-screen max-h-96 w-screen max-w-full'>
            <Image className='object-cover' src={'/img/banner.jpg'} fill={true} alt='Banner image' priority={true} />
        </div>
    );
};

export default Banner;
