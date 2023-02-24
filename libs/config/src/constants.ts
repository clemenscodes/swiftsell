import { NavItem } from '@types';

export const DOMAIN = 'https://shop.swiftsell.de';
export const NAME = 'SWIFTSELL';

interface SiteConfig {
    name: string;
    description: string;
    navbar: NavItem[];
}

export const siteConfig: SiteConfig = {
    name: 'SWIFTSELL',
    description: 'Sell swiftly',
    navbar: [],
};
