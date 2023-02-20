import Navbar from '../../components/navbar/navbar';

/* eslint-disable-next-line */
export interface ContactProps {}

export function Contact(props: ContactProps) {
    return (
        <>
            <Navbar />
            <div>
                <h1>Welcome to Contact!</h1>
            </div>
        </>
    );
}

export default Contact;
