import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'src/index.css';

// Components
import Game from 'features/game/Game';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Game />
  </StrictMode>,
);
