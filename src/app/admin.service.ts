import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

headers: new HttpHeaders({
  //'Content-Type':  'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Origin': '*'
})

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  constructor(private _http: HttpClient ) { }
  
  public loginAdminFromRemote(admin :Admin):Observable<object>{
    
   return this._http.post<Admin>('http://localhost:'+environment.apiUrl+'/api/tripScheduling/signIn',admin);
    
  }
  public signupAdminFromRemote(admin :Admin):Observable<any>
  {
    
   return this._http.post<any>('http://localhost:'+environment.apiUrl+'/api/tripScheduling/signUp',admin);
  }
}
