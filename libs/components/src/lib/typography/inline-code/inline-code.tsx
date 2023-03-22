/* eslint-disable-next-line */
export interface InlineCodeProps {}

export const InlineCode: React.FC<InlineCodeProps> = ({ ...props }) => {
    return (
        <code className='relative rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400'>
            @radix-ui/react-alert-dialog
        </code>
    );
};

export default InlineCode;
