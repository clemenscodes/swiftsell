import { useToast } from '../toaster/useToaster';
import H2 from '../typography/h2/h2';
import Lead from '../typography/lead/lead';
import P from '../typography/p/p';
import { getProductsQuery } from '@graphql';
import { cn } from '@styles';
import { error as logError } from '@utils';
import Image from 'next/image';
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
        <ul
            className={cn(
                'm-12 my-6 ml-6 grid list-disc grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 [&>li]:mt-2'
            )}
        >
            {data &&
                data.product.map((product) => (
                    <li
                        className={cn(
                            'overflow-hidden rounded-lg shadow-lg dark:bg-slate-900 '
                        )}
                        key={product.id}
                    >
                        <H2>{product.name}</H2>
                        <P>{product.description}</P>
                        <Lead>Price: {product.price}€</Lead>
                        <Image
                            className={cn('h-48 w-full object-cover')}
                            src={product.image as string}
                            alt={product.name}
                            width={200}
                            height={200}
                            quality={100}
                            priority={true}
                        />
                    </li>
                ))}
        </ul>
    );
};
export default ProductList;
