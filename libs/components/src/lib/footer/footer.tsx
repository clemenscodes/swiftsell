import { siteConfig } from '@config';
import { cn } from '@styles';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({ ...props }) => {
    return (
        <footer
            className={cn([
                'dark:bg-dimmed-900 dark:border-t-dimmed-700 border-t-dimmed-100 bottom-0 min-h-[8rem] border-t',
            ])}
        >
            <div className={cn('m-2 flex flex-col items-end')}>© 2023 {siteConfig.name}</div>
        </footer>
    );
};

export default Footer;
