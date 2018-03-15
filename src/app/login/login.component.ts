import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { CommonService } from '../common/common.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [LoginService]
})

export class LoginComponent {
    user = {
        name: 'admin',
        password: 'admin'
    };
    isInvalidCredentials: boolean = false;

    constructor(private router: Router, 
                private loginService: LoginService, 
                private commonService: CommonService) {
    }

    ngOnInit() {
        // Check if the user is already authenticated
        // After logged in, if the user clicks on browser back button, redirect to home page.
        if (this.commonService.isAuthenticated()) {
            this.router.navigateByUrl('/home');
        }
    }

    onLogin(user) {
        this.loginService.doAuthenticateUser(this.user)
            .subscribe((users) => {
                this.isInvalidCredentials = true;
                users.json().map((user) => {
                    if (user.username === this.user.name && user.password === this.user.password) {
                        this.isInvalidCredentials = false;
                        this.commonService.user = user;
                        this.commonService.updateUser(user);
                    }
                });
                if (!this.isInvalidCredentials) {
                    this.router.navigateByUrl('/home/company');
                }
            });
    }
}
