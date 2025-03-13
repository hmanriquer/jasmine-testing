import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task.model';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.less'],
  imports: [MatFormField, MatInput, MatButton, FormsModule],
})
export class TaskFormComponent {
  title: string = '';
  description: string = '';

  constructor(private taskService: TaskService) {}

  onSubmit(): void {
    if (this.title.trim()) {
      const newTask: Task = {
        id: 0,
        title: this.title,
        description: this.description,
        completed: false,
      };
      this.taskService.addTask(newTask);
      this.title = '';
      this.description = '';
    }
  }
}
