import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CompanyComponent } from './company.component';

const companyRoutes: Routes = [
    {
        path: 'company',
        component: CompanyComponent
        // children: [
        //     {
        //         path: 'list',
        //         component: CompanyListComponent
        //     },
        //     {
        //         path: 'details/:id',
        //         component: CompanyDetailComponent
        //     }
        // ]
    }
];

@NgModule({
    declarations: [
        CompanyComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(companyRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class CompanyRoutingModule { }
