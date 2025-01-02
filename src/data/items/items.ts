import copperOre from 'assets/Copper_ore.png';
import tinOre from 'assets/Tin_ore.png';
import ironOre from 'assets/Iron_ore.png';

type ItemCategory =
  | 'Mainhand'
  | 'Offhand'
  | 'Armour'
  | 'Consumable'
  | 'Resource';

export type Actions =
  | 'Use'
  | 'Equip'
  | 'Drop'
  | 'Examine'
  | 'Withdraw'
  | 'Deposit';

export type Item = {
  id: string;
  icon: string;
  name: string;
  category: ItemCategory;
  description: string;
  value: number;
  actions: Actions[];
  isEquipable: boolean;
  isStackable: boolean;
  stats?: {
    attack?: number;
    defense?: number;
    speed?: number;
  };
  consumableEffect?: {
    restoreHealth?: number;
    restoreMana?: number;
  };
};

export type Resource = {
  id: string;
  name: string;
  levelRequired: number;
  experienceGiven: number;
  drop: Item;
};

export const items: Item[] = [
  {
    id: 'bronze_sword',
    icon: '',
    name: 'Bronze Sword',
    category: 'Mainhand',
    description: 'A bronze sword. Better than nothing.',
    value: 100,
    actions: ['Equip', 'Drop', 'Examine'],
    isEquipable: true,
    isStackable: false,
    stats: {
      attack: 5,
      speed: 1,
    },
  },
  {
    id: 'copper_ore',
    icon: copperOre,
    name: 'Copper Ore',
    category: 'Resource',
    description: 'A lump of copper ore.',
    value: 10,
    actions: ['Use', 'Drop', 'Examine'],
    isEquipable: false,
    isStackable: false,
  },
  {
    id: 'tin_ore',
    icon: tinOre,
    name: 'Tin Ore',
    category: 'Resource',
    description: 'A lump of tin ore.',
    value: 10,
    actions: ['Use', 'Drop', 'Examine'],
    isEquipable: false,
    isStackable: false,
  },
  {
    id: 'iron_ore',
    icon: ironOre,
    name: 'Iron Ore',
    category: 'Resource',
    description: 'A lump of iron ore.',
    value: 30,
    actions: ['Use', 'Drop', 'Examine'],
    isEquipable: false,
    isStackable: false,
  },
];

export const getItemById = (id: string): Item | undefined => {
  return items.find((item) => item.id === id);
};
