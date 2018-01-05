import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts.component';

const postsRoutes: Routes = [
    {
        path: 'myposts',
        component: PostsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(postsRoutes) // other module, you must call the RouterModule.forChild method to register additional routes.
    ]
})
export class PostsRoutingModule { }
