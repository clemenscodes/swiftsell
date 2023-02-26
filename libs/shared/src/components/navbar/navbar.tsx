import { Button } from '../button/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../dropdown-menu/dropdown-menu';
import { Icons } from '../icons/icons';
import Logo from '../logo/logo';
import { cn } from '@styles';
import { NavItem } from '@types';
import Link from 'next/link';

interface MainNavProps {
    items?: NavItem[];
}

export function Navbar({ items }: MainNavProps) {
    return (
        <div className='flex'>
            <Logo />
            {items?.length ? (
                <nav className='hidden gap-6 md:flex'>
                    {items?.map(
                        (item, index) =>
                            item.href && (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={cn(
                                        'flex items-center text-lg font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-100 sm:text-sm',
                                        item.disabled &&
                                            'cursor-not-allowed opacity-80'
                                    )}
                                >
                                    {item.title}
                                </Link>
                            )
                    )}
                </nav>
            ) : null}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='ghost'
                        className='flex h-14 w-14 items-center rounded-md text-base hover:bg-transparent focus:ring-0 md:hidden'
                    >
                        <Icons.Logo />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align='start'
                    sideOffset={24}
                    className='w-[300px] overflow-scroll'
                >
                    <DropdownMenuLabel>
                        <Link href='/' className='flex items-center'>
                            Home
                        </Link>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {items?.map(
                        (item, index) =>
                            item.href && (
                                <DropdownMenuItem key={index} asChild>
                                    <Link href={item.href}>{item.title}</Link>
                                </DropdownMenuItem>
                            )
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default Navbar;
