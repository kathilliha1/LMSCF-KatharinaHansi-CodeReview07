import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
    constructor(private cartService: CartService, private formBuilder: FormBuilder) {
      this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    }); }
    ngOnInit() {
      this.items = this.cartService.getItems();
    }
      onSubmit(customerData) {
        // Process checkout data here
        console.warn('Your trip has been added to the cart', customerData);
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset(alert('enjoy your trip'));
      }
      plus(i: string | number) {
        this.items[i].quantity++;
        this.items[i].total = this.items[i].quantity * this.items[i].price;
    }
      minus(i: string | number) {
        if (this.items[i].quantity === 1) {
          this.items[i].quantity = 0;
          this.items.splice(i, 1);
        } else {
          this.items[i].quantity--;
        }
      }
      removeItem(i: string | number) {
        this.items[i].quantity = 0;
        this.items.splice(i, 1 );
      }
      total() {
        let total = 0;
        for (let i of this.items) {
          total += i.total;
          console.log(total);
        }
      }
  }
