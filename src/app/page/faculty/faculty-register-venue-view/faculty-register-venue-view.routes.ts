import { Route } from "@angular/router";
import { FacultyRegisterVenueRequestComponent } from "./faculty-register-venue-request/faculty-register-venue-request.component";
import { FacultyRegisterVenueRequirementComponent } from "./faculty-register-venue-requirement/faculty-register-venue-requirement.component";

export const FACULTY_REGISTER_VENUE_VIEW_ROUTES: Route[] = [
    {
        path: "request-form",
        component: FacultyRegisterVenueRequestComponent
    },
    {
        path: "requirement-form",
        component: FacultyRegisterVenueRequirementComponent
    },
    {
        path: "",
        redirectTo: "/faculty/register-venue",
        pathMatch: "full"
    }
]