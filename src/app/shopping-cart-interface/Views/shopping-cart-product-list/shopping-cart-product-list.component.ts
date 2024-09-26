import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../Models/product.model';



@Component({
  selector: 'app-shopping-cart-product-list',
  templateUrl: './shopping-cart-product-list.component.html',
  styleUrl: './shopping-cart-product-list.component.css'
})
export class ShoppingCartProductListComponent {
  @Input() products: Product[] = [];

  @Output() onRemoveProduct = new EventEmitter(); //cho phép truyền sự kiện đến component cha
  @Output() onUpdateQuantity = new EventEmitter();


  removeProduct(productId: number): void { //ko có dữ liệu trả về
    this.onRemoveProduct.emit(productId);
  }

  inputQuantity(id: number, inputElement: HTMLInputElement) {
    const value = inputElement.value;
    const intValue = parseInt(value);

    if (intValue < 1) {
      inputElement.value = -intValue + '';
    } else if (value.length > 2) {
      inputElement.value = value.slice(0, 2); //lấy 2 chữ số đầu
    }

    this.onUpdateQuantity.emit({ id, quantity: parseInt(inputElement.value) || ''});
  }
}