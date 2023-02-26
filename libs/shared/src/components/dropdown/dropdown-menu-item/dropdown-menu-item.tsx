import { Item } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import dynamic from 'next/dynamic';
import React from 'react';

/* eslint-disable-next-line */
export interface DropdownMenuItemProps {}

const DropdownItem = dynamic(() =>
    import('@radix-ui/react-dropdown-menu').then((mod) => mod.Item)
);

const DropdownMenuItem = React.forwardRef<
    React.ElementRef<typeof Item>,
    React.ComponentPropsWithoutRef<typeof Item> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <DropdownItem
        ref={ref}
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700',
            inset && 'pl-8',
            className
        )}
        {...props}
    />
));
DropdownMenuItem.displayName = DropdownItem.displayName;

export default DropdownMenuItem;
