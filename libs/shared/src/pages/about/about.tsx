import Navbar from '../../components/navbar/navbar';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
    return (
        <>
            <Navbar />
            <div>
                <h1>Welcome to About!</h1>
            </div>
        </>
    );
}

export default About;
