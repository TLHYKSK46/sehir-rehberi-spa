import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';

import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterUser } from '../models/registerUser';
import { tokenName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService) { }
  path = "https://localhost:44309/api/auth/";
  userToken: any;
  TOKEN_KEY = "token";
  decodedToken: any;
  key:any
  jwtHelperService = new JwtHelperService();
  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient.post<{ tokenString: string }>(this.path + "login", loginUser, { headers: headers })
      .subscribe(data => {
        //post<{id:string,tokenString:string}>yukarısı böyle birden fazla değer alabilir..
        //let id :number=+data['id'];
        this.saveToken(data['tokenString']);
        this.userToken = data['tokenString'];
        this.decodedToken = this.jwtHelperService.decodeToken(data['tokenString'])
        this.alertifyService.success("Sisteme Başarıyla Giriş Yapıldı!")
        this.router.navigateByUrl('/city')

      })
  }
  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient.post(this.path + "register", registerUser, { headers: headers })
      .subscribe(data => {

      })

  }
  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token)
  }
  //oturum kapatmaya yarar
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  //kullanıcı hala online mı?
  loggedIn() {
    return this.jwtHelperService.isTokenExpired(this.TOKEN_KEY);
  }
get token(){
  return localStorage.getItem(this.TOKEN_KEY);
}
  getCurrentUserId(){
  this.jwtHelperService.decodeToken(this.TOKEN_KEY)
   return this.jwtHelperService.decodeToken(this.TOKEN_KEY).nameid;
  }

}
