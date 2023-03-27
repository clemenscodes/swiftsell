DO $$
DECLARE parentId NUMERIC;
DECLARE productId NUMERIC;

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
    ) RETURNING "id" INTO parentId;

INSERT INTO
    "ProductSize" ("size", "productId")
VALUES
    ('XS', parentId),
    ('S', parentId),
    ('M', parentId),
    ('L', parentId),
    ('XL', parentId),
    ('XXL', parentId);

INSERT INTO
    "Image" ("url", "productId")
VALUES
    (
        '/img/products/applewatch/black/cover.jpeg',
        parentId
    ),
    (
        '/img/products/applewatch/black/dual.jpeg',
        parentId
    );

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
        parentId
    ) RETURNING "id" INTO productId;

INSERT INTO
    "ProductSize" ("size", "productId")
VALUES
    ('XS', productId),
    ('S', productId),
    ('M', productId),
    ('L', productId),
    ('XL', productId),
    ('XXL', productId);

INSERT INTO
    "Image" ("url", "productId")
VALUES
    (
        '/img/products/applewatch/blue/cover.jpeg',
        productId
    ),
    (
        '/img/products/applewatch/blue/sport.jpeg',
        productId
    ),
    (
        '/img/products/applewatch/blue/watchless.jpeg',
        productId
    ),
    (
        '/img/products/applewatch/blue/wrist.jpeg',
        productId
    ),
    (
        '/img/products/applewatch/blue/darkblue.png',
        productId
    );

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
        'Very fit in green',
        12.0,
        'Green',
        NOW(),
        NOW(),
        parentId
    ) RETURNING "id" INTO productId;

INSERT INTO
    "ProductSize" ("size", "productId")
VALUES
    ('XS', productId),
    ('S', productId),
    ('M', productId),
    ('L', productId),
    ('XL', productId),
    ('XXL', productId);

INSERT INTO
    "Image" ("url", "productId")
VALUES
    (
        '/img/products/applewatch/green/cover.jpeg',
        productId
    ),
    (
        '/img/products/applewatch/green/wrist.jpeg',
        productId
    ),
    (
        '/img/products/applewatch/green/green.png',
        productId
    );

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
        'Very fit in lightblue',
        12.0,
        'Lightblue',
        NOW(),
        NOW(),
        parentId
    ) RETURNING "id" INTO productId;

INSERT INTO
    "ProductSize" ("size", "productId")
VALUES
    ('XS', productId),
    ('S', productId),
    ('M', productId),
    ('L', productId),
    ('XL', productId),
    ('XXL', productId);

INSERT INTO
    "Image" ("url", "productId")
VALUES
    (
        '/img/products/applewatch/lightblue/cover.jpeg',
        productId
    );

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
        'Very fit in white',
        12.0,
        'White',
        NOW(),
        NOW(),
        parentId
    ) RETURNING "id" INTO productId;

INSERT INTO
    "ProductSize" ("size", "productId")
VALUES
    ('XS', productId),
    ('S', productId),
    ('M', productId),
    ('L', productId),
    ('XL', productId),
    ('XXL', productId);

INSERT INTO
    "Image" ("url", "productId")
VALUES
    (
        '/img/products/applewatch/white/cover.jpeg',
        productId
    ),
    (
        '/img/products/applewatch/white/front.jpeg',
        productId
    ),
    (
        '/img/products/applewatch/white/wrist.jpeg',
        productId
    );

END $$;
