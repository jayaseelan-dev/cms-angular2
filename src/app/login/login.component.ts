import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { log } from 'util';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    user = {
        name: '',
        password: ''
    };
    isInvalidCredentials: boolean = false;

    constructor(private router: Router, private loginService: LoginService) { }

    onLogin() {
        this.loginService.doAuthenticateUser(this.user)
            .subscribe((users) => {
                this.isInvalidCredentials = true;
                users.json().map((user) => {
                    if (user.username === this.user.name && user.password === this.user.password) {
                        this.isInvalidCredentials = false;
                    }
                });
                if (!this.isInvalidCredentials) {
                    this.router.navigateByUrl('/myposts');
                }
            });
    }
}
