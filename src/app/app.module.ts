import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoformComponent } from './shared/component/todoform/todoform.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { TodoService } from './shared/service/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
