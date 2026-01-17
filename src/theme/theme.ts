import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400,
          lineHeight: 1.5,
          color: colors.primary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat, sans-serif',
          textTransform: 'none',
          fontSize: 16,
          fontWeight: 700,
        },
      },
    },
  },
});
