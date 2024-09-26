import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-header',
  templateUrl: './shopping-cart-header.component.html',
  styleUrl: './shopping-cart-header.component.css'
})
export class ShoppingCartHeaderComponent {
  @Input() numberItems: number;
}
