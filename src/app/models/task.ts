import { Person } from "./person";
import { Skill } from "./skill";

export interface Task {
  /** Task id. */
  taskId: string;

  /** Task name. */
  taskName: string;

  /** Date limit. */
  limitDate: string;

  /** Whether task is completed or not. */
  isCompleted: boolean;

  /** People related. */
  personList: string[] | Person[];

  /** Task skill. */
  taskSkill: string[] | Skill[];
}
