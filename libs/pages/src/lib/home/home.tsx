import Products from '../products/products';
import { Banner } from '@components';
import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home: NextPage<HomeProps> = ({ ...props }) => {
    return (
        <main className={cn('flex max-w-full flex-col items-center justify-center')}>
            <Banner />
            <Products />
        </main>
    );
};

export default Home;
