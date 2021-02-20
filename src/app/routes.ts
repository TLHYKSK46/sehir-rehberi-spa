import { Routes } from "@angular/router";
import { CityDetailComponent } from "./city-detail/city-detail.component";
import { CityComponent } from "./city/city.component";
import { ValueComponent } from "./value/value.component";

export const appRoutes:Routes= [
  {path:"cityDetail/:cityId",component:CityDetailComponent},//parametre alan sayfalara gidebilmek için böyle yazılır..
  {path:"city",component:CityComponent},
  {path:"value",component:ValueComponent},
  {path:"**",redirectTo:"city",pathMatch:"full"}

];

