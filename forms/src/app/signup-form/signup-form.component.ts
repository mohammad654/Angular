import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

import { UserNameValidators } from './user-name-validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  title="Reactive Forms";

form= new FormGroup({
'username':new FormControl('',[
Validators.required,
Validators.minLength(3),
UserNameValidators.cannotContainSpace,
UserNameValidators.shouldBeUnique,
]),

'password':new FormControl('',Validators.required)

});
get username(){
return this.form.get('username');
}

login() {
  this.form.setErrors({
    invalidLogin: true
  });
}

}



//
// loginForm =new FormGroup({
// username:new FormControl(),
// password:new FormControl(),
// });

