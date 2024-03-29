import { Separator } from '@radix-ui/react-dropdown-menu';
import { cn } from '@styles';
import React from 'react';

/* eslint-disable-next-line */
export interface DropdownMenuSeparatorProps {}

const DropdownMenuSeparator = React.forwardRef<
    React.ElementRef<typeof Separator>,
    React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
    <Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700', className)} {...props} />
));
DropdownMenuSeparator.displayName = Separator.displayName;

export default DropdownMenuSeparator;
