import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  post: Post = new Post();
  // todos: Post[] = [];
  todoList: any = [];

  ngOnInit(): void {}

  saveTask(): void {
    this.postService.addPost(this.post).subscribe((res) => {
    console.log(res);
    this.todoList=res;
    })

  }

  getPendingTodos() {
    this.postService.getPendingTodos().subscribe((res) => {
      this.todoList = res;
      console.log(this.todoList);
    });
  }

  getCompletedTodo() {
    this.postService.getCompletedTodo().subscribe((res) => {
      this.todoList = res;
      console.log(this.todoList);
    });
  }

  deleteTask(id:number) {
    this.postService.deleteTask(id).subscribe((res) => {
      console.log(res);
      this.todoList=res;
    });
  }

  completeTask(id:number) {
    // console.log(id);
    this.postService.completeTask(id).subscribe((res) => {
      console.log(res);
      this.todoList=res;
      console.log(this.todoList);
    });
  }
}
