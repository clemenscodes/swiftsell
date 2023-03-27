DO $$
DECLARE product_id NUMERIC;
DECLARE variant_id NUMERIC;

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
        'Very fit in black',
        10.0,
        'Black',
        NOW(),
        NOW(),
        NULL
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
        '/img/products/applewatch/black/cover.jpeg',
        product_id
    ),
    (
        '/img/products/applewatch/black/dual.jpeg',
        product_id
    );

END $$;