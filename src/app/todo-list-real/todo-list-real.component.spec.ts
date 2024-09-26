import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListRealComponent } from './todo-list-real.component';

describe('TodoListRealComponent', () => {
  let component: TodoListRealComponent;
  let fixture: ComponentFixture<TodoListRealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListRealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoListRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
