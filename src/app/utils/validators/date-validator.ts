import { AbstractControl } from "@angular/forms";

export const CurrentDateValidator = (control: AbstractControl): {currentdate: true} | null => {
    if(control.value === "" || control.value === null) return null
    try {
        const date = new Date(control.value)
        const todayDate = new Date()
        if(Math.floor(date.getTime()/(1000*60*60*24)) - Math.floor(todayDate.getTime()/(1000*60*60*24)) >= 0) {
            return null
        }
        return {currentdate: true}
    } catch (err) {
        return {currentdate: true}
    }
}