import { siteConfig } from '@config';
import { cn } from '@styles';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({ ...props }) => {
    return (
        <footer className={cn(['dark:bg-dimmed-900 dark:border-t-dimmed-700 bottom-0 min-h-[4rem] border-t'])}>
            <div className={cn('text-dimmed-muted m-2 flex flex-col items-end')}>© 2023 {siteConfig.name}</div>
        </footer>
    );
};

export default Footer;
