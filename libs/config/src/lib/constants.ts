import { isCloudRun, isCloudRunProd } from './isCloudRun';
import { NavItem } from '@types';

interface SiteConfig {
    domain: string;
    prefix: string;
    name: string;
    description: string;
    keywords: string;
    summary: string;
    navbar: NavItem[];
}

const protocol = 'https';
const apexDomain = 'swiftsell.de';
const appName = 'shop';
const base = `${appName}.${apexDomain}`;
const prodDomain = `${protocol}://${base}`;
const devDomain = `${protocol}://dev.${base}`;
const staticBase = `static.${base}`;
const devCDN = `dev.${staticBase}`;
const prodCDN = `${staticBase}`;
const hostname = isCloudRunProd ? prodCDN : devCDN;
const prefix = isCloudRun ? `${protocol}://${hostname}` : '';
const PORT = process.env.PORT || 3000;
const localDomain = `http://localhost:${PORT}`;
const domain = isCloudRun ? (isCloudRunProd ? prodDomain : devDomain) : localDomain;

export const siteConfig: SiteConfig = {
    domain,
    prefix,
    name: 'SWIFTSELL',
    description: 'Sell swiftly',
    keywords: 'shopping',
    summary: 'Sell swiftly',
    navbar: [
        {
            href: '/products',
            external: false,
            disabled: false,
            title: 'Products',
        },
    ],
};
