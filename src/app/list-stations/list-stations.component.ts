import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-list-stations',
  templateUrl: './list-stations.component.html',
  styleUrls: ['./list-stations.component.css']
})
export class ListStationsComponent implements OnInit {

  stations:any;

 
  constructor(private stationService:StationService) { }

  ngOnInit(): void {
    this.getStations();
  }
  private getStations(){
    this.stationService.getStationList().subscribe(data =>{
      this.stations= data;
    });
  }

}
