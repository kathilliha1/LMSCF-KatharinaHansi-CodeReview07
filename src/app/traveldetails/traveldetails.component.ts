import { Component, OnInit } from '@angular/core';
import { trips } from '../trips';

@Component({
  selector: 'app-traveldetails',
  templateUrl: './traveldetails.component.html',
  styleUrls: ['./traveldetails.component.css']
})
export class TraveldetailsComponent implements OnInit {
trips = trips;
  constructor() { }

  ngOnInit(): void {
  }

}
