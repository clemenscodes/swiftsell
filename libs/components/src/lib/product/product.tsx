import H2 from '../typography/h2/h2';
import Lead from '../typography/lead/lead';
import P from '../typography/p/p';
import { type Product as TProduct } from '@graphql';
import { cn } from '@styles';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface ProductProps {
    product: Omit<Omit<TProduct, 'updatedAt'>, 'createdAt'>;
}

export const Product: React.FC<ProductProps> = ({ product, ...props }) => {
    return (
        <li className={cn('dark:border-dimmed-700 overflow-hidden rounded-lg border text-center')}>
            <H2>{product.name}</H2>
            <P>{product.description}</P>
            <Lead>Price: {product.price}€</Lead>
            <Image
                className={cn('h-48 w-full object-cover')}
                src={product.image as string}
                alt={product.name}
                width={200}
                height={200}
                quality={100}
                priority={true}
            />
        </li>
    );
};

export default Product;
