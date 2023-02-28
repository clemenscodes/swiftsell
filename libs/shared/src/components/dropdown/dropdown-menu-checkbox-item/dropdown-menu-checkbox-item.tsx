import { Icons } from '../../icons/icons';
import { CheckboxItem, ItemIndicator } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import React from 'react';

/* eslint-disable-next-line */
export interface DropdownMenuCheckboxItemProps {}

const DropdownMenuCheckboxItem = React.forwardRef<
    React.ElementRef<typeof CheckboxItem>,
    React.ComponentPropsWithoutRef<typeof CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
    <CheckboxItem
        ref={ref}
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700',
            className
        )}
        checked={checked}
        {...props}
    >
        <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
            <ItemIndicator>
                <Icons.Logo className='h-4 w-4' />
            </ItemIndicator>
        </span>
        {children}
    </CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = CheckboxItem.displayName;

export default DropdownMenuCheckboxItem;
