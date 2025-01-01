import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'src/index.css';

// Redux
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { getSkills } from 'features/skills/skillsSlice';

// Components
import Game from 'features/game/Game';
import Textbox from 'features/textbox/Textbox';

store.dispatch(getSkills());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Textbox />
      <Game />
    </Provider>
  </StrictMode>,
);
