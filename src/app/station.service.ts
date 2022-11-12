import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{observable, Observable}from 'rxjs'
import { Station } from './station';


@Injectable({
  providedIn: 'root'
})
export class StationService {

private getURL="http://localhost:8080/api/tripScheduling/stationR";
private updateURL="http://localhost:8080/api/tripScheduling/stationU";
private deleteURL="http://localhost:8080/api/tripScheduling/stationD";

  
  constructor(private http:HttpClient) { }
  getStationList():Observable<object>{
    return this.http.get("http://localhost:8080/api/tripScheduling/stationR");
  }
  makeStation(station:Station):Observable<Object>{
    return this.http.post("http://localhost:8080/api/tripScheduling/stationC",station);
  }
  getStationbyId(id:number):Observable<Station>{
    return this.http.get<Station>(`${this.getURL}/${id}`);
  }
  updateStation(id:number,station:Station):Observable<Object>{
    return this.http.put(`${this.updateURL}/${id}`,station);
  }
  DeleteStation(id:number):Observable<Object>{
    return this.http.delete(`${this.deleteURL}/${id}`);
  }
}
