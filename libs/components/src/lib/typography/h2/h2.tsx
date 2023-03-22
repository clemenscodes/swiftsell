/* eslint-disable-next-line */
export interface H2Props extends React.PropsWithChildren {}

export const H2: React.FC<H2Props> = ({ children, ...props }) => {
    return (
        <h2 className='dark:border-b-dimmed-700 m-2 scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0'>
            {children}
        </h2>
    );
};

export default H2;
