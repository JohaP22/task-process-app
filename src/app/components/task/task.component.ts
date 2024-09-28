import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from 'src/app/services/task.service';
import { SkillService } from 'src/app/services/skill.service';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { Person } from 'src/app/models/person';
import { v4 as uuidv4 } from 'uuid';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Skill } from 'src/app/models/skill';
import { Task } from 'src/app/models/task';
/**
 * Component of tasks and its content.
 */
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    SkillDetailComponent,
    PersonDetailComponent,
    MatIconModule,
    CommonModule,
  ],
  standalone: true,
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'ja-JP' }],
})
export class TaskComponent {
  /** Task form. */
  taskFormGroup = new FormGroup({
    taskName: new FormControl('', [Validators.required]),
    limitDate: new FormControl('', [Validators.required]),
    person: new FormArray<AbstractControl<Person>>([], Validators.required),
    skills: new FormArray<AbstractControl<Skill>>([], Validators.required),
  });

  /** Min date to validate datepicker. */
  minDate = new Date();

  /** List dynamic person. */
  dynamicPerson: Person[] = [];

  constructor(
    public taskService: TaskService,
    public skillService: SkillService
  ) {}


  /**Init lifecycle. */
  ngOnInit(): void {
    this.addNewPosition();
  }

  /**
   * Add new position.
   */
  addNewPosition(): void {
    const newPerson = {
      personId: uuidv4(),
      fullName: '',
      age: 18,
    };
    this.dynamicPerson.push(newPerson);
  }

  /** Remove position to person. */
  removeSomePosition(index: number): void {
    this.dynamicPerson.splice(0, index);
    this.taskFormGroup.controls.person.removeAt(index);
  }

  /** Add new person. */
  addNewPerson(event: FormGroup): void {
    this.taskFormGroup.controls.person.push(event);
    console.log(event, this.taskFormGroup);
  }

  /** Add new skill. */
  addNewSkill(event: FormGroup): void {
    this.taskFormGroup.controls.skills.push(event);
  }

  /** Save task. */
  saveTask(): void {
    console.log(this.taskFormGroup);
    let taskPeople: string[] = [];
    let skillTask: string[] = [];
    taskPeople = this.taskFormGroup.controls.person.value.map(
      (person) => person.personId
    );
    skillTask = this.taskFormGroup.controls.skills.value.map(
      (skill) => skill.skillId
    );
    const newFormGroup: Task = {
      taskName: this.taskFormGroup.controls.taskName.value || '',
      limitDate: this.taskFormGroup.controls.limitDate.value || '',
      personList: taskPeople || [],
      taskSkill: skillTask,
      taskId: uuidv4(),
      isCompleted: false
    };
    const allTasks = this.taskService.addNewTask(newFormGroup);
    this.taskService.taskSubject$.next(allTasks);

  }
}
