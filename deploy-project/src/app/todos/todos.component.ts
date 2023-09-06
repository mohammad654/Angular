import { Component } from '@angular/core';
import { fade ,slide} from './animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
    animations: [
        fade,
        ,slide
    ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call  ',
    'Apply '];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item:any) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}
