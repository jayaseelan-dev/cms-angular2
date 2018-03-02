import { Component } from '@angular/core';

import { CommonService } from './common.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CommonService]
})

export class AppComponent {
    title: string = 'Corporate Management System';
    private user: object;

    constructor(private commonService: CommonService) { }

    ngOnInit() {
        this.user = this.commonService.user;
    }
}
