import dynamic from 'next/dynamic';

const Products = dynamic(() => import('@shared').then((mod) => mod.Products));

Products.defaultProps = {
    auth: true,
};

export default Products;
