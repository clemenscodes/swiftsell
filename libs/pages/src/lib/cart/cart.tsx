import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface CartProps {}

export const Cart: NextPage<CartProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to Cart!</h1>
        </div>
    );
};

export default Cart;
