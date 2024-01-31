-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "shopify_id" INTEGER NOT NULL,
    "bodyHtml" TEXT,
    "image" TEXT NOT NULL
);
