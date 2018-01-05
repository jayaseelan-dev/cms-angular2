import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  allPosts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAllPosts()
        .subscribe(posts => {
          this.allPosts = posts;
        }, errorResponse => {
          console.log('error response');
        });
  }

}
