import { Component, OnInit } from '@angular/core';

import {PhotoService} from "./photo.service"
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
photos?: any;
title:string ="Photo";
  constructor(private photo: PhotoService) {}
 ngOnInit(): void {
this.photo.getData().subscribe(data => {
      this.photos =data;
      console.log( this.photos );
    });
    //  console.log(this.photo.getData());
    //       console.log(this.photos);

  }
}
