/**
 * In this file you will write the tests for the `TasksFormComponent`.
 * 
 * The test cases you should write are:
 * 1. Should create the component.
 * 2. Should have a form with the following fields:
 *   - title: input
 *   - description: textarea
 *   - button: Add task
 * 3. Should have a method called `onSubmit` that should be called when the form is submitted.
 * 4. Should validate if the title is not empty before adding a new task.
 * 5. Should call the `addTask` method from the `TaskService` when the form is submitted.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksFormComponent } from './tasks-form.component';

describe('TasksFormComponent', () => {
  let component: TasksFormComponent;
  let fixture: ComponentFixture<TasksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
