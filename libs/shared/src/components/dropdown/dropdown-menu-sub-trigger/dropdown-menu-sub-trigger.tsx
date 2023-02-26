import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import { ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import React from 'react';

const DropdownSubtrigger = dynamic(() =>
    import('@radix-ui/react-dropdown-menu').then((mod) => mod.SubTrigger)
);

const DropdownMenuSubtrigger = React.forwardRef<
    React.ElementRef<typeof SubTrigger>,
    React.ComponentPropsWithoutRef<typeof SubTrigger> & {
        inset?: boolean;
    }
>(({ className, inset, children, ...props }, ref) => (
    <DropdownSubtrigger
        ref={ref}
        className={cn(
            'flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-700 dark:data-[state=open]:bg-slate-700',
            inset && 'pl-8',
            className
        )}
        {...props}
    >
        {children}
        <ChevronRight className='ml-auto h-4 w-4' />
    </DropdownSubtrigger>
));
DropdownMenuSubtrigger.displayName = SubTrigger.displayName;

export default DropdownMenuSubtrigger;
