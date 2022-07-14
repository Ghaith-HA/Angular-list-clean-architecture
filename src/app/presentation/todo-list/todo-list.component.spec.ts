import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowToDoListPresenter } from 'src/app/core/use-case';

import { TodoListComponent } from './todo-list.component';
import { TodoListPresenter } from './todo-list.presenter';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      providers: [
        {provide: ShowToDoListPresenter}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
