import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from 'src/app/models/person';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
})
export class PersonDetailComponent {
  /** New Person. */
  @Output() newPerson = new EventEmitter<FormGroup>();

  /** Dynamic person. */
  @Input({ required: true }) person!: Person;

  /** Person form. */
  personForm = new FormGroup({
    personId: new FormControl('', []),
    fullName: new FormControl('', [Validators.required]),
    age: new FormControl(18, [Validators.min(18), Validators.maxLength(2)]),
  });

  /** Init lifecycle. */
  ngOnInit(): void {
    this.personForm.patchValue({
      personId: this.person.personId,
      fullName: this.person.fullName,
      age: this.person.age,
    });
  }

  savePerson(): void {
    this.newPerson.emit(this.personForm);
  }
}
