import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import 'src/index.css';

// Assets
import theme from 'assets/theme';

// Components
import Game from 'features/game/Game';
import Textbox from 'features/textbox/Textbox';

// Redux
import { store } from 'app/store';
import { Provider } from 'react-redux';

// MUI
import { CssBaseline, ThemeProvider } from '@mui/material';
import GameBar from './interface/GameBar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GameBar />
        <Textbox />
        <Game />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
