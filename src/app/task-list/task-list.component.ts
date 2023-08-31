import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskDone: EventEmitter<Task> = new EventEmitter<Task>(); // Emit taskDone event

  markAsDone(task: Task) {
    // Update task's done status
    task.done = true;

    // Emit the taskDone event with the updated task
    this.taskDone.emit(task);
  }
}
