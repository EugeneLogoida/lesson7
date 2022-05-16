import { Component, OnInit } from '@angular/core';
import { IBlogsResponse } from '../interfaces/blogs.interfase';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-adminblog',
  templateUrl: './adminblog.component.html',
  styleUrls: ['./adminblog.component.scss']
})
export class AdminblogComponent implements OnInit {

  public title!:string;
  public text!:string;
  public author!:string;

  public blogs!: IBlogsResponse[];
  public editId!: number;

  public editStatus: boolean = false;

  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost():void{
    this.blogsService.getPosts().subscribe(data=>{
      this.blogs = data;
    })
  }
  addPost():void{
    let newPost={
      title: this.title,
      text: this.text,
      author: this.author
    }
    this.blogsService.createPost(newPost).subscribe(()=>{
      this.getPost();
      this.clean();
    });

  }
  deletePost(post:IBlogsResponse):void{
    this.blogsService.deletePost(post.id).subscribe(()=>{
      this.getPost();
      
    })
  }
  editPost(post:IBlogsResponse){
    this.title = post.title;
    this.text = post.text;
    this.author = post.author;
    this.editId = post.id
    this.editStatus = true;
  }
  save():void{
    let updated={
      title: this.title,
      text: this.text,
      author: this.author
    }
    this.blogsService.updatePost(updated, this.editId).subscribe(()=>{
      this.getPost();
      this.clean();
    })
    
    this.editStatus = false;
    
  }
  clean():void{
    this.title = '';
    this.text = '';
    this.author = '';
  }
}
