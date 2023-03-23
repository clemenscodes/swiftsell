import { Button } from '../button/button';
import { Icons } from '../icons/icons';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface CartButtonProps {}

export const CartButton: React.FC<CartButtonProps> = ({ ...props }) => {
    return (
        <Link href='/cart'>
            <Button variant={'ghost'} size={'sm'}>
                <Icons.Cart />
            </Button>
        </Link>
    );
};

export default CartButton;
