import { Route } from "@angular/router";
import { AdminVenueRequestsComponent } from "./admin-venue-requests/admin-venue-requests.component";
import { AdminUpcomingEventsComponent } from "./admin-upcoming-events/admin-upcoming-events.component";
import { AdminRejectedRequestsComponent } from "./admin-rejected-requests/admin-rejected-requests.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { AdminVenueRequestsViewComponent } from "./admin-venue-requests-view/admin-venue-requests-view.component";
import { AdminUpcomingEventsViewComponent } from "./admin-upcoming-events-view/admin-upcoming-events-view.component";
import { AdminRejectedRequestsViewComponent } from "./admin-rejected-requests-view/admin-rejected-requests-view.component";


export const FACULTY_ROUTES: Route[] = [
    {
        path: "venue-requests",
        component: AdminVenueRequestsComponent
    },
    {
        path: "venue-requests/:requestId",
        component: AdminVenueRequestsViewComponent
    },
    {
        path: "upcoming-events",
        component:  AdminUpcomingEventsComponent
    },
    {
        path: "upcoming-events/:eventId",
        component: AdminUpcomingEventsViewComponent
    },
    {
        path: "rejected-requests",
        component: AdminRejectedRequestsComponent
    },
    {
        path: "rejected-requests/:requestId",
        component: AdminRejectedRequestsViewComponent
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