
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

private getURL="http://localhost:8080/api/tripScheduling/tripR";
private updateURL="http://localhost:8080/api/tripScheduling/tripU";
private deleteURL="http://localhost:8080/api/tripScheduling/tripD";

  constructor(private http: HttpClient) { }

  listAllTrips(): Observable<object>{
    return this.http.get("http://localhost:8080/api/tripScheduling/tripR");
  }

  makeTrip(trip:Trip):Observable<Object>{
    return this.http.post("http://localhost:8080/api/tripScheduling/tripC",trip);
  }

  getTripbyId(id:number):Observable<Trip>{
    return this.http.get<Trip>(`${this.getURL}/${id}`);
  }

  updateTrip(id:number,trip:Trip):Observable<Object>{
    return this.http.put(`${this.updateURL}/${id}`,trip);
  }

  deleteTrip(id:number):Observable<Object>{
    return this.http.delete(`${this.deleteURL}/${id}`);
  }
}
