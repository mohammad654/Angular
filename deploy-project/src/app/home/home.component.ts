import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  inputs:["myInput","input"]
})
export class HomeComponent {

title="data binding";
red="bg-info";
backGround="yellow";

@Input() myInput ="my Input import { Component,Input } ";

input='input  inputs:["myInput","input"]';

onButtonClick(value: string) {
    console.log('Value from input field:', value);
  }
//   Directive
directive?:boolean=false;
isHidden: boolean = false;

users: any[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // ...more items
  ];
 userByName(index: number, user: any): string {
    return user.name;
  }
}
