// PAS 4 · La targeta d'un curs

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { colorFamilia, type Curs } from '../dades/cursos';

type Props = {
  curs: Curs;
  preferit?: boolean; // és un dels preferits de l'usuari? (pas 8)
  onPreferit?: (id: number) => void; // es prem el cor (pas 8)
  onDetall?: (curs: Curs) => void; // es prem «Programa» (pas 10)
};

export function TargetaCurs({
  curs,
  preferit = false,
  onPreferit,
  onDetall,
}: Props) {
  const esgotat = curs.places === 0;
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          height: 96,
          bgcolor: colorFamilia[curs.familia],
          display: 'flex',
          alignItems: 'flex-end',
          p: 1.5,
        }}
      >
        <Chip label={curs.familia} size="small" sx={{ bgcolor: 'white' }} />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Typography variant="h6" component="h3">{curs.nom}</Typography>
          <IconButton
            aria-label={preferit ? 'Treu dels preferits' : 'Afegeix als preferits'}
            color="primary"
            onClick={() => onPreferit?.(curs.id)}
          >
            {preferit ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          {curs.resum}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
          <Chip icon={<ScheduleIcon />} label={`${curs.hores} h`} size="small" variant="outlined" />
          <Chip label={curs.modalitat} size="small" variant="outlined" />
          <Rating value={curs.valoracio} precision={0.5} size="small" readOnly />
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Typography variant="caption" color={esgotat ? 'error' : 'text.secondary'}>
          {esgotat ? 'Places esgotades' : `${curs.places} places lliures`}
        </Typography>
        <Button size="small" variant="contained" disabled={esgotat} onClick={() => onDetall?.(curs)}>
          Programa
        </Button>
      </CardActions>
    </Card>
  );
}
