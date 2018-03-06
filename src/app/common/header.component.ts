import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';

import { CommonService } from './common.service';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class AppHeader implements OnInit, OnDestroy { 
    private user: object;
    public subscription: Subscription;

    constructor(private router: Router, private commonService: CommonService) {
        this.user = commonService.user;
    }

    ngOnInit() {
        this.subscription = this.commonService.userUpdated$.subscribe(
            user => {
                this.user = user
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
}
