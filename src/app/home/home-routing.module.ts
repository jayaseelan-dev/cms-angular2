import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyModule } from './company/company.module';

import { HomeComponent } from './home.component';
import { CompanyComponent } from './company/company.component';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
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
