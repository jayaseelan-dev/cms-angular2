import { Component } from "@angular/core";
import { CompanyService } from "./company.service";

@Component({
    selector: 'company',
    templateUrl: './company.component.html'
})

export class CompanyComponent {
    companies = [];

    constructor(private companyService: CompanyService) { }

    ngOnInit() {
        var res = this.companyService.getAll();
        res.subscribe(successResponse => {
            this.companies = successResponse;
        }, errorResponse => {
            console.error('Service failed');
        });
    }
}