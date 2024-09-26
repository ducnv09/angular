import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../Models/product.model';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrl: './shopping-cart-summary.component.css'
})
export class ShoppingCartSummaryComponent implements OnInit {
  
  @Input() subTotal: number;//nhận dữ liệu từ cha
  @Input() tax: number; 
  @Input() discount: number;

  //The constructor injects the ProductService into the component.
  // products sẽ được khởi tạo ngay khi instance của component được tạo ra.
  constructor(private productService: ProductService) {}

  products: Product[];

  // ngOnInit được gọi ngay sau khi Angular đã khởi tạo tất cả các input bindings của component 
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  // promo code
  promoCode: string;

  @Output() onApplyPromoCode = new EventEmitter();

  applyPromoCode() {
    const code = this.promoCode;

    if (code && code.trim() !== '') {
      this.onApplyPromoCode.emit(code);
    }
  }
}
