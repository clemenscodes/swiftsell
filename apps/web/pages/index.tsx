// import next config in any page file to somehow make next aware of correct folder structure (MAGIC)
// see https://github.com/nrwl/nx/issues/9017#issuecomment-1284740346
import path from 'path';
path.resolve('./next.config.js');

import { Home, Layout, Pwa } from '@shared';
import { NextPage } from 'next';

export const Index: NextPage = () => {
    return (
        <Layout>
            <Home></Home>
            <Pwa />
        </Layout>
    );
};

export default Index;
