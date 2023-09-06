import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  jsonData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.jsonData = data;
    });
  }
}
