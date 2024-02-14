import { Route } from "@angular/router";
import { FacultyRegisterVenueComponent } from "./faculty-register-venue.component";

export const FACULTY_REGISTER_VENUE_ROUTES: Route[] = [
    {
        path: "",
        component: FacultyRegisterVenueComponent
    },
    {
        path: "register",
        loadChildren: () => import("../faculty-register-venue-view/faculty-register-venue-view.routes").then(m => m.FACULTY_REGISTER_VENUE_VIEW_ROUTES)
    },
]