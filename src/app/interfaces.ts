import { FormControl, FormGroup } from "@angular/forms";

export interface CustomLinks {
    id: Number,
    link: Array<string>,
    name: string,
}

// export interface AddVenueFormGroup extends FormGroup {
//     hallName: FormControl<string | null>,
//     noOfSeats: FormControl<Number | null>,
//     noOfMics: FormControl<Number | null>,
//     noOfCollarMics: FormControl<Number | null>,
//     noOfStandMics: FormControl<Number | null>,
//     noOfWhiteBoards: FormControl<Number | null>,
//     acAvailability: FormControl<boolean | null>,
//     projectorAvailability: FormControl<boolean | null>,
//     openingTime: FormControl<string | null>,
//     closingTime: FormControl<string | null> 
// }