// Define the types for the product data and response
export interface Product {
    id: number;
    name: string;
    imageAlt: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    }[];
    returnPolicy: string;
    color: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    imageSrc: string[];
    thumbnail: string;
}

export interface FetchAllProductsResponse {
    data: Product[];
}


export interface SortOption{
    name: string;
    href: string;
    current: boolean;
}

export interface FilterOption{
    value: string;
    label: string;
    checked: boolean;
}

export interface Filter{
    id: string;
    name: string;
    options: FilterOption[];
}

export interface FilterParams{
    key: string;
    value: string;
}