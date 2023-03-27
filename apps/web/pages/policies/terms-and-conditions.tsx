import dynamic from 'next/dynamic';

const TermsAndConditions = dynamic(() => import('@pages').then((mod) => mod.TermsAndConditions));

export default TermsAndConditions;
