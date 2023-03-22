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
            <Icons.Sun className='hover:text-dimmed-900 dark:text-dimmed-font dark:hover:text-dimmed-100 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <Icons.Moon className='hover:text-dimmed-900 dark:text-dimmed-font dark:hover:text-dimmed-100 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </Button>
    );
};

export default ModeToggle;
