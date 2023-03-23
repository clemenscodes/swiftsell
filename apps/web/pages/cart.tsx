import dynamic from 'next/dynamic';

const Cart = dynamic(() => import('@pages').then((mod) => mod.Cart));

export default Cart;
