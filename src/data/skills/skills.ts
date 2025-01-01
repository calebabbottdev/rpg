type Skill = {
  id: string;
  name: string;
  maxLevel: number;
};

const maxLevel = 99;

export const getSkillById = (id: string): Skill | undefined => {
  return skills.find((skill) => skill.id === id);
};

export const totalExperienceForLevel = (level: number): number => {
  let experience = 0;
  for (let i = 1; i < level; i++) {
    experience += Math.floor(i + 300 * Math.pow(2, i / 7));
  }

  return Math.floor(experience / 4);
};

export const levelForTotalExp = (experience: number): number => {
  let level = 1;
  let nextLevelExp = 0;

  while (level < maxLevel) {
    nextLevelExp += Math.floor(
      Math.floor(level + 300 * Math.pow(2, level / 7)) / 4,
    );

    if (nextLevelExp > experience) {
      return level;
    }

    level++;
  }

  return level;
};

export const skills: Skill[] = [
  {
    id: 'attack',
    name: 'Attack',
    maxLevel,
  },
  {
    id: 'strength',
    name: 'Strength',
    maxLevel,
  },
  {
    id: 'defense',
    name: 'Defense',
    maxLevel,
  },
  {
    id: 'hitpoints',
    name: 'Hitpoints',
    maxLevel,
  },
  {
    id: 'mining',
    name: 'Mining',
    maxLevel,
  },
];
