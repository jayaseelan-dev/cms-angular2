import { Component } from '@angular/core';

import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    user = {
        name: '',
        password: ''
    };

    constructor(private loginService: LoginService) { }

    onLogin() {
        this.loginService.doAuthenticateUser(this.user);
    }
}
