import Navbar from '../../components/navbar/navbar';
import { cn } from '@styles';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
    return (
        <>
            <Navbar />
            <div className={cn([''])}>
                <h1>Welcome to About!</h1>
            </div>
        </>
    );
}

export default About;
