import { Content } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import dynamic from 'next/dynamic';
import React from 'react';

/* eslint-disable-next-line */
export interface DropdownMenuContentProps {}

const DropdownPortal = dynamic(() =>
    import('@radix-ui/react-dropdown-menu').then((mod) => mod.Portal)
);
const DropdownContent = dynamic(() =>
    import('@radix-ui/react-dropdown-menu').then((mod) => mod.Content)
);

const DropdownMenuContent = React.forwardRef<
    React.ElementRef<typeof Content>,
    React.ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownPortal>
        <DropdownContent
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                'animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400',
                className
            )}
            {...props}
        />
    </DropdownPortal>
));
DropdownMenuContent.displayName = DropdownContent.displayName;

export default DropdownMenuContent;
