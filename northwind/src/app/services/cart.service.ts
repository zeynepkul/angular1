import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


addToCart(product:Todo){
  let item = CartItems.find(c=>c.product.id===product.id)
  if(item){
    item.quantity+=1;
  }else{
    let cartItem = new CartItem();
    cartItem.quantity=1;
    cartItem.product=product;
    CartItems.push(cartItem);
  }
}

list():CartItem[]{
  return CartItems;
}

removeFromCart(product:Todo){
  let item:CartItem = CartItems.find(c=>c.product.id===product.id)
  CartItems.splice(CartItems.indexOf(item),1);

}

}
