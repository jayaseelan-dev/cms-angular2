import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { HomeRoutingModule } from './home-routing.module';
import { CompanyModule } from './company/company.module';

import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        CompanyModule
    ],
    declarations: [
        HomeComponent
    ]
})

export class HomeModule { }
