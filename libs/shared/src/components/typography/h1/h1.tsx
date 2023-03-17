/* eslint-disable-next-line */
export interface H1Props extends React.PropsWithChildren {}

export const H1: React.FC<H1Props> = ({ children, ...props }) => {
    return <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>{children}</h1>;
};

export default H1;
