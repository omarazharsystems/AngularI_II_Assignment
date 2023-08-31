// src/app/task.model.ts
export class Task {
  title: string;
  priority: string;
  done: boolean;
  creationDate: Date;
  status: string;

  constructor(title: string, priority: string) {
    this.title = title;
    this.priority = priority;
    this.done = false;
    this.creationDate = new Date();
    this.status = 'undone'
  }
}
