import { Injectable } from "@angular/core";
import { Product } from "../Models/product.model";

@Injectable({
    providedIn: 'root' //sẽ có một instance duy nhất được chia sẻ khắp ứng dụng (singleton).
})
export class ProductService {
    // tạo state là 1 mảng chứa các đối tượng
    products: Product[] = [
        {
            id: 1,
            name: 'Iphone 15',
            description: 'Fake 1 rep 100000',
            thumbnail: '/assets/img/iphone-15-pro-max_3.webp',
            price: 5.99,
            quantity: 2
        },
        {
            id: 2,
            name: 'Iphone 14',
            description: 'Fake 2 rep 200000',
            thumbnail: '/assets/img/iphone-15-plus_1__1.webp',
            price: 9.99,
            quantity: 1
        }
    ];

    getProducts(): Product[] {
        return this.products;
    }

    findById(id: number): Product {
        return this.products.find(product => product.id === id)!;
    }

    findIndexById(id: number): number {
        return this.products.findIndex(product => product.id === id);
    }

    updateQuantity(id: number, quantity: number): void {
        const product = this.findById(id);
        if (product) {
            product.quantity = quantity || 0; //nếu quantity không hợp lệ thì đặt là 0
        }
    }

    removeProduct(id: number): boolean {
        const index = this.findIndexById(id);
        if (index !== -1) {
            this.products.splice(index, 1);
            return true;
        }

        return false;
    }
    
}