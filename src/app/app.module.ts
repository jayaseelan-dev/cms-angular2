import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeader } from './common/header.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
// import { CompanyModule } from './home/company/company.module';
import { HomeModule } from './home/home.module';

import { LoginService } from './login/login.service';
import { CommonService } from './common/common.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		LoginModule,
		HomeModule,
		AppRoutingModule // Order matters, the wildcard route must be registered at the last.
	],
	declarations: [AppComponent, AppHeader],
	providers: [LoginService, CommonService],
	bootstrap: [AppComponent]
})

export class AppModule { }
