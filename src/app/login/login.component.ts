import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { CommonService } from '../common.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [LoginService, CommonService]
})

export class LoginComponent {
    user = {
        name: 'admin',
        password: ''
    };
    isInvalidCredentials: boolean = false;

    constructor(private router: Router, private loginService: LoginService, private commonService: CommonService) { }

    onLogin(user) {
        this.loginService.doAuthenticateUser(this.user)
            .subscribe((users) => {
                this.isInvalidCredentials = true;
                users.json().map((user) => {
                    if (user.username === this.user.name && user.password === this.user.password) {
                        this.isInvalidCredentials = false;
                        // let commonService = new CommonService();
                        this.commonService.user = user;
                    }
                });
                if (!this.isInvalidCredentials) {
                    this.router.navigateByUrl('/company');
                }
            });
    }
}
