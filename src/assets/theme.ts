import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#023047',
  //       contrastText: '#fff',
  //     },
  //     secondary: {
  //       main: '#219ebc',
  //       contrastText: '#fff',
  //     },
  //     background: {
  //       default: '#eee',
  //     },
  //     text: {
  //       primary: '#000',
  //     },
  //   },
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      'monospace',
      //   '-apple-system',
      //   'BlinkMacSystemFont',
      //   '"Segoe UI"',
      //   'Roboto',
      //   '"Helvetica Neue"',
      //   'Arial',
      //   'sans-serif',
      //   '"Apple Color Emoji"',
      //   '"Segoe UI Emoji"',
      //   '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
