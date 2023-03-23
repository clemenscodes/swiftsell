import H2 from '../typography/h2/h2';
import Lead from '../typography/lead/lead';
import P from '../typography/p/p';
import { type Product as TProduct } from '@graphql';
import { cn } from '@styles';
import Image from 'next/image';
import Link from 'next/link';

export interface ProductProps {
    product: Omit<Omit<TProduct, 'updatedAt'>, 'createdAt'>;
}

export const Product: React.FC<ProductProps> = ({ product, ...props }) => {
    return (
        <Link href={`/product/${product.id}`}>
            <li
                className={cn(
                    'dark:border-dimmed-700 dark:hover:bg-dimmed-800 border-dimmed-100 my-2 overflow-hidden rounded-lg border text-center shadow-xl hover:cursor-pointer hover:bg-slate-100'
                )}
            >
                <H2>{product.name}</H2>
                <P>{product.description}</P>
                <Lead>Price: {product.price}€</Lead>
                <Image
                    className={cn('h-64 w-full object-cover')}
                    src={product.image as string}
                    alt={product.name}
                    width={200}
                    height={200}
                    quality={100}
                    priority={true}
                />
            </li>
        </Link>
    );
};

export default Product;
