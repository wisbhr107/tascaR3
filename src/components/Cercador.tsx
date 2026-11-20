// PASSOS 6 i 7 · El cercador de text i el desplegable de família

import { FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { families } from '../dades/cursos';
import type { Familia } from '../dades/cursos';

type Props = {
  text: string;
  onText: (nou: string) => void;
  familia?: Familia | 'Totes'; // si no arriba, no es mostra el desplegable (pas 7)
  onFamilia?: (nova: Familia | 'Totes') => void; // (pas 7)
};

export function Cercador({ text, onText, familia, onFamilia }: Props) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
      <TextField
        fullWidth
        label="Cerca cursos"
        value={text}
        onChange={(e) => onText(e.target.value)}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
          },
        }}
      />
      {familia !== undefined && (
        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel id="etiqueta-familia">Família</InputLabel>
          <Select
            labelId="etiqueta-familia"
            label="Família"
            value={familia}
            onChange={(e) => onFamilia?.(e.target.value as Familia | 'Totes')}
          >
            <MenuItem value="Totes">Totes les famílies</MenuItem>
            {families.map((f) => <MenuItem key={f} value={f}>{f}</MenuItem>)}
          </Select>
        </FormControl>
      )}
    </Stack>
  );
}
