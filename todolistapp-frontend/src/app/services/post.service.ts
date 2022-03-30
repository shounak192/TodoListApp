import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl="http://localhost:3000";

  constructor(private http: HttpClient) { }

  getPendingTodos(){
    return this.http.get<Post[]>(this.baseUrl+"/");
  }

  addPost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.baseUrl+'/addtodo',post);
  }

  getCompletedTodo() :Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl+'/getcompletedtodos');
  }

  deleteTask(id:number): Observable<Post[]> {
    return this.http.delete<Post[]>(this.baseUrl+'/deletetodo/'+id);
  }

  completeTask(id:number): Observable<Post[]> {
    return this.http.put<Post[]>(this.baseUrl+'/completetodo/'+id,{});
  }
}
