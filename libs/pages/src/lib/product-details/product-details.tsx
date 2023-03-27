import { Carousel, ProductProps } from '@components';
import { H1, Lead, P } from '@components';
import { cn } from '@styles';
import { imageLoader } from '@utils';
import { EmblaOptionsType } from 'embla-carousel-react';
import { NextPage } from 'next';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface ProductDetailsProps {
    product: ProductProps['product'];
}

export const ProductDetails: NextPage<ProductDetailsProps> = ({ product, ...props }) => {
    product.Images.sort((a, b) => {
        if (a.url.includes('cover') && !b.url.includes('cover')) {
            return -1;
        } else if (!a.url.includes('cover') && b.url.includes('cover')) {
            return 1;
        } else if (a.url.includes('.png') && !b.url.includes('.png')) {
            return 1;
        } else if (!a.url.includes('.png') && b.url.includes('.png')) {
            return -1;
        } else {
            return 0;
        }
    });
    const carouselOptions: EmblaOptionsType = {
        dragFree: true,
        align: 'center',
        inViewThreshold: 0,
    };
    return (
        <div className='relative w-full md:mx-auto'>
            <div className={cn(['m-6 flex flex-col justify-center md:flex-row'])}>
                <Carousel
                    options={carouselOptions}
                    slides={Array.from({ length: product.Images.length }, (_, index) => index)}
                >
                    {product.Images.map((image) => (
                        <Image
                            className='block w-screen object-cover px-2 lg:h-[40rem] lg:w-[40rem]'
                            loader={imageLoader}
                            key={image.id}
                            src={image.url as string}
                            alt={product.name}
                            height={1000}
                            width={1000}
                            quality={100}
                            priority={true}
                        />
                    ))}
                </Carousel>
                <div className='my-6 flex flex-col items-center md:mx-16 md:items-start'>
                    <H1>{product.name}</H1>
                    <P>Product ID: {product.id}</P>
                    <P>{product.description}</P>
                    <P>Color: {product.color}</P>
                    {product.ProductSizes.map((productSize) => (
                        <P key={productSize.id}>Size: {productSize.size}</P>
                    ))}

                    <Lead>Price: {product.price}€</Lead>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
