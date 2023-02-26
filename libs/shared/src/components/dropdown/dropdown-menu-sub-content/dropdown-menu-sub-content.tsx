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
            'animate-in slide-in-from-left-1 z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400',
            className
        )}
        {...props}
    />
));
DropdownMenuSubContent.displayName = SubContent.displayName;

export default DropdownMenuSubContent;
