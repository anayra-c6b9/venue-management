import { Route } from "@angular/router";
import { PageComponent } from "./page/page.component";

export const APP_ROUTE: Route[] = [
  {
    path: "",
    component: PageComponent,
    loadChildren: () => import("./page/page.routes").then(m => m.PAGE_ROUTES)
  }
];

