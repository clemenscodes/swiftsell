import { SubContent } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import React from 'react';

/* eslint-disable-next-line */
export interface DropdownMenuSubContentProps {}

const DropdownMenuSubContent = React.forwardRef<
    React.ElementRef<typeof SubContent>,
    React.ComponentPropsWithoutRef<typeof SubContent>
>(({ className, ...props }, ref) => (
    <SubContent
        ref={ref}
        className={cn(
            'animate-in slide-in-from-left-1 dark:border-dimmed-800 dark:bg-dimmed-800 dark:text-dimmed-font z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 shadow-md',
            className
        )}
        {...props}
    />
));
DropdownMenuSubContent.displayName = SubContent.displayName;

export default DropdownMenuSubContent;
