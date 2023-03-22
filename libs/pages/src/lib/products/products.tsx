import { ProductList, H1 } from '@components';
import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface ProductsProps {}

export const Products: NextPage<ProductsProps> = ({ ...props }) => {
    return (
        <div className={cn(['m-12 flex flex-col items-center justify-center'])}>
            <H1>Products</H1>
            <ProductList />
        </div>
    );
};

export default Products;
