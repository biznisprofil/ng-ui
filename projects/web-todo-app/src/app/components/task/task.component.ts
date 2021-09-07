import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task = {id: '1', title: 'default', state: 'TASK_DEFAULT'}

  tasks:Task[] = []

  @Output()
  onPinTask = new EventEmitter<Event>();

  @Output()
  onArchiveTask = new EventEmitter<Event>();

  onPin(id: any) {
    this.onPinTask.emit(id);
  }

  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }

  onClick(event:string) {
    const task = {id: String(Math.random()), title: event, state: 'TASK_PINNED'}
    this.tasks.push(task)
  }

  onKeyDownEvent(event) {
    const task = {id: String(Math.random()), title: event.target.value, state: 'TASK_DEFAULT'}
    this.tasks.push(task)
  }
}
