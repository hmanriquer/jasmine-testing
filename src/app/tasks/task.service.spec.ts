/**
 * In this file you're gonna create a test suite for the TaskService class.
 * 
 * You're gonna test the following methods:
 * - getTasks
 * - addTask
 * - updateTask
 * - deleteTask
 */

import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
