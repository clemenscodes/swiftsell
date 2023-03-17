// import NotSignedIn from '../../components/not-signed-in/not-signed-in';
// import SignedIn from '../../components/signed-in/signed-in';

import Banner from '../../components/banner/banner';
import Products from '../products/products';
import { cn } from '@styles';
import { NextPage } from 'next';
// import { useAuthUser, withAuthUser } from 'next-firebase-auth';
import { withAuthUser } from 'next-firebase-auth';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home: NextPage<HomeProps> = ({ ...props }) => {
    // const user = useAuthUser();
    return (
        <main className={cn('flex max-w-full flex-col items-center justify-center')}>
            {/* {user.email ? <SignedIn /> : <NotSignedIn />} */}
            <Banner />
            <Products />
        </main>
    );
};

export default withAuthUser<HomeProps>()(Home);
