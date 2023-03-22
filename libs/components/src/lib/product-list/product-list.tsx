import Product from '../product/product';
import { useToast } from '../toaster/useToaster';
import P from '../typography/p/p';
import { getProductsQuery } from '@graphql';
import { cn } from '@styles';
import { error as logError } from '@utils';
import { useEffect } from 'react';
import { useQuery } from 'urql';

/* eslint-disable-next-line */
export interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = ({ ...props }) => {
    const [{ data, error, fetching }] = useQuery({ query: getProductsQuery });
    const { toast } = useToast();

    useEffect(() => {
        if (error) {
            logError(error.message);
            toast({
                title: 'Error',
                description: 'Failed fetching products',
                variant: 'destructive',
            });
        }
    }, [error, toast]);

    if (fetching) return <P>Loading...</P>;
    if (error) return <p>Error:( </p>;

    return (
        <ul className={cn('m-12 my-6 grid list-disc grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3')}>
            {data && data.Product.map((product) => <Product product={product} key={product.id} />)}
        </ul>
    );
};
export default ProductList;
