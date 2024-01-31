import {Product} from "@prisma/client";
import client from "../utils/prisma";

export async function getAllProducts(){
    return  await client.product.findMany() as unknown as Product[];
}