import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {

    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/assets/data/mock-companies.json')
                      .map(response => response.json());
    }
}
