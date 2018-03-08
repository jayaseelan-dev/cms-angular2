import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeModule } from "app/home/home.module";

import { AuthGuard } from "../common/auth-guard.service";

const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: []
})

export class HomeRoutingModule { }
