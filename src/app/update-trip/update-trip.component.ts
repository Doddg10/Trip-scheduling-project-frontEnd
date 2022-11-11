import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {
  trip : Trip = new Trip();
  constructor(private tripService:TripService) { }

  ngOnInit(): void {
  }

}
