import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CompanyComponent } from './company.component';

const companyRoutes: Routes = [
    {
        path: 'company',
        component: CompanyComponent
    }
];

@NgModule({
    declarations: [
        CompanyComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(companyRoutes)
    ],
    exports: []
})

export class CompanyRoutingModule { }
