import express from 'express';
import {config} from './src/utils/config';
import productRouter from "./src/routers/product.router";

const {port} = config;
const app = express();

app.use('/api', productRouter);

app.listen(port, () => {
    console.log(`🚀 SERVER STARTED ON PORT ${port}`);
});
