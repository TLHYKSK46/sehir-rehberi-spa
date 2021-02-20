import { AppRoutingModule } from './app-routing.module';
//import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    CityComponent,
    CityDetailComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
