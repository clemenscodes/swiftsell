import H2 from '../typography/h2/h2';
import Lead from '../typography/lead/lead';
import P from '../typography/p/p';
import { IImage, IProduct, IProductSize } from '@graphql';
import { cn } from '@styles';
import { imageLoader } from '@utils';
import Image from 'next/image';
import Link from 'next/link';

type OmittedProductFields =
    | 'updatedAt'
    | 'createdAt'
    | 'Products'
    | 'Product'
    | 'parentId'
    | 'size'
    | 'Products_aggregate'
    | 'ProductSizes'
    | 'ProductSizes_aggregate'
    | 'Images_aggregate'
    | 'Images';
type OmittedImageFields = 'Product' | 'productId';
type OmittedProductSizesFields = 'Product' | 'productId';
type ProductWithoutImages = Pick<IProduct, Exclude<keyof IProduct, OmittedProductFields>>;
type Images = Pick<IImage, Exclude<keyof IImage, OmittedImageFields>>;
type ProductSizes = Pick<IProductSize, Exclude<keyof IProductSize, OmittedProductSizesFields>>;

type Product = ProductWithoutImages & {
    Images: Images[];
    ProductSizes: ProductSizes[];
};

export interface ProductProps {
    product: Product;
}

export const ProductListItem: React.FC<ProductProps> = ({ product, ...props }) => {
    return (
        <li
            className={cn(
                'dark:border-dimmed-700 dark:hover:bg-dimmed-800 border-dimmed-100 overflow-hidden rounded-lg border text-center shadow-xl hover:cursor-pointer hover:bg-slate-100'
            )}
        >
            <Link href={`/product/${product.id}`}>
                <H2>{product.name}</H2>
                <P>{product.description}</P>
                <Lead>Price: {product.price}€</Lead>
                <Image
                    className={cn('h-[24rem] w-full object-cover')}
                    loader={imageLoader}
                    src={product.Images[0].url as string}
                    alt={product.name}
                    width={400}
                    height={400}
                    quality={100}
                    priority={true}
                />
            </Link>
        </li>
    );
};

export default ProductListItem;
