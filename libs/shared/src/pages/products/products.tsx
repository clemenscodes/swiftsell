import ProductList from '../../components/product-list/product-list';
import H1 from '../../components/typography/h1/h1';
import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface ProductsProps {}

export const Products: NextPage<ProductsProps> = ({ ...props }) => {
    return (
        <div className={cn(['flex flex-col items-center justify-center'])}>
            <H1>Products</H1>
            <ProductList />
        </div>
    );
};

export default Products;
