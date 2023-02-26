import { RadioItem } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import { Circle } from 'lucide-react';
import dynamic from 'next/dynamic';
import React from 'react';

/* eslint-disable-next-line */
export interface DropdownMenuRadioItemProps {}

const DropdownItemIndicator = dynamic(() =>
    import('@radix-ui/react-dropdown-menu').then((mod) => mod.ItemIndicator)
);

const DropdownRadioItem = dynamic(() =>
    import('@radix-ui/react-dropdown-menu').then((mod) => mod.RadioItem)
);

const DropdownMenuRadioItem = React.forwardRef<
    React.ElementRef<typeof RadioItem>,
    React.ComponentPropsWithoutRef<typeof RadioItem>
>(({ className, children, ...props }, ref) => (
    <DropdownRadioItem
        ref={ref}
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700',
            className
        )}
        {...props}
    >
        <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
            <DropdownItemIndicator>
                <Circle className='h-2 w-2 fill-current' />
            </DropdownItemIndicator>
        </span>
        {children}
    </DropdownRadioItem>
));
DropdownMenuRadioItem.displayName = DropdownRadioItem.displayName;

export default DropdownMenuRadioItem;
