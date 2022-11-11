import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{observable, Observable}from 'rxjs'
import { Station } from './station';


@Injectable({
  providedIn: 'root'
})
export class StationService {

  private baseURL ="http://localhost:8080/api/tripScheduling/stationR"
  
  constructor(private http:HttpClient) { }
  getStationList():Observable<object>{
    return this.http.get("http://localhost:8080/api/tripScheduling/stationR");
  }
  makeStation(station:Station):Observable<Object>{
    return this.http.post("http://localhost:8080/api/tripScheduling/stationC",station);
  }
  getStationbyId(id:number):Observable<object>{
    return this.http.get("http://localhost:8080/api/tripScheduling/stationR");
  }
}
