"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shopify_api_node_1 = require("shopify-api-node");
var config_js_1 = require("../utils/config.js");
var shopify = new shopify_api_node_1.default({
    shopName: config_js_1.config.shopifyShopName,
    accessToken: config_js_1.config.shopifyAccessToken,
});
shopify.product.list({ fields: "id, title, image" }).then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.error(error);
}).finally(function () {
    console.log('nothing');
});
