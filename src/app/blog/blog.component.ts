import { Component, OnInit } from '@angular/core';
import { IBlogsResponse } from '../interfaces/blogs.interfase';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blogs!: IBlogsResponse[];

  constructor(private blogService: BlogsService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs():void{
    this.blogService.getPosts().subscribe(data=>{
      this.blogs = data;
    })
  }

}
