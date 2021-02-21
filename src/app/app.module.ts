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
import { CityAddComponent } from './city/city-add/city-add.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    CityComponent,
    CityDetailComponent,
    CityAddComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
