import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { City } from '../models/city';
import { Photo } from '../models/Photo';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {


  constructor(private httpClient: HttpClient,
    private alertifyService:AlertifyService,
    private router:Router) { }

  path = "https://localhost:44309/api/";
  getCities(): Observable<City[]> {

    return this.httpClient.get<City[]>(this.path + "cities");
  }
  getCityById(cityId:number):Observable<City>{
return this.httpClient.get<City>(this.path+"cities/detail/?="+cityId);

  }
  //https://localhost:44309/api/cities/detail/?=1
  getPhotosByCity(cityId:number):Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(this.path+"cities/photos/?="+cityId);
  }
id:number | 0 | undefined;

  add(city:City)
  {

    this.httpClient.post<{id:string}>(this.path+'cities/add',city).subscribe(data=>{

      this.alertifyService.success("Şehir Başarayla Eklendi.");
      this.router.navigateByUrl('cityDetail/'+data['id']); //burayı sayfaya yönlendirme yapmak için yazdık ama olmadoı hata var

    });
  }
}
