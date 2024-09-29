import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskComponent } from '../task/task.component';
import { Task } from 'src/app/models/task';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
  standalone: true,
  imports: [TaskListComponent, TaskComponent],
})
export class MainListComponent {
  /** List of task. */
  taskList: Task[] = [];

  constructor(
    public taskService: TaskService,
    public skillService: SkillService
  ) {}

  /**Init lifecycle. */
  ngOnInit(): void {
    this.taskList = this.taskService.processingTask();
    this.subscribeTaskData$();
    console.log(this.taskList);
  }

  /**
   * Subscribe to task data.
   */
  subscribeTaskData$(): void {
    this.taskService.taskSubject$.pipe().subscribe((allTasks) => {
      this.taskList = allTasks;
    });
  }
}
