import {Router} from "express";

import {getAllProducts} from "../controllers/product.controller";

const router = Router();
router.get('/product', async (req, res) => {
    const product = await getAllProducts();
    if(!product) res.status(403);
    res.json(product.map((product) => ({ ...product, image: product.image.split(',') })));
});


export default router;