/**
 * In this file, you will write the test cases for the TasksListComponent.
 * 
 * The test cases will be the following:
 * 1. Should create the component.
 * 2. Should render the task title.
 * 3. Should render the task description.
 * 4. Button should be rendered with the text 'Delete'.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListComponent } from './tasks-list.component';

describe('TasksListComponent', () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
