import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Person } from "../models/person";
import { PersonHelper } from "../helpers/person-helper";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})

export class PeopleService {
   /** Data subject. */
   peopleSubject$ = new BehaviorSubject<Person[]>(PersonHelper.getPersonData());
   /** All people. */
   allPeople: Person[] = [];

   getPeopleData(): Person[] {
    return _.cloneDeep(this.peopleSubject$.value);
  }

}
