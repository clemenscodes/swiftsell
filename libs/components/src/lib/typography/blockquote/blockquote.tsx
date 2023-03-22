import { cn } from '@styles';

/* eslint-disable-next-line */
export interface BlockquoteProps {}

export const Blockquote: React.FC<BlockquoteProps> = ({ ...props }) => {
    return (
        <blockquote
            className={cn([
                'mt-6',
                'border-l-2',
                'border-slate-300',
                'pl-6',
                'italic',
                'bg-red',
                'text-slate-800',
                'dark:border-slate-600',
                'dark:text-slate-200',
            ])}
        >
            "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the
            privilege."
        </blockquote>
    );
};

export default Blockquote;
