import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import { CityService } from '../services/city.service';
import { ActivatedRoute } from "@angular/router";

import { Photo } from '../models/Photo';




@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss'],
  providers: [CityService]
})
export class CityDetailComponent implements OnInit {

  city!: City;
  photos: Photo[] = [];
  constructor(private cityService: CityService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.getCityById(params["cityId"])
    });


  }

  getCityById(cityId: number) {
    this.cityService.getCityById(cityId).subscribe(data => {
      this.city = data;
    })

  }
  getPhotosByCity(cityId: any) {
    this.cityService.getPhotosByCity(cityId).subscribe(data => {
      this.photos = data;
     // this.setGalery();
    });
  }
  getImages() {
    const imageUrls = []
    for (let i = 0; i < this.city.photos.length; i++) {
      imageUrls.push({
        small: this.city.photos[i].url,
        medium: this.city.photos[i].url,
        big: this.city.photos[i].url

      });
    }
    return imageUrls;
  }
  //galery için gerekli olan kodlamalar
  // setGalery() {

  //   this.galleryOptions = [
  //     {
  //       previewZoom: true,
  //       previewRotate: true
  //     },
  //     {
  //       breakpoint: 500,
  //       width: '300px',
  //       height: '300px',
  //       thumbnailsColumns: 3,
  //     },
  //     {
  //       breakpoint: 300,
  //       width: '300%',
  //       height: '200px',
  //       thumbnailsColumns: 2,
  //     },
  //     {
  //       width: '600px',
  //       height: '400px',
  //       thumbnailsColumns: 4,
  //       imageAnimation: NgxGalleryAnimation.Slide
  //     },
  //     // max-width 800
  //     {
  //       breakpoint: 800,
  //       width: '100%',
  //       height: '600px',
  //       imagePercent: 80,
  //       thumbnailsPercent: 20,
  //       thumbnailsMargin: 20,
  //       thumbnailMargin: 20
  //     },
  //     // max-width 400
  //     {
  //       breakpoint: 400,
  //       preview: false
  //     }
  //   ];

  //   this.galleryImages = this.getImages();
  // }

}
