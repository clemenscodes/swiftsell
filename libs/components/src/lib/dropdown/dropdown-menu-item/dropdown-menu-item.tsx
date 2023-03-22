import { Item } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import React from 'react';

/* eslint-disable-next-line */
export interface DropdownMenuItemProps {}

const DropdownMenuItem = React.forwardRef<
    React.ElementRef<typeof Item>,
    React.ComponentPropsWithoutRef<typeof Item> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <Item
        ref={ref}
        className={cn(
            'dark:focus:bg-dimmed-700 relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            inset && 'pl-8',
            className
        )}
        {...props}
    />
));
DropdownMenuItem.displayName = Item.displayName;

export default DropdownMenuItem;
