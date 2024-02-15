import { Route } from "@angular/router";
import { MasterComponent } from "./master/master.component";
import { AdminComponent } from "./admin/admin.component";
import { FacultyComponent } from "./faculty/faculty.component";
import { NotFoundComponent } from "./not-found/not-found.component";
const ROLE = "master"

export const PAGE_ROUTES: Route[] = [
    {
        path: "master",
        component: MasterComponent,
        loadChildren: () => import("./master/master.routes").then(m => m.MASTER_ROUTES)
    },
    {
        path: "admin",
        component: AdminComponent,
        loadChildren: () => import("./admin/admin.routes").then(m => m.FACULTY_ROUTES)
    },
    {
        path: "faculty",
        component: FacultyComponent,
        loadChildren: () => import("./faculty/faculty.routes").then(m => m.FACULTY_ROUTES)
    },
    {
        path: "",
        redirectTo: "master",
        pathMatch: "full"
    },
    {
        path: "**",
        component: NotFoundComponent
    },
]