import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';

import { CommonService } from './common/common.service';
import { AuthGuard } from './common/auth-guard.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		LoginModule,
		AppRoutingModule // Order matters, the wildcard route must be registered at the last.
	],
	declarations: [AppComponent, AppHeader],
	providers: [CommonService, AuthGuard], // Including the service in providers, will create new instance.
	bootstrap: [AppComponent]
})

export class AppModule { }
