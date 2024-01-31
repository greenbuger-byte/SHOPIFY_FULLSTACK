"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
console.log('proc', process.env.SHOPIFY_ACCESS_TOKEN);
exports.config = {
    shopifyAccessToken: String(process.env.SHOPIFY_ACCESS_TOKEN),
    shopifyShopName: String(process.env.SHOPIFY_SHOP_NAME),
    port: String(process.env.APP_PORT)
};
