import { NavItem } from '@types';

interface SiteConfig {
    domain: string;
    name: string;
    description: string;
    navbar: NavItem[];
}

export const siteConfig: SiteConfig = {
    domain: 'https://shop.swiftsell.de',
    name: 'SWIFTSELL',
    description: 'Sell swiftly',
    navbar: [],
};
