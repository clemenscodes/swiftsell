import dynamic from 'next/dynamic';

const PrivacyPolicy = dynamic(() => import('@pages').then((mod) => mod.PrivacyPolicy));

export default PrivacyPolicy;
