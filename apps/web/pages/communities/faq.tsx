import dynamic from 'next/dynamic';

const Faq = dynamic(() => import('@pages').then((mod) => mod.Faq));

export default Faq;
