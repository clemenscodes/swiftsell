/* eslint-disable-next-line */
export interface SubtleProps {}

export const Subtle: React.FC<SubtleProps> = ({ ...props }) => {
    return <p className='text-sm text-slate-500 dark:text-slate-400'>Enter your email address.</p>;
};

export default Subtle;
