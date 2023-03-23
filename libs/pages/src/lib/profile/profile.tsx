import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface ProfileProps {}

export const Profile: NextPage<ProfileProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to Profile!</h1>
        </div>
    );
};

export default Profile;
