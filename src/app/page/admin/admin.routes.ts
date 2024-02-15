import { Route } from "@angular/router";
import { AdminVenueRequestsComponent } from "./admin-venue-requests/admin-venue-requests.component";
import { AdminUpcomingEventsComponent } from "./admin-upcoming-events/admin-upcoming-events.component";
import { AdminRejectedRequestsComponent } from "./admin-rejected-requests/admin-rejected-requests.component";
import { NotFoundComponent } from "../not-found/not-found.component";


export const FACULTY_ROUTES: Route[] = [
    {
        path: "venue-requests",
        component: AdminVenueRequestsComponent
    },
    {
        path: "venue-requests/:requestId",
        component: AdminVenueRequestsComponent
    },
    {
        path: "upcoming-events",
        component:  AdminUpcomingEventsComponent
    },
    {
        path: "rejected-requests",
        component: AdminRejectedRequestsComponent
    },
    {
        path: "",
        redirectTo: "venue-requests",
        pathMatch: "full"
    },
    {
        path: "**",
        component: NotFoundComponent
    }
]