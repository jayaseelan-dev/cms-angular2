import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { CompanyComponent } from './company/company.component';

import { AuthGuard } from '../common/auth-guard.service';
import { CompanyModule } from './company/company.module';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        redirectTo: 'company'
    }
];

@NgModule({
    imports: [
        CompanyModule,
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule { }
