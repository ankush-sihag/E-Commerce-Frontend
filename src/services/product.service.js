import { getAllProducts } from "../api/product.api";

export const fetchProducts = async () => {
    try {
        return await getAllProducts();
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};