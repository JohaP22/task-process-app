import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { Task } from 'src/app/models/task';
import * as _ from 'lodash';
import { SkillService } from 'src/app/services/skill.service';

/**
 * Component with task list.
 */
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TaskListComponent {
  /** All tasks. */
  @Input() taskList: Task[] = [];

  /** Copy of task list. */
  copyTaskList: Task[] = [];

  constructor(public skillService: SkillService){}



  /**Init lifecycle. */
  ngOnInit(): void {
    this.copyTaskList = _.cloneDeep(this.taskList);
  }

  /** Skills related to task. */
  public skillsRelated(skills: Skill[]): string {
    return skills.map((skill) => skill.skillName).join(', ');
  }

  /** Skills related to task. */
  public filterTasks(source: 'all' | 'complete' | 'incomplete'): void {
    this.copyTaskList = _.cloneDeep(this.taskList).filter(({ isCompleted }) => {
      if (source === 'complete') return isCompleted;
      if (source === 'incomplete') return !isCompleted;
      return true;
    });
  }
}
