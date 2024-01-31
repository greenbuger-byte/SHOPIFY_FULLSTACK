/*
  Warnings:

  - You are about to alter the column `shopify_id` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "shopify_id" BIGINT NOT NULL,
    "bodyHtml" TEXT,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Product" ("bodyHtml", "id", "image", "shopify_id", "title") SELECT "bodyHtml", "id", "image", "shopify_id", "title" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
