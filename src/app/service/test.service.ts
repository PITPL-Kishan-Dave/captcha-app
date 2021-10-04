import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};
@Injectable({
  providedIn: 'root'
})
export class TestService  {
  

  getTOken(token: string){
    return this.http.get<any>('http://192.168.1.2:8090/avron-api/public/user/recaptcha?g-recaptcha-tkn=' + token)
  }

  userVerify(){
    return this.http.post<any>('https://www.google.com/recaptcha/api2/reload?k=6LeYzKkcAAAAAMzNYjblQNjBqRALe9rhgwcO3ASN',null);
  }

  // getReload(){
  //   return this.http.post('https://www.google.com/recaptcha/api2/reload?k=6LdK3p0cAAAAAPJiFqJqRmFMB3vNfl3QsDv7Hr0i', null);
  // }


 constructor(
    private router: Router,
    private http: HttpClient,
  ) { }
}