import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { City } from 'src/app/models/city';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.scss'],
  providers: [CityService]
})
export class CityAddComponent implements OnInit {


  constructor(private cityService: CityService,
    private formBuilder: FormBuilder,
    private alertifyService:AlertifyService,
    private router:Router) { }
  city!: City;
  cityAddForm: FormGroup | any;
  createCityForm() {
    this.cityAddForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        description: ["", Validators.required]
      }
    )

  }
  ngOnInit() {
    this.createCityForm();
  }
  add() {
    if (this.cityAddForm.valid) {
      this.city = Object.assign({}, this.cityAddForm.value)
      //Todo Burdaki Id
      this.city.userId = 1;
      this.cityService.add(this.city)
    }
  }
}

