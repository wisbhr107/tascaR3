// PAS 12 · El peu de pàgina

import { Box, Container, Divider, Link, Stack, Typography } from '@mui/material';

export function PeuDePagina() {
  return (
    <Box component="footer" sx={{ bgcolor: 'secondary.main', color: 'common.white', py: 4 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' } }}
        >
          <Box>
            <Typography variant="h6" component="p" sx={{ fontWeight: 700 }}>PratCursos</Typography>
            <Typography variant="body2" sx={{ color: 'grey.400' }}>
              Formació contínua per créixer professionalment.
            </Typography>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Link href="#cursos" color="inherit" underline="hover">Catàleg de cursos</Link>
            <Link href="#top" color="inherit" underline="hover">Torna a l’inici</Link>
          </Stack>
        </Stack>
        <Divider sx={{ my: 2, borderColor: 'grey.700' }} />
        <Typography variant="caption" sx={{ color: 'grey.400' }}>
          © 2026 PratCursos · Projecte educatiu
        </Typography>
      </Container>
    </Box>
  );
}
