// import { AbstractControl } from "@angular/forms";

import { ValidationErrors, ValidatorFn } from "@angular/forms"

export const OlderDateValidator = (startingDate: string, endingDate: string): ValidationErrors | null => {
    try {
        const start = new Date(startingDate)
        const end = new Date(endingDate)

        if(start > end) {
            return {'enddateinvalid': true}
        }
        
        return null
    } catch {
        return null
    }
}