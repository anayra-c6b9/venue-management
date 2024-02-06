import { Route } from "@angular/router";
import { MainCardComponent } from "./main-card/main-card.component";
const ROLE = "master"

export const PAGE_ROUTES: Route[] = [
    {
        path: `${ROLE}`,
        component: MainCardComponent
    },
    {
        path: "",
        redirectTo: `/${ROLE}`,
        pathMatch: "full"
    }
]