import { Injectable, Injector, NgModule } from '@angular/core';
import 'reflect-metadata';

class ProductModel {
    sku: string;
    name: string;
    price: number;
}

interface CartItem {
    product: ProductModel;
    quantity: number;
}

class CartService2 {
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
        return this.selectedProducts.reduce((total, item) => item.product.price * item.quantity + total, 0);
    }
    addToCart(): void {
        // logic here
    }
}

class ProductComponent2 {
    // cartService: CartService = new CartService();
    // constructor(public cartService: CartService = new CartService()) {}
    constructor(public cartService: CartService2) { }
}

// const productComponet = new ProductComponent();
// console.log(productComponet);

const cartService = new CartService2();
const productComponet = new ProductComponent2(cartService);

// cách 2: tạo interface

interface ICartService {
    selectedProducts: CartItem[];
    calculateTotal(): number;
    addToCart(): void;
}

class CartService1 implements ICartService {
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
        return this.selectedProducts.reduce((total, item) => item.product.price * item.quantity + total, 0);
    }
    addToCart(): void {
        // logic here
    }
}

class ProductComponent1 {
    constructor(public cartService: ICartService) { }
}

const cartService1 = new CartService1();
const productComponet1 = new ProductComponent1(cartService1);

class MockCartService implements ICartService {
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
        return 1;// mocked data
    }
    addToCart(): void {
        // logic here mocked
    }
}

const mockCartService = new MockCartService();
const anotherProductComponentForTest = new ProductComponent1(mockCartService);

// thư viện tysringe

import 'reflect-metadata';
import { singleton, scoped, Lifecycle, container } from 'tsyringe';

interface ProductModel {
    sku: string;
    name: string;
    price: number;
}

interface CartItem {
    product: ProductModel;
    quantity: number;
}

@singleton()
class CartService {
    cartServiceRandomId = Math.random();
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
        return this.selectedProducts.reduce((total, item) => (item.product.price * item.quantity) + total, 0);
    }
    addToCart(): void {
        //logic here
    }
}

@scoped(Lifecycle.ResolutionScoped)
class ProductComponent { //Thành phần này chịu trách nhiệm cho một phần giao diện người dùng trong ứng dụng.
    productComponentRandomId = Math.random();
    constructor(public cartService: CartService) { }
}

function testContainer() {
    console.log(container.resolve(ProductComponent));
}

testContainer();
testContainer();
testContainer();
testContainer();
// => dùng chung 1 instance của CartService

class TestCartService {
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
        return this.selectedProducts.reduce((total, item) => (item.product.price * item.quantity) + total, 0);
    }
    addToCart(): void {
        //logic here
    }
}

function setupTestContainer() {
    container.register(CartService, { useClass: TestCartService });
}

setupTestContainer();
testContainer();

// 
@Injectable({
    providedIn: 'root'
})
export class CartService3 {

}

@Injectable()
export class CartExtService {
    calculateTotal(): number {
        // call external datasource
        // return data from exteral datasource
        return Math.random() * 100;
    }
    addToCart(): void {
        // logic here
    }
}

// chỉ cần có thế và có thể tiến hành override, mà không cần sửa đổi lại code của ProductComponent
@NgModule({
    // other metadata
    providers: [
        {
            provide: CartService,
            useClass: CartExtService,
        },
    ],
})
export class AppModule { }

// Hoặc có thể override vào @Injectable của service
@Injectable({
    providedIn: 'root',
    useClass: CartExtService,
})
export class CartService4 {
    // logic here
}