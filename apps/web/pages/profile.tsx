import dynamic from 'next/dynamic';

const Profile = dynamic(() => import('@pages').then((mod) => mod.Profile));

export default Profile;
