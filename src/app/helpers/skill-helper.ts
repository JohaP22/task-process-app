import { Skill } from "../models/skill";

export class SkillHelper {
  static generateSkillData(): Skill[]{
    const mockSkills: Skill[] = [
      { skillId: '8594-85321', skillName: 'JavaScript' },
      { skillId: '594-85432', skillName: 'TypeScript' },
      { skillId: '394-85321', skillName: 'Angular' },
      { skillId: '878-96532', skillName: 'Node.js' },
      { skillId: '7895-8974', skillName: 'React' },
      { skillId: '8523-1497', skillName: 'GraphQL' }
    ];
    return mockSkills;
  }


}
