// PAS 10 · La fitxa d'un curs dins d'un diàleg

// FORAT 10.1 · imports de MUI i de la icona
import type { Curs } from '../dades/cursos';

type Props = {
  curs: Curs | null; // null = cap diàleg obert
  onTancar: () => void;
  onInscriure: (curs: Curs) => void;
};

export function DetallCurs({ curs, onTancar, onInscriure }: Props) {
  return null; // FORAT 10.2 · substitueix aquesta línia pel JSX del guió
}
