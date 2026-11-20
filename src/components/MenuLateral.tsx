// PAS 9 · El menú lateral amb les famílies

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ComputerIcon from '@mui/icons-material/Computer';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { families, type Familia } from '../dades/cursos';

type Props = {
  obert: boolean;
  onTancar: () => void;
  familia: Familia | 'Totes';
  onFamilia: (nova: Familia | 'Totes') => void;
};

const icones: Record<Familia, React.ReactNode> = {
  Informàtica: <ComputerIcon />,
  Màrqueting: <CampaignIcon />,
  Administració: <AccountBalanceIcon />,
  Logística: <LocalShippingIcon />,
};

export function MenuLateral({ obert, onTancar, familia, onFamilia }: Props) {
  const tria = (nova: Familia | 'Totes') => {
    onFamilia(nova);
    onTancar();
  };
  return (
    <Drawer open={obert} onClose={onTancar}>
      <Box sx={{ width: 280 }} role="presentation">
        <List subheader={<ListSubheader>Famílies professionals</ListSubheader>}>
          <ListItemButton selected={familia === 'Totes'} onClick={() => tria('Totes')}>
            <ListItemIcon><AppsIcon /></ListItemIcon>
            <ListItemText primary="Tots els cursos" />
          </ListItemButton>
          <Divider sx={{ my: 1 }} />
          {families.map((f) => (
            <ListItemButton key={f} selected={familia === f} onClick={() => tria(f)}>
              <ListItemIcon>{icones[f]}</ListItemIcon>
              <ListItemText primary={f} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
