import { RadioItem, ItemIndicator } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import { Circle } from 'lucide-react';
import React from 'react';

/* eslint-disable-next-line */
export interface DropdownMenuRadioItemProps {}

const DropdownMenuRadioItem = React.forwardRef<
    React.ElementRef<typeof RadioItem>,
    React.ComponentPropsWithoutRef<typeof RadioItem>
>(({ className, children, ...props }, ref) => (
    <RadioItem
        ref={ref}
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700',
            className
        )}
        {...props}
    >
        <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
            <ItemIndicator>
                <Circle className='h-2 w-2 fill-current' />
            </ItemIndicator>
        </span>
        {children}
    </RadioItem>
));
DropdownMenuRadioItem.displayName = RadioItem.displayName;

export default DropdownMenuRadioItem;
