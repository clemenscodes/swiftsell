import { Label } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import dynamic from 'next/dynamic';
import React from 'react';

/* eslint-disable-next-line */
export interface DropdownMenuLabelProps {}

const DropdownLabel = dynamic(() =>
    import('@radix-ui/react-dropdown-menu').then((mod) => mod.Label)
);

const DropdownMenuLabel = React.forwardRef<
    React.ElementRef<typeof Label>,
    React.ComponentPropsWithoutRef<typeof Label> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <DropdownLabel
        ref={ref}
        className={cn(
            'px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-300',
            inset && 'pl-8',
            className
        )}
        {...props}
    />
));
DropdownMenuLabel.displayName = DropdownLabel.displayName;

export default DropdownMenuLabel;
