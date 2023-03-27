import { cn } from '@styles';
import { IconChevronLeft } from '@tabler/icons-react';

export interface PreviousButtonProps {
    enabled: boolean;
    onClick: () => void;
}

export const PreviousButton: React.FC<PreviousButtonProps> = ({ enabled, onClick, ...props }) => {
    return (
        <button
            className={cn(
                'absolute top-2/4 left-2 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center disabled:cursor-default disabled:opacity-0 dark:text-black sm:left-4 md:left-6 md:h-16 md:w-16'
            )}
            onClick={onClick}
            disabled={!enabled}
        >
            <IconChevronLeft />
        </button>
    );
};

export default PreviousButton;
