/* eslint-disable-next-line */
export interface H2Props {}

export const H2: React.FC<H2Props> = ({ ...props }) => {
    return (
        <h2 className='mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700'>
            The People of the Kingdom
        </h2>
    );
};

export default H2;
