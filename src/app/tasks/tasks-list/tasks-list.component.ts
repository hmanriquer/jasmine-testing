import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';
import { MatListModule } from '@angular/material/list';
import { TaskFormComponent } from '../tasks-form/tasks-form.component';
import { MatButton } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tasks-list',
  imports: [MatListModule, TaskFormComponent, MatButton, NgFor],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.less',
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  onDeleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
}
