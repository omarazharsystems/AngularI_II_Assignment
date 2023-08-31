import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];

  addTask(newTask: Task) {
    this.tasks.push(newTask);
  }
  clearOutput() {
    this.tasks = []; // Reset the tasks array or relevant data structure
  }

  handleTaskDone(updatedTask: Task) {
    // Implement handling of task updates
  }
}
