
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from './trip';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripService {

private getURL='http://localhost:'+environment.apiUrl+'/api/tripScheduling/tripR';
private updateURL='http://localhost:'+environment.apiUrl+'/api/tripScheduling/tripU';
private deleteURL='http://localhost:'+environment.apiUrl+'/api/tripScheduling/tripD';

  constructor(private http: HttpClient) { }

  listAllTrips(): Observable<object>{
    return this.http.get('http://localhost:'+environment.apiUrl+'/api/tripScheduling/tripR');
  }

  makeTrip(trip:Trip):Observable<Object>{
    return this.http.post('http://localhost:'+environment.apiUrl+'/api/tripScheduling/tripC',trip);
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
