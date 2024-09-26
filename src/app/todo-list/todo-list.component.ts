import { Component, DoCheck, ElementRef, Inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { TodoItem } from './todo-Item.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit, DoCheck {
  todoList: TodoItem[] = [];
  newTask: string = '';
  doneTask: number = 0;
  @ViewChild('todoText') todoInputRef: ElementRef<HTMLInputElement>;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    // const sessionStorage = this.document.defaultView?.sessionStorage;
    // if (sessionStorage) {
    //   const storedTodoList = sessionStorage.getItem('todoList');
    //   if (storedTodoList) {
    //     this.todoList = JSON.parse(storedTodoList);
    //   }

    const localStorage = this.document.defaultView?.localStorage;
    if (localStorage) {
      const storedTodoList = localStorage.getItem('todoList');
      if (storedTodoList) {
        this.todoList = JSON.parse(storedTodoList);
        this.updateDoneTaskCount();
      }
    } else {
      console.error('localStorage is not available');
    }
  }

  ngDoCheck(): void {
      this.updateDoneTaskCount();
  }

  addTask(text: String): void {
    if (text.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        task: text.trim(),
        completed: false,
        editMode: false
      };
      this.todoList.push(newTodoItem);
      this.todoInputRef.nativeElement.value = '';
      this.saveTodoList();
    }
  }

  deleteTask(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
    this.saveTodoList();
  }

  saveTodoList(): void {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  toggleCompleted(id: number): void {
    const todoItem = this.todoList.find(item => item.id === id);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
      this.saveTodoList();
    }
  }

  editTask(todoItem: TodoItem): void {
    todoItem.editMode = true; // Enable edit mode
  }

  saveTask(todoItem: TodoItem): void {
    todoItem.editMode = false; // Disable edit mode after saving
    this.saveTodoList();
  }

  cancelEdit(todoItem: TodoItem): void {
    todoItem.editMode = false; // Cancel edit mode
  } 

  updateDoneTaskCount(): void {
    this.doneTask = this.todoList.filter(item => item.completed).length;
  }
}
