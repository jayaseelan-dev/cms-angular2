import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { CompanyModule } from './home/company/company.module';
import { HomeModule } from './home/home.module';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		LoginModule,
		HomeModule,
		CompanyModule,
		AppRoutingModule // Order matters, the wildcard route must be registered at the last.
	],
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
