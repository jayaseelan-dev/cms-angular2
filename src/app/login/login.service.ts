import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    user = {
        name: String,
        password: String
    };

    constructor(private http: Http) { }

    doAuthenticateUser(user) {
        return this.http.get('/assets/data/mock-login.json');
    }
}
