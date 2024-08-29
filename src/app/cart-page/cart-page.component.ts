import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
cart!: Cart;
constructor(private cartService: CartService){
  this.setCart();
}
setCart() {
  this.cart = this.cartService.getCart();
}
}
