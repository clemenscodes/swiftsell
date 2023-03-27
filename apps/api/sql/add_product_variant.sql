DO $$
DECLARE parent_id NUMERIC; -- The id of the product to add a variant for
DECLARE product_id NUMERIC; -- The id of the product variant

BEGIN
INSERT INTO
    "Product" (
        "name",
        "description",
        "price",
        "color",
        "createdAt",
        "updatedAt",
        "parentId"
    )
VALUES
    (
        'Applewatch',
        'Very fit in blue',
        12.0,
        'Blue',
        NOW(),
        NOW(),
        parent_id
    ) RETURNING "id" INTO product_id;

INSERT INTO
    "ProductSize" ("size", "productId")
VALUES
    ('XS', product_id),
    ('S', product_id),
    ('M', product_id),
    ('L', product_id),
    ('XL', product_id),
    ('XXL', product_id);

INSERT INTO
    "Image" ("url", "productId")
VALUES
    (
        '/img/products/applewatch/blue/cover.jpeg',
        product_id
    ),
    (
        '/img/products/applewatch/black/darkblue.png',
        product_id
    ),
    (
        '/img/products/applewatch/black/sport.jpeg',
        product_id
    ),
    (
        '/img/products/applewatch/blue/watchless.jpeg',
        product_id
    ),
    (
        '/img/products/applewatch/blue/wrist.jpeg',
        product_id
    );

END $$;
