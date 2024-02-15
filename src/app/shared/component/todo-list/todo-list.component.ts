import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../model/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private _todolist : TodoService) { 


  }
  todo !: Array<Itodo> ;

  ngOnInit(): void {
    console.log(this._todolist.fetchData());
    this.todo = this._todolist.fetchData();
  
  }

}
