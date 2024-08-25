export type IProducts = {
    _id: string,
    name: string;
    price: number;
    description: string;
    stock: number;
    images: string;
    quantity?: number;
    category?: any;
    createdAt?: Date
    updatedAt?: Date
}