import { Injectable, OnInit } from "@angular/core";
import { Itodo } from "../model/todo.interface";
import { todoArry } from "../const/todo";

@Injectable({
    providedIn: "root"
})
export class TodoService implements OnInit{
    todoArray : Array<Itodo> = todoArry; 
    constructor(){

    }
    fetchData(){
        return this.todoArray
    }

    todoArry = []
    ngOnInit(): void {

    }

}