-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "shopify_id" TEXT NOT NULL,
    "bodyHtml" TEXT,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Product" ("bodyHtml", "id", "image", "shopify_id", "title") SELECT "bodyHtml", "id", "image", "shopify_id", "title" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
