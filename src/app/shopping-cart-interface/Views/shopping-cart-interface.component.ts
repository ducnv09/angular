import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from '../Models/product.model';
import { PromoCode } from '../Models/promo-code.model';
import { ProductService } from '../Services/product.service';
import { PromoCodeService } from '../Services/promo-code.service';

@Component({
  selector: 'app-shopping-cart-interface',
  templateUrl: './shopping-cart-interface.component.html',
  styleUrl: './shopping-cart-interface.component.css'
})
export class ShoppingCartInterfaceComponent implements DoCheck, OnInit {
  products: Product[];

  numberItems: number = 0;
  subTotal: number = 0;
  discountPercent: number = 0;
  discount: number = 0;
  taxPercent: number = 10;
  tax: number = 0;

  constructor(
    private productService: ProductService,
    private promoCodeService: PromoCodeService
  ) {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
  }

  ngDoCheck(): void {
    this.numberItems = 0;
    this.subTotal = 0;

    for (let product of this.products) {
      this.numberItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }

    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
  }

  // handleUpdateQuantity(product: Product) {
  handleUpdateQuantity(product: {id: number; quantity: number}) {
    this.productService.updateQuantity(product.id, product.quantity);
  }

  handleRemoveProduct(id: number) {
    this.productService.removeProduct(id);
  }

  handleApplyPromoCode(code: string) {
    this.discountPercent = this.promoCodeService.applyPromoCode(code);
    this.discount = (this.subTotal * this.discountPercent) / 100;

    if (this.discount > 0) {
      alert(`The promotional code was applied`);
    } else {
      alert('Code is not exit');
    }
  }
}
