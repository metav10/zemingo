export interface ItemInterface {
    name: string;
    quantity: number;
};

export interface ProductInterface {
    name: string;
};

export interface AddProductInterface {
    res: ProductInterface[] | Error;
    status: boolean;
}