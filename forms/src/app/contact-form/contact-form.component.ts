import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

    title="Template-driven Forms";
selectInfo=[
      { id: 1, name: 'C++' },
      { id: 2, name: 'JavaScript' },
      { id: 3, name: 'TypeScript' }
      ];

log(x:any){
  console.log(x);
}

onSubmit(f:any){
 console.log(f);
}
submitGr(g:any){
 console.log(g);
}
}

