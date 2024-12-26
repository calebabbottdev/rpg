type ItemCategory =
  | 'Mainhand'
  | 'Offhand'
  | 'Armour'
  | 'Consumable'
  | 'Resource';

export type Item = {
  id: string;
  name: string;
  category: ItemCategory;
  description: string;
  value: number;
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

export const items: Item[] = [
  {
    id: 'bronze_sword',
    name: 'Bronze Sword',
    category: 'Mainhand',
    description: 'A bronze sword. Better than nothing.',
    value: 100,
    isEquipable: true,
    isStackable: false,
    stats: {
      attack: 5,
      speed: 1,
    },
  },
  {
    id: 'copper_ore',
    name: 'Copper Ore',
    category: 'Resource',
    description: 'A lump of copper ore.',
    value: 10,
    isEquipable: false,
    isStackable: false,
  },
  {
    id: 'tin_ore',
    name: 'Tin Ore',
    category: 'Resource',
    description: 'A lump of tin ore.',
    value: 10,
    isEquipable: false,
    isStackable: false,
  },
  {
    id: 'iron_ore',
    name: 'Iron Ore',
    category: 'Resource',
    description: 'A lump of iron ore.',
    value: 30,
    isEquipable: false,
    isStackable: false,
  },
];

export const getItemById = (id: string): Item | undefined => {
  return items.find((item) => item.id === id);
};
