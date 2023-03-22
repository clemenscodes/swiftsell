import { Content, Portal } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import React from 'react';

/* eslint-disable-next-line */
export interface DropdownMenuContentProps {}

const DropdownMenuContent = React.forwardRef<
    React.ElementRef<typeof Content>,
    React.ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
    <Portal>
        <Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                'animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 00 dark:border-dimmed-800 dark:bg-dimmed-800 dark:text-dimmed-font z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-md',
                className
            )}
            {...props}
        />
    </Portal>
));
DropdownMenuContent.displayName = Content.displayName;

export default DropdownMenuContent;
