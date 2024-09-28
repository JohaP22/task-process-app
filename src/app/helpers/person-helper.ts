import { Person } from "../models/person";

export class PersonHelper {
  static getPersonData(): Person[]{
    const mockData: Person[] = [
      {
        personId: '1a2b3c-52525',
        fullName: 'Jesus Yan',
        age: 28
      },
      {
        personId: '4d5e6f-8963-965',
        fullName: 'Andersson Sanchez',
        age: 34
      },
      {
        personId: '7g8h9i-8979-123',
        fullName: 'Moises Davila',
        age: 42
      },
      {
        personId: '0j1k2l-158795',
        fullName: 'Cesar Marcer',
        age: 25
      },
      {
        personId: '6y21l-17965',
        fullName: 'Ryan Doe',
        age: 28
      },
      {
        personId: '6791l-17965',
        fullName: 'Adars Archen',
        age: 28
      }
    ];

    return mockData;
  }
}
