import { Component,OnInit} from '@angular/core';
import {PhotoService} from "../photo/photo.service"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent  implements OnInit {
title:string ="Info";
photos?: any;
id: any;

  constructor(private photo: PhotoService, private route: ActivatedRoute){}

 ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
  this.id = Number(this.id) - 1;
    this.photo.getData().subscribe(data => {
          this.photos =data;
          console.log( this.photos );
        });
  }

}
