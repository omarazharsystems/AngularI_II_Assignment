import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<Task>();

  addTask(title: string, priority: string, event: Event) {
    event.preventDefault();
    
    const newTask: Task = {
      title: title,
      priority: priority,
      done: false,
      creationDate: new Date(),
      status: 'undone'
    };

    this.taskAdded.emit(newTask);
    // Clear input fields after emitting the task
    title = '';
    priority = '';
  }
}
