import { AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class PhoneEmailValidator {

    static shouldBeUnique(formcontrol: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(formcontrol.value);
                if (formcontrol.value === '9843514822') {
                    resolve({shouldBeUnique: true});
                } else {
                 resolve(null);
                }
            }, 2000);
        });
    }


}
