import 'dotenv/config';

type ConfigKeys = 'shopifyAccessToken' | 'shopifyShopName' | 'port';

export const config: Record<ConfigKeys, string> = {
    shopifyAccessToken: String(process.env.SHOPIFY_ACCESS_TOKEN),
    shopifyShopName: String(process.env.SHOPIFY_SHOP_NAME),
    port: String(process.env.APP_PORT)
};