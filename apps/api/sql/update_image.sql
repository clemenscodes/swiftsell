UPDATE "Image"
SET "url" = CASE
    WHEN "url" = '/img/products/applewatch/blue/new_cover.jpeg' THEN '/img/products/applewatch/blue/cover.jpeg'
END
WHERE "productId" = 7;