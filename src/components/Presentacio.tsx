// PAS 3 · La presentació (la zona gran sota la capçalera)

import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export function Presentacio() {
  return (
    <Box sx={{ bgcolor: 'secondary.main', color: 'common.white', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ maxWidth: 760 }}>
          <Typography variant="overline" sx={{ color: 'primary.light', fontWeight: 700 }}>
            FORMACIÓ CONTÍNUA
          </Typography>
          <Typography variant="h2" component="h2" sx={{ fontWeight: 800 }}>
            Aprèn avui. Avança demà.
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: 'grey.400' }}>
            Cursos pràctics per impulsar el teu futur professional.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button href="#cursos" variant="contained" endIcon={<ArrowDownwardIcon />}>
              Veure els cursos
            </Button>
            <Button href="#cursos" variant="outlined" color="inherit">
              Explora el catàleg
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
