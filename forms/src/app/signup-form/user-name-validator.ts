import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UserNameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
    static shouldBeUnique(control: AbstractControl):ValidationErrors | null {
      if (control.value=="mohammad")
        return { shouldBeUnique: true };
      else
          return null;
    }

    // static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         console.log(111);
    //         if (control.value == 'mohammad') {
    //           resolve({ shouldBeUnique: true });
    //         } else {
    //           resolve(null); // Resolve with null, not reject, as it's not an error case.
    //         }
    //       }, 2000);
    //     });
    //   }


}
