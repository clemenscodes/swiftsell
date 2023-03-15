import { PrismaClient } from '@prisma/api';

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

    // // Seed some stores.
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
    const product1 = await prisma.product.create({
        data: {
            name: 'Product 1',
            description: 'This is product 1',
            price: 10.0,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
            // storeId: store1.id,
            // inventory: {
            //     create: { quantity: 10, storeId: store1.id },
            // },
        },
    });

    const product2 = await prisma.product.create({
        data: {
            name: 'Product 2',
            description: 'This is product 2',
            price: 20.0,
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
            // storeId: store2.id,
            // inventory: {
            //     create: { quantity: 5, storeId: store2.id },
            // },
        },
    });

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
        product1,
        product2,
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
