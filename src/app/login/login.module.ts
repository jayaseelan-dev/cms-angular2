import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

import { LoginService } from './login.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent],
    exports: [],
    providers: [LoginService]
})

export class LoginModule { }
