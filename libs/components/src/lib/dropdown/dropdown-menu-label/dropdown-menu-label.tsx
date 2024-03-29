import { Label } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import React from 'react';

/* eslint-disable-next-line */
export interface DropdownMenuLabelProps {}

const DropdownMenuLabel = React.forwardRef<
    React.ElementRef<typeof Label>,
    React.ComponentPropsWithoutRef<typeof Label> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <Label
        ref={ref}
        className={cn('dark:text-font-dimmed px-2 py-1.5 text-sm  font-semibold', inset && 'pl-8', className)}
        {...props}
    />
));
DropdownMenuLabel.displayName = Label.displayName;

export default DropdownMenuLabel;
