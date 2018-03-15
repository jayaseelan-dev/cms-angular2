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
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }

    /* Set the width of the side navigation to 250px */
    toggleNav() {
        var menu = document.querySelector('.menu');
        var sidenav = document.getElementById('sidenav');

        if (sidenav.style.width) {
            menu.classList.remove('menu-active');
            sidenav.style.width = '';
            return;
        }
        menu.classList.add('menu-active');
        sidenav.style.width = '220px';
    }
}
