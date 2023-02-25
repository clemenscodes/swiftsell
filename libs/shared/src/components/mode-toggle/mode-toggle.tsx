import { Button } from '../button/button';
import { Icons } from '../icons/icons';
import { useTheme } from 'next-themes';

/* eslint-disable-next-line */
export interface ModeToggleProps {}

export const ModeToggle: React.FC<ModeToggleProps> = ({ ...props }) => {
    const { setTheme, theme } = useTheme();
    const isDark = theme === 'dark';
    const toggleTheme = () => (isDark ? setTheme('light') : setTheme('dark'));

    return (
        <Button onClick={toggleTheme} variant='ghost' size='sm'>
            <Icons.Sun className='rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100' />
            <Icons.Moon className='absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100' />
        </Button>
    );
};

export default ModeToggle;
