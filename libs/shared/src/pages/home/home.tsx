import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home: NextPage<HomeProps> = ({ ...props }) => {
    return (
        <main
            className={cn('flex max-w-full items-center justify-center')}
        ></main>
    );
};

export default Home;
