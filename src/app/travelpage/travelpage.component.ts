import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { trips } from '../trips';

@Component({
  selector: 'app-travelpage',
  templateUrl: './travelpage.component.html',
  styleUrls: ['./travelpage.component.css']
})
export class TravelpageComponent implements OnInit {
  trip;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  addToCart(trip) {
    window.alert('Your trip has been added to the cart!');
    this.cartService.addToCart(trip);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.trip = trips[+params.get('tripsId')];
   });

  }

}
