import { cn } from '@styles';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
    'active:scale-95 inline-flex items-center justify-center rounded text-sm font-medium focus:outline-none focus:ring-0  focus:ring-dimmed-400 focus:ring-offset-2 dark:hover:bg-dimmed-800 disabled:opacity-50 dark:focus:ring-dimmed-400 disabled:pointer-events-none dark:focus:ring-offset-dimmed-900 data-[state=open]:bg-dimmed-100 dark:data-[state=open]:bg-dimmed-800',
    {
        variants: {
            variant: {
                default: 'bg-dimmed-900 text-white hover:bg-slate-100 dark:bg-dimmed-900 ',
                destructive: 'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
                outline: 'bg-transparent border border-dimmed-200 hover:bg-slate-100 dark:border-dimmed-700 ',
                subtle: 'bg-dimmed-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700',
                ghost: 'hover:bg-slate-100 dark:hover:bg-dimmed-800',
                link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-dimmed-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
            },
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-9 px-2 rounded-md',
                lg: 'h-11 px-8 rounded-md',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
