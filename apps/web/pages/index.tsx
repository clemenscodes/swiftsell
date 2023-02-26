import { Home } from '@shared';
import { NextPage } from 'next';
import path from 'path';

// import next config in any page file to somehow make next aware of correct folder structure (MAGIC)
// somehow required for standalone output to work in a monorepo
// see https://github.com/nrwl/nx/issues/9017#issuecomment-1284740346
path.resolve('./next.config.js');

export const Index: NextPage = () => {
    return (
        <>
            <Home></Home>
        </>
    );
};

export default Index;
