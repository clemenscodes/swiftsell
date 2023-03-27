import { siteConfig } from '@config';
import { cn } from '@styles';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({ ...props }) => {
    return (
        <footer
            className={cn([
                'dark:bg-dimmed-900 dark:border-t-dimmed-700 border-t-dimmed-100 bottom-0 flex min-h-[8rem] flex-col border-t',
            ])}
        >
            <div className={cn('flex justify-between')}>
                <div className={cn('w-1/3 p-2 md:w-1/6')}>
                    <Link href={`/policies/terms-and-conditions`}>
                        <div className={cn('hover:underline')}>Terms and Conditions</div>
                    </Link>
                    <Link href={`/policies/legal-notice`}>
                        <div className={cn('hover:underline')}>Legal Notice</div>
                    </Link>
                    <Link href={`/policies/cookies`}>
                        <div className={cn('hover:underline')}>Cookies</div>
                    </Link>
                    <Link href={`/policies/privacy-policy`}>
                        <div className={cn('hover:underline')}>Privacy Policy</div>
                    </Link>
                </div>
                <div className={cn('w-1/3 p-2 md:w-2/3')}>
                    <Link href={`/communities/about`}>
                        <div className={cn('hover:underline')}>About</div>
                    </Link>
                </div>
                <div className={cn('w-1/3 p-2 md:w-1/6')}>
                    <Link href={`/communities/contact`}>
                        <div className={cn('hover:underline')}>Contact</div>
                    </Link>
                    <Link href={`/communities/faq`}>
                        <div className={cn('hover:underline')}>FAQ</div>
                    </Link>
                </div>
            </div>
            <div className={cn('flex flex-col items-center')}>© 2023 {siteConfig.name}</div>
        </footer>
    );
};

export default Footer;
