import dynamic from 'next/dynamic';

const LegalNotice = dynamic(() => import('@pages').then((mod) => mod.LegalNotice));

export default LegalNotice;
