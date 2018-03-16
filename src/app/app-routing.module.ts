import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './common/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    { path: 'home', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes) // Only call RouterModule.forRoot in the root AppRoutingModule
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
