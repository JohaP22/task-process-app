import { Task } from "../models/task";

export class TaskHelper {
  static generateDataTask(): Task[]{
    const mockData:Task[] = [{
    taskId: "1",
    taskName: "Design Home Page",
    limitDate: "2024-10-01",
    isCompleted: false,
    personList: ["1a2b3c-52525"],
    taskSkill: ["8523-1497"],
  },
  {
    taskId: "2",
    taskName: "Develop Login Module",
    limitDate: "2024-09-28",
    isCompleted: false,
    personList: ["4d5e6f-8963-965"],
    taskSkill: ["8594-85321"],
  },
  {
    taskId: "3",
    taskName: "Create API Documentation",
    limitDate: "2024-10-05",
    isCompleted: true,
    personList: ["7g8h9i-8979-123"],
    taskSkill: ["7895-8974"],
  },
  {
    taskId: "4",
    taskName: "Setup Database",
    limitDate: "2024-09-30",
    isCompleted: false,
    personList: ["0j1k2l-158795"],
    taskSkill: ["7895-8974"],
  },
  {
    taskId: "5",
    taskName: "Test Payment Gateway",
    limitDate: "2024-10-03",
    isCompleted: true,
    personList: ["6y21l-17965", "6791l-17965"],
    taskSkill: ["878-96532"],
  },
 ];

  return mockData;
}
}
