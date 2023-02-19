// import next config in any page file to somehow make next aware of correct folder structure (MAGIC)
// see https://github.com/nrwl/nx/issues/9017#issuecomment-1284740346
import path from 'path';
path.resolve('./next.config.js');

import { Home, HomeProps } from '@shared';

export async function getStaticProps() {
    const rand = Math.floor(Math.random() * 100);
    return {
        props: {
            rand,
        }, // will be passed to the page component as props
        revalidate: 30, // In seconds
    };
}

export type IndexProps = HomeProps;

export function Index({ rand }: IndexProps) {
    return (
        <>
            <Home rand={rand}></Home>
        </>
    );
}

export default Index;
