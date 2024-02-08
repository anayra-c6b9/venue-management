import { Route } from "@angular/router";
import { MasterUpcomingEventsComponent } from "./master-upcoming-events/master-upcoming-events.component";
import { MasterListVenueComponent } from "./master-list-venue/master-list-venue.component";
import { MasterAddVenueComponent } from "./master-add-venue/master-add-venue.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { MasterUpcomingEventsViewComponent } from "./master-upcoming-events-view/master-upcoming-events-view.component";
import { MasterListVenueViewComponent } from "./master-list-venue-view/master-list-venue-view.component";

export const MASTER_ROUTES: Route[] = [
    {
        path: "upcoming-events",
        component: MasterUpcomingEventsComponent,
    },
    {
        path: "upcoming-events/:eventId",
        component: MasterUpcomingEventsViewComponent,
    },
    {
        path: "list-venue",
        component: MasterListVenueComponent,
    },
    {
        path: "list-venue/:venueId",
        component: MasterListVenueViewComponent
    },
    {
        path: "add-venue",
        component: MasterAddVenueComponent,
    },
    {
        path: "",
        redirectTo: "upcoming-events",
        pathMatch: "full"
    },
    {
        path: "**",
        component: NotFoundComponent
    }
]

