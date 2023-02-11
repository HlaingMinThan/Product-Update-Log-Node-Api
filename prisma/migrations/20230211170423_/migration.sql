/*
  Warnings:

  - A unique constraint covering the columns `[id,product_id]` on the table `Update` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Update_id_product_id_key` ON `Update`(`id`, `product_id`);
