import { Button } from '../button/button';
import Product from '../product/product';
import { ProductProps } from '../product/product';
import { useToast } from '../toaster/useToaster';
import P from '../typography/p/p';
import { useGetProductsQuery } from '@graphql';
import { cn } from '@styles';
import { error as logError } from '@utils';
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
                limit: 8,
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
    const { data, error, isError, isLoading } = useGetProductsQuery({ offset, limit }, { keepPreviousData: true });
    const { toast } = useToast();

    useEffect(() => {
        let newProducts: ProductProps['product'][] = [];
        if (data) {
            const { Product } = data;
            newProducts = Product;
        }
        setLastProducts(newProducts);
        setProducts(newProducts);
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
            const scrollHeight = document.body.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = document.body.clientHeight;
            const calc = Math.abs(scrollHeight - scrollTop - clientHeight);
            if (calc < 2 && !loading) {
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
            setOffset(offset + limit);
            setLoading(false);
        }
    }, [lastProducts.length, limit, loading, offset, products, setOffset, setLoading]);

    const handleClick = () => {
        setLoading(true);
    };

    if (isLoading) return <P>Loading...</P>;
    if (isError) return <p>Error:( </p>;

    return (
        <div className='flex flex-col'>
            <ul className={cn('m-6 grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4')}>
                {products && products.map((product) => <Product product={product} key={product.id} />)}
            </ul>
            <div className='flex flex-col items-center'>
                {products && lastProducts.length < limit ? (
                    <P>No more products available</P>
                ) : (
                    <Button
                        variant={'outline'}
                        className='flex w-48 max-w-[12rem] flex-col items-center justify-center'
                        onClick={handleClick}
                    >
                        Load more
                    </Button>
                )}
            </div>
        </div>
    );
};
export default ProductList;
