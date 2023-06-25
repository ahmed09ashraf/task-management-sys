import {Injectable, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  loginUser: any;
  constructor(private http:HttpClient) { }

  private headers = new HttpHeaders({
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('auth-token'))}`
  });

  private apiUrl = "http://localhost:8000/users";


  GetLoginUser() {
    return this.http.get(this.apiUrl+'/get/info', {headers: this.headers});
  }

  GetAllUserDetails(name:string) {
    return this.http.get(this.apiUrl+'/'+name, {headers: this.headers});
  }

  GetUserById(id:any) {
    return this.http.get(this.apiUrl + "/" + id);
  }

}
