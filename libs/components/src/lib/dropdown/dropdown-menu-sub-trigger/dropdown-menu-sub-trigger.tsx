import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import { ChevronRight } from 'lucide-react';
import React from 'react';

const DropdownMenuSubtrigger = React.forwardRef<
    React.ElementRef<typeof SubTrigger>,
    React.ComponentPropsWithoutRef<typeof SubTrigger> & {
        inset?: boolean;
    }
>(({ className, inset, children, ...props }, ref) => (
    <SubTrigger
        ref={ref}
        className={cn(
            'dark:focus:bg-dimmed-700 dark:data-[state=open]:bg-dimmed-700 flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100',
            inset && 'pl-8',
            className
        )}
        {...props}
    >
        {children}
        <ChevronRight className='ml-auto h-4 w-4' />
    </SubTrigger>
));
DropdownMenuSubtrigger.displayName = SubTrigger.displayName;

export default DropdownMenuSubtrigger;
