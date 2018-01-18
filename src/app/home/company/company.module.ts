import { NgModule } from "@angular/core";

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyService } from "./company.service";

@NgModule({
    declarations: [],
    imports: [
        CompanyRoutingModule
    ],
    exports: [],
    providers: [
        CompanyService
    ]
})

export class CompanyModule { }
