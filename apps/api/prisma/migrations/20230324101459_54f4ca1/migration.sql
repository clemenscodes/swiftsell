/*
  Warnings:

  - You are about to drop the `Variant` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL');

-- CreateEnum
CREATE TYPE "Color" AS ENUM ('Black', 'Blue', 'Green', 'Lightblue', 'White');

-- DropForeignKey
ALTER TABLE "Variant" DROP CONSTRAINT "Variant_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "color" "Color",
ADD COLUMN     "parentId" INTEGER,
ADD COLUMN     "size" "Size";

-- DropTable
DROP TABLE "Variant";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
