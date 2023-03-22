import dynamic from 'next/dynamic';

const About = dynamic(() => import('@pages').then((mod) => mod.About));

export default About;
