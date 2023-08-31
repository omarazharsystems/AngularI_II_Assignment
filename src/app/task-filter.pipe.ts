// src/app/pipes/task-filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[], status: string): Task[] {
    if (!status || status === 'all') {
      return tasks;
    }
    return tasks.filter(task => task.status === status);
  }
}
