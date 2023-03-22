import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('@pages').then((mod) => mod.Contact));

export default Contact;
