import { cn } from '@styles';
import { IconChevronRight } from '@tabler/icons-react';

export interface NextButtonProps {
    enabled: boolean;
    onClick: () => void;
}

export const NextButton: React.FC<NextButtonProps> = ({ onClick, enabled, ...props }) => {
    return (
        <button
            className={cn(
                'absolute right-2 top-2/4 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center disabled:cursor-default disabled:opacity-0 dark:text-black sm:right-4 md:right-6 md:h-16 md:w-16'
            )}
            onClick={onClick}
            disabled={!enabled}
        >
            <IconChevronRight />
        </button>
    );
};

export default NextButton;
