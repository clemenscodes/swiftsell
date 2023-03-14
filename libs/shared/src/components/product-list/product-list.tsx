import { useToast } from '../toaster/useToaster';
import { useQuery } from '@apollo/client';
import { cn } from '@styles';
import { GET_PRODUCTS } from '@utils';
import { error as logError } from '@utils';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = ({ ...props }) => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
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

    if (loading) return <p>Loading...</p>;
    if (error) {
        return <p>Error:( </p>;
    }

    return (
        <div className={cn('')}>
            <ul>
                {data.products.map((product: any) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <img src={product.image} alt={product.name} />
                        <p>Store: {product.store.name}</p>
                        <p>Inventory: {product.inventory.quantity}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProductList;
