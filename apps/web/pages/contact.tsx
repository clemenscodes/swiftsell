import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('@shared').then((mod) => mod.Contact));

export default Contact;
