import { Resource } from 'data/items/items';

export const levelUp = (skill: string, level: number) =>
  `Congratulations! Your ${skill.charAt(0).toUpperCase() + skill.slice(1)} level is now ${level}.`;

export const gatheringSkillTooLow = (
  skill: string,
  resource: Resource,
  action: string,
) =>
  `You need a ${skill.charAt(0).toUpperCase() + skill.slice(1)} level of ${resource.levelRequired} to ${action} ${resource.name}.`;
