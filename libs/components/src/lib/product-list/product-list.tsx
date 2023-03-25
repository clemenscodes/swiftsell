import Product from '../product/product';
import { ProductProps } from '../product/product';
import { useToast } from '../toaster/useToaster';
import P from '../typography/p/p';
import { useGetProductsQuery } from '@graphql';
import { cn } from '@styles';
import { log, error as logError } from '@utils';
import { useEffect } from 'react';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ProductListState {
    loading: boolean;
    products: ProductProps['product'][];
    lastProducts: ProductProps['product'][];
    offset: number;
    limit: number;
    setProducts: (newProducts: ProductProps['product'][]) => void;
    setLoading: (loading: boolean) => void;
    setLastProducts: (lastProducts: ProductProps['product'][]) => void;
    setOffset: (offset: number) => void;
}

const useProductListStore = create<ProductListState>()(
    devtools(
        persist(
            (set) => ({
                loading: false,
                products: [],
                lastProducts: [],
                offset: 0,
                limit: 1,
                setProducts: (newProducts) =>
                    set((state) => ({
                        ...state,
                        products: [...state.products, ...newProducts].filter(
                            (product, index, array) => array.findIndex((p) => p.id === product.id) === index
                        ),
                    })),
                setLoading: (loading) => set((state) => ({ ...state, loading })),
                setLastProducts: (lastProducts) => set((state) => ({ ...state, lastProducts })),
                setOffset: (offset) => set((state) => ({ ...state, offset })),
            }),
            { name: 'productListState' }
        )
    )
);

/* eslint-disable-next-line */
export interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = ({ ...props }) => {
    const { loading, products, lastProducts, offset, limit, setProducts, setLoading, setLastProducts, setOffset } =
        useProductListStore((state) => state);
    const { data, error, isError } = useGetProductsQuery({ offset, limit }, { keepPreviousData: true });
    const { toast } = useToast();

    useEffect(() => {
        log('data changed');
        let newProducts: ProductProps['product'][] = [];
        if (data) {
            const { Product } = data;
            newProducts = Product;
        }
        setLastProducts(newProducts);
        setProducts(newProducts);
        log(data);
    }, [data, setLastProducts, setProducts]);

    useEffect(() => {
        if (isError) {
            logError(error.message);
            toast({
                title: 'Error',
                description: 'Failed fetching products',
                variant: 'destructive',
            });
        }
    }, [error, isError, toast]);

    useEffect(() => {
        const handleScroll = () => {
            log('handling scroll');
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
    }, [loading, setLoading]);

    useEffect(() => {
        if (loading) {
            if (products && lastProducts.length < limit) return;
            log('loading more products...');
            setOffset(offset + limit);
            setLoading(false);
            log('products loaded');
        }
    }, [lastProducts.length, limit, loading, offset, products, setOffset, setLoading]);

    if (!data) return <P>Loading...</P>;
    if (error) return <p>Error:( </p>;

    return (
        <div>
            <ul className={cn('m-6 grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3')}>
                {products && products.map((product) => <Product product={product} key={product.id} />)}
            </ul>
        </div>
    );
};
export default ProductList;
