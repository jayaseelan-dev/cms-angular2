import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { CommonService } from '../common/common.service';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class AppHeader { 
    public user;
    public subscription: Subscription;

    constructor(private router: Router, private commonService: CommonService) {
        this.user = commonService.user;
    }

    ngOnInit() {
        this.subscription = this.commonService.userUpdated$
            .subscribe((user) => {
                this.user = user;
            }
        );
    }

    onLogout() {
        this.commonService.removeUser();
        this.router.navigateByUrl('/login');
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }

    /* Set the width of the side navigation to 250px */
    openNav() {
        document.getElementById("mySidenav").style.width = '250px';
    }

    /* Set the width of the side navigation to 0 */
    closeNav() {
        document.getElementById("mySidenav").style.width = '0';
    }
}
