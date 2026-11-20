// PAS 1 · El tema de PratCursos
// El TEMA és el lloc on diem a MUI els colors, la lletra i les formes.
// Tots els components de la llibreria el llegeixen: no cal repetir colors.

import { createTheme } from '@mui/material/styles';

export const tema = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#d32f2f' },
    secondary: { main: '#263238' },
    background: { default: '#f5f5f5' },
  },
  shape: { borderRadius: 12 },
  typography: {
    button: { textTransform: 'none', fontWeight: 700 },
    h3: { fontWeight: 800 },
  },
});
