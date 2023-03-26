import H2 from '../typography/h2/h2';
import Lead from '../typography/lead/lead';
import P from '../typography/p/p';
import { IImage, type IProduct } from '@graphql';
import { cn } from '@styles';
import { imageLoader } from '@utils';
import Image from 'next/image';
import Link from 'next/link';

type OmittedProductFields =
    | 'updatedAt'
    | 'createdAt'
    | 'Products'
    | 'Products_aggregate'
    | 'Images_aggregate'
    | 'Images';
type ProductWithoutImages = Pick<IProduct, Exclude<keyof IProduct, OmittedProductFields>>;
type OmittedImageFields = 'Product' | 'productId';
type Images = Pick<IImage, Exclude<keyof IImage, OmittedImageFields>>;

type Product = ProductWithoutImages & {
    Images: Images[];
};

export interface ProductProps {
    product: Product;
}

export const Product: React.FC<ProductProps> = ({ product, ...props }) => {
    return (
        <Link href={`/product/${product.id}`}>
            <li
                className={cn(
                    'dark:border-dimmed-700 dark:hover:bg-dimmed-800 border-dimmed-100 overflow-hidden rounded-lg border text-center shadow-xl hover:cursor-pointer hover:bg-slate-100'
                )}
            >
                <H2>{product.name}</H2>
                <P>{product.description}</P>
                <Lead>Price: {product.price}€</Lead>
                <Image
                    className={cn('h-64 w-full object-cover')}
                    loader={imageLoader}
                    src={product.Images[0].url as string}
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
