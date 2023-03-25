import { gqlSDK } from '@graphql';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

const ProductDetails = dynamic(() => import('@pages').then((mod) => mod.ProductDetails));

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.params;
    const parsedID = parseInt(id as string);
    const variables = { id: parsedID };
    const { data } = await gqlSDK.getProduct(variables);
    const { Product } = data;
    return {
        props: {
            product: Product[0],
        },
    };
};

export default ProductDetails;
