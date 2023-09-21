import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336',
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
      300: '#e57373',
      400: '#ef5350',
      500: '#f44336',
      600: '#e53935',
      700: '#d32f2f',
      800: '#c62828',
      900: '#b71b1c'
    },
    secondary: {
      main: '#00c0c7',
      50: '#dff6f6',
      100: '#afe9e9',
      200: '#7adadc',
      300: '#42cbcf',
      400: '#00c0c7',
      500: '#00b6c1',
      600: '#00a6af',
      700: '#009196',
      800: '#007d7f',
      900: '#005a56'
    }
  },
});

export default theme;
