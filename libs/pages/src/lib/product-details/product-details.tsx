import { H1, Lead, P } from '@components';
import { Product } from '@graphql';
import { cn } from '@styles';
import { NextPage } from 'next';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface ProductDetailsProps {
    product: Product;
}

export const ProductDetails: NextPage<ProductDetailsProps> = ({ product, ...props }) => {
    return (
        <div className={cn(['m-6 flex flex-col items-center'])}>
            <H1>{product.name}</H1>
            <P>{product.description}</P>
            <Lead>Price: {product.price}€</Lead>
            <Image
                src={product.image as string}
                alt={product.name}
                width={200}
                height={200}
                quality={100}
                priority={true}
            />
        </div>
    );
};

export default ProductDetails;