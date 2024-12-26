import { getItemById } from 'src/data/items/items';
import { getSkillById } from 'src/data/skills/skills';

function Game() {
  console.log(getItemById('bronze_sword'));
  console.log(getSkillById('mining'));
  return <>Game</>;
}

export default Game;
