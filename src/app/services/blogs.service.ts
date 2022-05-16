import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBlogsRequest, IBlogsResponse } from '../interfaces/blogs.interfase';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private url = environment.BACKEND_URL;
  private api = { blogs: `${this.url}posts` }
  // private api = { blogs: `http://localhost:3000/posts` }

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IBlogsResponse[]>{
    return this.http.get<IBlogsResponse[]>(this.api.blogs)
  }

  createPost(post:IBlogsRequest):Observable<IBlogsResponse>{
    return this.http.post<IBlogsResponse>(this.api.blogs, post);
  }
  deletePost(id:number):Observable<void>{
    return this.http.delete<void>(`${this.api.blogs}/${id}`)
  }
  updatePost(post:IBlogsRequest, id: number): Observable<IBlogsResponse>{
    return this.http.patch<IBlogsResponse>(`${this.api.blogs}/${id}`, post);
  }
}
