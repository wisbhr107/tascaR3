// PAS 9 · El menú lateral amb les famílies

// FORAT 9.1 · imports de MUI, de les icones i de la llista de famílies
import type { Familia } from '../dades/cursos';

type Props = {
  obert: boolean;
  onTancar: () => void;
  familia: Familia | 'Totes';
  onFamilia: (nova: Familia | 'Totes') => void;
};

// FORAT 9.2 · una icona per família

export function MenuLateral({ obert, onTancar, familia, onFamilia }: Props) {
  return null; // FORAT 9.3 · substitueix aquesta línia pel codi del guió
}
