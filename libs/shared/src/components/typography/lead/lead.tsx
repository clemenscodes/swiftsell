import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface LeadProps extends PropsWithChildren {}

export const Lead: React.FC<LeadProps> = ({ children, ...props }) => {
    return (
        <p className='text-xl text-slate-700 dark:text-slate-400'>{children}</p>
    );
};

export default Lead;
