import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PostsRoutingModule } from './posts-routing.module';

import { PostsComponent } from './posts.component';

import { PostsService } from './posts.service';

@NgModule({
    imports: [
        BrowserModule,
        PostsRoutingModule
    ],
    declarations: [
        PostsComponent
    ],
    providers: [
        PostsService
    ],
})
export class PostsModule { }
