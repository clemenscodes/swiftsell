import { Carousel } from '@components';
import { H1, Lead, P } from '@components';
import { IProduct } from '@graphql';
import { cn } from '@styles';
import { imageLoader } from '@utils';
import { EmblaOptionsType } from 'embla-carousel-react';
import { NextPage } from 'next';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface ProductDetailsProps {
    product: IProduct;
}

export const ProductDetails: NextPage<ProductDetailsProps> = ({ product, ...props }) => {
    const carouselOptions: EmblaOptionsType = {};
    return (
        <div className='flex flex-col items-center '>
            <div className={cn(['m-6 flex flex-col justify-evenly md:flex-row'])}>
                <Carousel
                    options={carouselOptions}
                    slides={Array.from({ length: product.Images.length }, (_, index) => index)}
                >
                    {product.Images.map((image) => (
                        <Image
                            className='relative block px-2'
                            loader={imageLoader}
                            key={image.id}
                            src={image.url as string}
                            alt={product.name}
                            width={1200}
                            height={1200}
                            quality={100}
                            priority={true}
                        />
                    ))}
                </Carousel>
                <div className='my-6 flex flex-col items-center md:mx-16 md:items-start'>
                    <H1>{product.name}</H1>
                    <P>Product ID: {product.id}</P>
                    <P>{product.description}</P>
                    <Lead>Price: {product.price}€</Lead>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
