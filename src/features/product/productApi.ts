import {FetchAllProductsResponse, Product} from "../../utils/types";

export function fetchAllProducts(): Promise<FetchAllProductsResponse>{
    return new Promise(async (resolve) => {
        // Todo: we will not hard-code server url here
        const response: Response = await fetch("http://localhost:8080/products/");
        const data: Product[] = await response.json();
        resolve({data})
    });
}