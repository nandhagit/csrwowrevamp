import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {

    static passwordMatch(formGroup: AbstractControl): ValidationErrors | null {
        console.log(formGroup.get('confirmPassword').value);
        if (formGroup.get('password').value === formGroup.get('confirmPassword').value) {
            return null;
        }
        return { passwordMismatch: true };
    }
}
