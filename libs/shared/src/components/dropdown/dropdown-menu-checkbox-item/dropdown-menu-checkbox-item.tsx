import { CheckboxItem } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import { Check } from 'lucide-react';
import dynamic from 'next/dynamic';
import * as React from 'react';

/* eslint-disable-next-line */
export interface DropdownMenuCheckboxItemProps {}

const DropdownCheckboxItem = dynamic(() =>
    import('@radix-ui/react-dropdown-menu').then((mod) => mod.CheckboxItem)
);

const DropdownItemIndicator = dynamic(() =>
    import('@radix-ui/react-dropdown-menu').then((mod) => mod.ItemIndicator)
);

const DropdownMenuCheckboxItem = React.forwardRef<
    React.ElementRef<typeof CheckboxItem>,
    React.ComponentPropsWithoutRef<typeof CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
    <DropdownCheckboxItem
        ref={ref}
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700',
            className
        )}
        checked={checked}
        {...props}
    >
        <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
            <DropdownItemIndicator>
                <Check className='h-4 w-4' />
            </DropdownItemIndicator>
        </span>
        {children}
    </DropdownCheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownCheckboxItem.displayName;

export default DropdownMenuCheckboxItem;
