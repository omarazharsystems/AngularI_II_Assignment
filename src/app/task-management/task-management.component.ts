// src/app/task-management/task-management.component.ts
import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit {
  tasks: Task[] = [];

  ngOnInit() {
    // Initialize tasks
  }

  addTask(newTask: Task) {
    this.tasks.push(newTask);
  }

  handleTaskDone(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].done = true;
    }
  }
}
