import player from 'src/db/player.json';
import Mining from 'features/skills/Mining';

function Game() {
  return (
    <>
      <p>{JSON.stringify(player, null, 2)}</p>
      <Mining />
    </>
  );
}

export default Game;
