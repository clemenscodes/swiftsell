import Product from '../product/product';
import { useToast } from '../toaster/useToaster';
import P from '../typography/p/p';
import { Product as TProduct, getProductsQuery } from '@graphql';
import { cn } from '@styles';
import { log, error as logError } from '@utils';
import { useEffect, useState } from 'react';
import { useQuery } from 'urql';

/* eslint-disable-next-line */
export interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = ({ ...props }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<TProduct[]>([]);
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

    useEffect(() => {
        const handleScroll = () => {
            console.log('handling scroll');
            const scrollHeight = document.body.scrollHeight;
            const scrollPosition = window.innerHeight + window.pageYOffset;
            const offset = 2;
            if (scrollPosition + offset >= scrollHeight && !loading) {
                setLoading(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading]);

    useEffect(() => {
        async function loadMore() {
            log('loading more products...');
            const newProducts: TProduct[] = [];
            setProducts([...products, ...newProducts]);
            setLoading(false);
            log('products loaded');
        }

        if (loading) {
            loadMore();
        }
    }, [loading, products]);

    if (fetching) return <P>Loading...</P>;
    if (error) return <p>Error:( </p>;

    return (
        <ul className={cn('m-6 grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3')}>
            {data && data.Product.map((product) => <Product product={product} key={product.id} />)}
        </ul>
    );
};
export default ProductList;
