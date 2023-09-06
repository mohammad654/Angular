import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
})
export class MaterialComponent implements OnInit {
  isChecked = true;
  onChange(event: any) {
    console.log(event);
  }
  //   selecte
  toppingList: any = [
    { id: 1, language: 'js' },
    { id: 2, language: 'java' },
    { id: 3, language: 'c++' },
    { id: 4, language: 'c#' },
  ];
  selectedLanguages: number[] = [3];
  // input
  value = 'Clear me';
  //  date
  tooltipText = 'Click for more information';

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {}
}
