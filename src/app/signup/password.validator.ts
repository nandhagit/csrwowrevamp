import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {

    static passwordMatch(formGroup: AbstractControl): ValidationErrors | null {
        if (formGroup.get('signinpassword').value === formGroup.get('confirmPassword').value) {
            return null;
        }
        return { passwordMismatch: true };
    }
}
