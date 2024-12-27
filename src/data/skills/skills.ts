type Skill = {
  id: string;
  name: string;
  maxLevel: number;
  experienceCurve: (
    currentLevel: number,
    currentExperience: number,
  ) => { experienceRemaining: number; experienceForNextLevel: number };
};

const maxLevel = 99;

export const getSkillById = (id: string): Skill | undefined => {
  return skills.find((skill) => skill.id === id);
};

const calculateExperienceForLevel = (
  currentLevel: number,
  currentExperience: number,
): { experienceRemaining: number; experienceForNextLevel: number } => {
  const getExperienceForLevel = (level: number): number => {
    let experience = 0;
    for (let i = 1; i < level; i++) {
      experience += Math.floor(i + 300 * Math.pow(2, i / 7));
    }

    return Math.floor(experience / 4);
  };

  if (currentLevel >= maxLevel) {
    return { experienceRemaining: 0, experienceForNextLevel: 0 };
  }

  const nextLevel = currentLevel + 1;
  const experienceForNextLevel = getExperienceForLevel(nextLevel);

  const experienceRemaining = Math.max(
    0,
    experienceForNextLevel - currentExperience,
  );

  return {
    experienceRemaining,
    experienceForNextLevel,
  };
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
