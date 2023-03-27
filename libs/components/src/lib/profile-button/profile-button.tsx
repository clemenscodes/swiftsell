import { Button } from '../button/button';
import { Icons } from '../icons/icons';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface ProfileButtonProps {}

export const ProfileButton: React.FC<ProfileButtonProps> = ({ ...props }) => {
    return (
        <Link href='/profile'>
            <Button variant={'ghost'} size={'sm'}>
                <Icons.User />
            </Button>
        </Link>
    );
};

export default ProfileButton;
