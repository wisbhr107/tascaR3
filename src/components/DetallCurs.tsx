// PAS 10 · La fitxa d'un curs dins d'un diàleg

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { Curs } from '../dades/cursos';

type Props = {
  curs: Curs | null; // null = cap diàleg obert
  onTancar: () => void;
  onInscriure: (curs: Curs) => void;
};

export function DetallCurs({ curs, onTancar, onInscriure }: Props) {
  return (
    <Dialog open={curs !== null} onClose={onTancar} fullWidth maxWidth="sm">
      {curs && (
        <>
          <DialogTitle>{curs.nom}</DialogTitle>
          <DialogContent>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Typography color="text.secondary">{curs.familia}</Typography>
              <Typography color="text.secondary">·</Typography>
              <Typography color="text.secondary">{curs.hores} hores</Typography>
              <Typography color="text.secondary">·</Typography>
              <Typography color="text.secondary">{curs.modalitat}</Typography>
            </Stack>
            <Typography variant="body1" sx={{ mb: 2 }}>{curs.resum}</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h6" component="h3">Programa del curs</Typography>
            <List dense>
              {curs.continguts.map((tema) => (
                <ListItem key={tema}>
                  <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                  <ListItemText primary={tema} />
                </ListItem>
              ))}
            </List>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button onClick={onTancar}>Tanca</Button>
            <Button variant="contained" onClick={() => onInscriure(curs)} disabled={curs.places === 0}>
              Inscriu-me
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
