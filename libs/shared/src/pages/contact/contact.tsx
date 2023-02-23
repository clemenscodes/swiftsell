import Navbar from '../../components/navbar/navbar';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface ContactProps {}

export const Contact: NextPage<ContactProps> = ({ ...props }) => {
    return (
        <>
            <Navbar />
            <div>
                <h1>Welcome to Contact!</h1>
            </div>
        </>
    );
};

export default Contact;
