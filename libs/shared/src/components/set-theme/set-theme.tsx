import { cn } from '@styles';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePrefixStore } from '@redux';

/* eslint-disable-next-line */
export interface SetThemeProps {}

export const SetTheme: React.FC<SetThemeProps> = ({ ...props }) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const { prefix } = usePrefixStore.getState();

    return (
        <div className={cn([])}>
            {currentTheme === 'dark' ? (
                <button onClick={() => setTheme('light')}>
                    {' '}
                    <Image
                        src={`${prefix}/svg/sun.svg`}
                        alt='sun-logo'
                        height={50}
                        width={50}
                    />
                </button>
            ) : (
                <button onClick={() => setTheme('dark')}>
                    <Image
                        src={`${prefix}/svg/moon.svg`}
                        alt='moon-logo'
                        height={50}
                        width={50}
                    />
                </button>
            )}
        </div>
    );
};

export default SetTheme;
