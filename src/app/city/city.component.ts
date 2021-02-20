
import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  providers: [CityService]
})
export class CityComponent implements OnInit {

  constructor(private cityService: CityService) { }
 public cities: City[] | undefined
  ngOnInit() {
    this.cityService.getCities().subscribe(data => {
      this.cities = data

    })

  }
}


