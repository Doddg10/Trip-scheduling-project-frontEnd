
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

private baseURL="http://localhost:8080/api/tripScheduling/tripR";

  constructor(private http: HttpClient) { }

  listAllTrips(): Observable<object>{
    return this.http.get("http://localhost:8080/api/tripScheduling/tripR");
  }

  makeTrip(trip:Trip):Observable<Object>{
    return this.http.post("http://localhost:8080/api/tripScheduling/tripC",trip);
  }
}
