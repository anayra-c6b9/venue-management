import { Route } from "@angular/router";
import { PageComponent } from "./page/page.component";
import { LoginComponent } from "./page/login/login.component";
import { NotFoundComponent } from "./page/not-found/not-found.component";

export const APP_ROUTE: Route[] = [
  {
    path: "",
    component: PageComponent,
    loadChildren: () => import("./page/page.routes").then(m => m.PAGE_ROUTES)
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

