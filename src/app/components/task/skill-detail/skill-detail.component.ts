import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class SkillDetailComponent {
  @Output() newSkill = new EventEmitter<FormGroup>();


  /** Person form. */
  skillForm = new FormGroup({
    skillId: new FormControl(uuidv4(), []),
    skillName: new FormControl('', [Validators.required]),
  });

  constructor(public skillService: SkillService) {}
  /**
   * Add new skill.
   */
  addSkills(): void {
    this.newSkill.emit(this.skillForm);
  }
}
