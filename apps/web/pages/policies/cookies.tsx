import dynamic from 'next/dynamic';

const Cookies = dynamic(() => import('@pages').then((mod) => mod.Cookies));

export default Cookies;
