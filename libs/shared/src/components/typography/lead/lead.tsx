/* eslint-disable-next-line */
export interface LeadProps {}

export const Lead: React.FC<LeadProps> = ({ ...props }) => {
    return (
        <p className='text-xl text-slate-700 dark:text-slate-400'>
            A modal dialog that interrupts the user with important content and
            expects a response.
        </p>
    );
};

export default Lead;
