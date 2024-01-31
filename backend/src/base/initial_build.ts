import Shopify from 'shopify-api-node';
import type {IPaginatedResult, IProduct} from 'shopify-api-node';
import { config } from '../utils/config.js';
import client from "../utils/prisma";

const shopify = new Shopify({   
    shopName: config.shopifyShopName,
    accessToken: config.shopifyAccessToken,
});

async function addProductToDatabase ({shopify_id, title, body_html, image} :
                                         { shopify_id: string, title: string, body_html: string, image: string }){
    await client.product.create({ data: { title, shopify_id, bodyHtml: body_html, image: image }})
}
shopify.product.list({ fields: "id, title, body_html, images"}).then((result: IPaginatedResult<IProduct>) => {
    client.product.deleteMany()
        .catch((error) => console.error(error))
        .then(() => {
            for (const product of result){
                const {id: shopify_id, title,body_html, image, images} = product;
                addProductToDatabase({
                    shopify_id: String(shopify_id),
                    title,
                    body_html,
                    image: images.map((imageInList) => imageInList.src ).join(',')}
                )
                    .catch((error) => {
                        console.error(error);
                        throw Error('CAN\'T UPDATE DATABASE');
                    });
            }
    });
}).catch((error) => {
    console.error(error);
});
