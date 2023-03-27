/* eslint-disable-next-line */
export interface BannerProps {}

export const Banner: React.FC<BannerProps> = ({ ...props }) => {
    return (
        <div className='dark:to-dimmed-900 dark:from-dimmed-400 relative flex flex-col items-center bg-gradient-to-b from-slate-600 p-8'>
            <img src={'/img/products/applewatch/banner.png'} alt='Apple Watch Banner' width={500} height={500} />
        </div>
    );
};

export default Banner;
