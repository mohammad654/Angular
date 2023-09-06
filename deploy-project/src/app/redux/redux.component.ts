import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css'],
})
export class ReduxComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      console.log(params.get('id'));
      console.log(params.get('title'));
    });
  }
}
