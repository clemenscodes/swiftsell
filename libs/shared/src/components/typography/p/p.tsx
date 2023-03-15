import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface PProps extends PropsWithChildren {}

export const P: React.FC<PProps> = ({ children, ...props }) => {
    return <p className='leading-7 [&:not(:first-child)]:mt-1'>{children}</p>;
};

export default P;
