import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { SkillHelper } from '../helpers/skill-helper';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  /** Data subject. */
  skillSubject$ = new BehaviorSubject<Skill[]>(SkillHelper.generateSkillData());
  /** All skills. */
  allSkills: Skill[] = [];

  constructor() {
  }

  getSkillData(): Skill[] {
    return _.cloneDeep(this.skillSubject$.value);
  }

  addNewSkill(newSkill: Skill): void {
    const currentData = _.cloneDeep(this.skillSubject$.value);
    currentData.push(newSkill);
    this.skillSubject$.next(currentData);

  }
}
