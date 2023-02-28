import dynamic from 'next/dynamic';

const About = dynamic(() => import('@shared').then((mod) => mod.About));

export default About;
