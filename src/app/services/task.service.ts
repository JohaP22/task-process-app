import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Skill } from '../models/skill';
import { Person } from '../models/person';
import { BehaviorSubject } from 'rxjs';
import { SkillService } from './skill.service';
import { PeopleService } from './people.service';
import * as _ from 'lodash';
import { TaskHelper } from '../helpers/task-helper';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  /** Data subject. */
  taskSubject$ = new BehaviorSubject<Task[]>(this.processingTask());
  /** All tasks. */
  allTasks: Task[] = [];
  /** All skills. */
  allSkills: Skill[] = [];
  /** All people. */
  allPeople: Person[] = [];

  constructor(
    public skillService: SkillService,
    public peopleService: PeopleService
  ) {
  }

  /**
   * Handle data task.
   * @returns An array with all tasks.
  */
 processingTask(): Task[] {
   this.allTasks = TaskHelper.generateDataTask();
   this.allSkills = this.skillService.getSkillData();
   this.allPeople = this.peopleService.getPeopleData();

    this.allTasks.map((task) => {
      task.taskSkill = task.taskSkill.map((skill) => {
        const skillFound = this.allSkills.find(
          ({ skillId }) => skillId === skill
        );
        return skillFound || skill;
      }) as string[] | Skill[];

      task.personList = task.personList.map((person) => {
        const peopleFound = this.allPeople.find(
          ({ personId }) => personId === person
        );
        return peopleFound || person;
      }) as string[] | Person[];
      return task;
    });
    return this.allTasks;
  }

  /** Get task list. */
  getTaskList(): Task[] {
    return _.cloneDeep(this.taskSubject$.value);
  }

  addNewTask(newTask: Task): Task[]{
    const currentData = _.cloneDeep(this.taskSubject$.value);
    currentData.push(newTask);
    return currentData;
  }
}
