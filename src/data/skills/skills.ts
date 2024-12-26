type Skill = {
  id: string;
  name: string;
  maxLevel: number;
  experienceCurve: (level: number) => number;
};

const maxLevel = 99;

const calculateExperienceForLevel = (level: number) => {
  return Math.floor((level - 1) ** 2 + 300 * 2 ** ((level - 1) / 7));
};

export const skills: Skill[] = [
  {
    id: 'attack',
    name: 'Attack',
    maxLevel,
    experienceCurve: calculateExperienceForLevel,
  },
  {
    id: 'strength',
    name: 'Strength',
    maxLevel,
    experienceCurve: calculateExperienceForLevel,
  },
  {
    id: 'defense',
    name: 'Defense',
    maxLevel,
    experienceCurve: calculateExperienceForLevel,
  },
  {
    id: 'hitpoints',
    name: 'Hitpoints',
    maxLevel,
    experienceCurve: calculateExperienceForLevel,
  },
  {
    id: 'mining',
    name: 'Mining',
    maxLevel,
    experienceCurve: calculateExperienceForLevel,
  },
];

export const getSkillById = (id: string): Skill | undefined => {
  return skills.find((skill) => skill.id === id);
};
