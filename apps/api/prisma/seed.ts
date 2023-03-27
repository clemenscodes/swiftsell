import { PrismaClient, Color, Size } from '@prisma/api';

const prisma = new PrismaClient();

async function main() {
    // Seed some users.
    const user1 = await prisma.user.create({
        data: {
            email: 'user1@example.com',
            passwordHash: 'password1',
            name: 'John',
            surname: 'Doe',
        },
    });

    const user2 = await prisma.user.create({
        data: {
            email: 'user2@example.com',
            passwordHash: 'password2',
            name: 'Jane',
            surname: 'Doe',
        },
    });

    const productWithVariants = {
        name: 'Applewatch',
        description: 'Very fit in black',
        price: 10.0,
        color: Color.Black,
        sizes: {
            create: [
                { size: Size.XS },
                { size: Size.S },
                { size: Size.M },
                { size: Size.L },
                { size: Size.XL },
                { size: Size.XXL },
            ],
        },
        images: {
            create: [
                {
                    url: '/img/products/applewatch/black/cover.jpeg',
                },
                {
                    url: '/img/products/applewatch/black/dual.jpeg',
                },
            ],
        },
        variants: {
            create: [
                {
                    name: 'Applewatch',
                    description: 'Very fit in blue',
                    price: 12.0,
                    color: Color.Blue,
                    sizes: {
                        create: [
                            { size: Size.XS },
                            { size: Size.S },
                            { size: Size.M },
                            { size: Size.L },
                            { size: Size.XL },
                            { size: Size.XXL },
                        ],
                    },
                    images: {
                        create: [
                            {
                                url: '/img/products/applewatch/blue/cover.jpeg',
                            },
                            {
                                url: '/img/products/applewatch/blue/sport.jpg',
                            },
                            {
                                url: '/img/products/applewatch/blue/darkblue.png',
                            },
                            {
                                url: '/img/products/applewatch/blue/watchless.jpg',
                            },
                            {
                                url: '/img/products/applewatch/blue/wrist.jpg',
                            },
                        ],
                    },
                },
                {
                    name: 'Applewatch',
                    description: 'Very fit in green',
                    price: 12.0,
                    color: Color.Green,
                    sizes: {
                        create: [
                            { size: Size.XS },
                            { size: Size.S },
                            { size: Size.M },
                            { size: Size.L },
                            { size: Size.XL },
                            { size: Size.XXL },
                        ],
                    },

                    images: {
                        create: [
                            {
                                url: '/img/products/applewatch/green/cover.jpeg',
                            },
                            {
                                url: '/img/products/applewatch/green/green.png',
                            },
                            {
                                url: '/img/products/applewatch/green/wrist.jpg',
                            },
                        ],
                    },
                },
                {
                    name: 'Applewatch',
                    description: 'Very fit in light blue',
                    price: 12.0,
                    color: Color.Lightblue,
                    sizes: {
                        create: [
                            { size: Size.XS },
                            { size: Size.S },
                            { size: Size.M },
                            { size: Size.L },
                            { size: Size.XL },
                            { size: Size.XXL },
                        ],
                    },

                    images: {
                        create: [
                            {
                                url: '/img/products/applewatch/lightblue/cover.jpeg',
                            },
                        ],
                    },
                },
                {
                    name: 'Applewatch',
                    description: 'Very fit in white',
                    price: 12.0,
                    color: Color.White,
                    sizes: {
                        create: [
                            { size: Size.XS },
                            { size: Size.S },
                            { size: Size.M },
                            { size: Size.L },
                            { size: Size.XL },
                            { size: Size.XXL },
                        ],
                    },
                    images: {
                        create: [
                            {
                                url: '/img/products/applewatch/white/cover.jpeg',
                            },
                            {
                                url: '/img/products/applewatch/white/front.jpg',
                            },
                            {
                                url: '/img/products/applewatch/white/wrist.jpg',
                            },
                        ],
                    },
                },
            ],
        },
    };

    await prisma.product.create({
        data: productWithVariants,
    });

    // Seed some stores.
    // const store1 = await prisma.store.create({
    //     data: {
    //         name: 'Store 1',
    //         address: '123 Main St',
    //     },
    // });

    // const store2 = await prisma.store.create({
    //     data: {
    //         name: 'Store 2',
    //         address: '456 Elm St',
    //     },
    // });
    // Seed some products.

    // // Seed some carts.
    // const cart1 = await prisma.cart.create({
    //     data: {
    //         user: { connect: { id: user1.id } },
    //         products: { connect: [{ id: product1.id }, { id: product2.id }] },
    //     },
    // });

    // const cart2 = await prisma.cart.create({
    //     data: {
    //         user: { connect: { id: user2.id } },
    //         products: { connect: [{ id: product2.id }] },
    //     },
    // });

    // // Seed some orders.
    // const order1 = await prisma.order.create({
    //     data: {
    //         user: { connect: { id: user1.id } },
    //         products: { connect: [{ id: product1.id }] },
    //         totalPrice: 10.0,
    //     },
    // });

    // const order2 = await prisma.order.create({
    //     data: {
    //         user: { connect: { id: user2.id } },
    //         products: { connect: [{ id: product2.id }] },
    //         totalPrice: 20.0,
    //     },
    // });

    console.log({
        user1,
        user2,
        productWithVariants,
        // store1,
        // store2,
        // cart1,
        // cart2,
        // order1,
        // order2,
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
