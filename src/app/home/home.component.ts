import { Component } from '@angular/core';
import { TasksListComponent } from '../tasks/tasks-list/tasks-list.component';

@Component({
  selector: 'app-home',
  imports: [TasksListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {}
