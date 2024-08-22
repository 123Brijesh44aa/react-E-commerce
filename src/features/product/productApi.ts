import {FetchAllProductsResponse, FilterParams, Product} from "../../utils/types";

export function fetchAllProducts(): Promise<FetchAllProductsResponse>{
    return new Promise(async (resolve) => {
        // Todo: we will not hard-code server url here
        const response: Response = await fetch("http://localhost:8080/products/");
        const data: Product[] = await response.json();
        resolve({data})
    });
}


export function fetchProductsByFilters(filter: FilterParams[]): Promise<FetchAllProductsResponse>{

    // filter = {"category":"smartphone"}
    let queryString = "";
    for (let key in filter){
        queryString += `${key}=${filter[key]}&`
    }

    return new Promise(async (resolve) => {
        // Todo: we will not hard-code server url here
        const response: Response = await fetch("http://localhost:8080/products?"+queryString);
        console.log("QueryString is  http://localhost:8080/products?"+queryString);
        const data: Product[] = await response.json();
        resolve({data})
    });
}