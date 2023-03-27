import { cn } from '@styles';
import { IconPointFilled } from '@tabler/icons-react';

/* eslint-disable-next-line */
export interface DotButtonProps {
    selected: boolean;
    onClick: () => void;
}

export const DotButton: React.FC<DotButtonProps> = ({ selected, onClick, ...props }) => {
    return (
        <button
            className={cn(
                'text-dimmed-500 m-0 my-3 flex cursor-pointer touch-manipulation appearance-none items-center border-0 bg-transparent p-0 no-underline after:w-full after:rounded after:content-none',
                selected ? 'text-black' : ''
            )}
            type='button'
            onClick={onClick}
        >
            <IconPointFilled />
        </button>
    );
};

export default DotButton;
