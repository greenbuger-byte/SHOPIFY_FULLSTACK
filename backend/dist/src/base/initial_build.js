"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shopify_api_node_1 = __importDefault(require("shopify-api-node"));
const config_js_1 = require("../utils/config.js");
const prisma_1 = __importDefault(require("../utils/prisma"));
const shopify = new shopify_api_node_1.default({
    shopName: config_js_1.config.shopifyShopName,
    accessToken: config_js_1.config.shopifyAccessToken,
});
function addProductToDatabase({ shopify_id, title, body_html, image }) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma_1.default.product.create({ data: { title, shopify_id, bodyHtml: body_html, image: image } });
    });
}
shopify.product.list({ fields: "id, title, body_html, images" }).then((result) => {
    prisma_1.default.product.deleteMany()
        .catch((error) => console.error(error))
        .then(() => {
        for (const product of result) {
            const { id: shopify_id, title, body_html, images } = product;
            addProductToDatabase({
                shopify_id: String(shopify_id),
                title,
                body_html,
                image: images.map((imageInList) => imageInList.src).join(',')
            })
                .catch((error) => {
                console.error(error);
                throw Error('CAN\'T UPDATE DATABASE');
            });
        }
    });
}).catch((error) => {
    console.error(error);
});
