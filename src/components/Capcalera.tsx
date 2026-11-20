// PAS 2 · La capçalera de la web

import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';

type Props = {
  preferits?: number; // quants cursos hi ha marcats com a preferits (pas 8)
  onObrirMenu?: () => void; // què fer quan es prem el botó del menú (pas 9)
};

export function Capcalera({ preferits = 0, onObrirMenu }: Props) {
  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          aria-label="Obre el menú"
          onClick={onObrirMenu}
          sx={{ mr: 1 }}
        >
          <MenuIcon />
        </IconButton>
        <SchoolIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
          PratCursos
        </Typography>
        <Tooltip title="Cursos preferits">
          <IconButton color="inherit" aria-label={`${preferits} cursos preferits`}>
            <Badge badgeContent={preferits} color="primary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Button color="inherit" href="#cursos">
          Cursos
        </Button>
      </Toolbar>
    </AppBar>
  );
}
