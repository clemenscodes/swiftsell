import dynamic from 'next/dynamic';

const Products = dynamic(() => import('@shared').then((mod) => mod.Products));

export default Products;
