import { graphQLClient, Product } from '@graphql';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

const ProductDetails = dynamic(() => import('@pages').then((mod) => mod.ProductDetails));

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    console.log('in gsp');
    const { id } = ctx.params;
    const parsedID = parseInt(id as string);
    const { Product } = await graphQLClient.getProduct({ id: parsedID });
    const product = Product[0] as Product;

    return {
        props: {
            product,
        },
    };
};

export default ProductDetails;
