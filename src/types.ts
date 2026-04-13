// types.ts

// Interface for Product
export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

// Interface for Client
export interface Client {
    id: number;
    name: string;
    email: string;
    phone?: string;
}

// Interface for Sale
export interface Sale {
    id: number;
    productId: number;
    clientId: number;
    quantity: number;
    date: Date;
}

// Interface for Payment
export interface Payment {
    id: number;
    saleId: number;
    amount: number;
    method: string;
    date: Date;
}