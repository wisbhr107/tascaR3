// PASSOS 6 i 7 · El cercador de text i el desplegable de família

// FORAT 6.1 · imports del camp de text
// FORAT 7.1 · imports del desplegable
import type { Familia } from '../dades/cursos';

type Props = {
  text: string;
  onText: (nou: string) => void;
  familia?: Familia | 'Totes'; // si no arriba, no es mostra el desplegable (pas 7)
  onFamilia?: (nova: Familia | 'Totes') => void; // (pas 7)
};

export function Cercador({ text, onText, familia, onFamilia }: Props) {
  return null; // FORAT 6.2 · substitueix aquesta línia pel JSX del guió
}
