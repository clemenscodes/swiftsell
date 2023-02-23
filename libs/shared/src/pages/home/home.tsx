import { NextPage } from 'next';
import Navbar from '../../components/navbar/navbar';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home: NextPage<HomeProps> = ({ ...props }) => {
    return <Navbar />;
};

export default Home;
