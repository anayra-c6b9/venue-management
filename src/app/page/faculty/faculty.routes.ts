import { Route } from "@angular/router";
import { FacultyRegisterVenueComponent } from "./faculty-register-venue/faculty-register-venue.component";
import { FacultyYourRequestsComponent } from "./faculty-your-requests/faculty-your-requests.component";
import { FacultyCheckAvailabilityComponent } from "./faculty-check-availability/faculty-check-availability.component";
import { FacultyYourRequestsViewComponent } from "./faculty-your-requests-view/faculty-your-requests-view.component";


export const FACULTY_ROUTES: Route[] = [
    {
        path: "",
        redirectTo: "register-venue",
        pathMatch: "full"
    },
    {
        path: "register-venue",
        loadChildren: () => import("./faculty-register-venue/faculty-register-venue.routes").then(m => m.FACULTY_REGISTER_VENUE_ROUTES)
    },
    {
        path: "your-requests",
        component: FacultyYourRequestsComponent
    },
    {
        path: "your-requests/:requestId",
        component: FacultyYourRequestsViewComponent
    },
    {
        path: "check-availability",
        component: FacultyCheckAvailabilityComponent
    }
]