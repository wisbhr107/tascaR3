// PAS 1 · Un component de prova per veure MUI i el tema en acció.
// Al pas 3, quan la web ja tingui presentació, el traurem de la pàgina.

import { Button, Container, Stack, Typography } from '@mui/material';

export function ProvaDelTema() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Hola, MUI!
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Aquest text i aquests botons són components de MUI.
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </Stack>
    </Container>
  );
}
