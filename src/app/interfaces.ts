import { FormControl, FormGroup } from "@angular/forms";

export interface CustomLinks {
    id: Number,
    link: Array<string>,
    name: string,
}

export interface VenueForm {
    hallName: string,
    noOfSeats: Number,
    noOfMics: Number,
    noOfCollarMics: Number,
    noOfStandMics: Number,
    acAvailabilit: boolean,
    projectorAvailability: boolean,
    openingTime: string,
    closingTime: string
}

// faculty login
// --posting
export interface LoginInfo {
    email: string,
    password: string
}

// --geting
export interface LoginResponse {
    facultyId: string, 
    facultyRole: string, 
    message: string
}

// faculty Events
// -- getting
export interface FacultyEvents {
    id: string,
    facultyId: string,
    eventName: string
}

export interface FacultyEventsCollection extends Array<FacultyEvents> {}

// venue Events

//--posting
export interface EventTimes {
  "date": string,
  "startingTime": string,
  "endingTime": string
}

export interface FacultyVenueEvent {
    "eventName": string,
    "eventStartingDate": string,
    "eventEndingDate": string,
    "eventDuration": Number,
    "eventTimes": Array<EventTimes>,
    "eventStatus": string,
    "eventId": string,
    "facultyId": string
}

export interface FacultyVenueEventsCollection extends Array<FacultyVenueEvent> {}

//--getting
export interface VenueEvent {
    "id": string,
    "eventName": string,
    "eventStartingDate": string,
    "eventEndingDate": string,
    "eventDuration": Number,
    "eventTimes": [
      {
        "date": string,
        "startingTime": string,
        "endingTime": string
      }
    ],
    "eventStatus": string,
    "eventId": string,
    "facultyId": string
}

export interface VenueEventsCollection extends Array<VenueEvent> {}

// Venue Requirements

// -- posting
export interface FacultyVenueRequirement {
  "hallId": string,
  "hallName": string,
  "noOfMics": Number,
  "noOfSeats": Number,
  "noOfStandMics": Number,
  "noOfCollarMics": Number,
  "noOfLeatherChair": Number,
  "acRequirement": boolean,
  "laptopRequirement": boolean,
  "whiteBoardRequirement": boolean,
  "lampRequirement": boolean,
  "soundSystemRequirement": boolean,
  "projectorRequirement": boolean,
  "projectorSliderRequirement": boolean,
  "venueEventId": string
}

export interface FacultyVenueRequirementCollection extends Array<FacultyVenueRequirement> {}
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