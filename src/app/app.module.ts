import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

import { CommonService } from './common/common.service';

import { AuthGuard } from './common/auth-guard.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		LoginModule,
		HomeModule,
		AppRoutingModule // Order matters, the wildcard route must be registered at the last.
	],
	declarations: [AppComponent, AppHeader],
	providers: [CommonService, AuthGuard], // Including the service in providers, will create new instance.
	bootstrap: [AppComponent]
})

export class AppModule { }
