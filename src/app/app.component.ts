import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  tasksList: string[] = [];
  newTask: string = '';

  private _tasksService = inject(TasksService);

  ngOnInit(): void {
    this.tasksList = this._tasksService.getTasks();
  }

  addTask() {
    this._tasksService.addTasks(this.newTask);
    this.newTask = '';
    this.tasksList = this._tasksService.getTasks();
  }

  deleteTask(index: number) {
    this._tasksService.deleteTask(index);
    this.tasksList = this._tasksService.getTasks();
  }
}
