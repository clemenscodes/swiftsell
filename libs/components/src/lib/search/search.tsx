'use client';

import { Button } from '../button/button';
import { CommandDialog, CommandEmpty, CommandInput, CommandList, CommandItem } from './../command/command';
import { cn } from '@styles';
import { CommandGroup } from 'cmdk';
import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchProps {}
export const Search: React.FC<SearchProps> = ({ ...props }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    return (
        <>
            <Button
                variant='outline'
                className={cn('dark:hover:bg-dimmed-800 flex h-12 w-full justify-between px-4 md:w-40 lg:w-64')}
                onClick={() => setOpen(true)}
                {...props}
            >
                <span className='hidden text-lg lg:inline-flex'>Search products...</span>
                <span className='inline-flex text-lg sm:px-6 md:px-0 lg:hidden'>Search...</span>
                <kbd className='dark:bg-dimmed-900 border-dimmed-100 dark:border-dimmed-700 pointer-events-none hidden select-none items-center gap-1 rounded border px-2 opacity-100 md:flex'>
                    <span className='text-xl'>⌘</span> <span className='text-md'>K</span>
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder='Search products...' />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                        <CommandItem></CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
};

export default Search;
