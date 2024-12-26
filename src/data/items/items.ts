type ItemCategory =
  | 'Mainhand'
  | 'Offhand'
  | 'Armour'
  | 'Consumable'
  | 'Resource';

type Item = {
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
];

export const getItemById = (id: string): Item | undefined => {
  return items.find((item) => item.id === id);
};
