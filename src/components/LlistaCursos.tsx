// PAS 5 · La graella amb totes les targetes

// FORAT 5.1 · imports de MUI
import type { Curs } from '../dades/cursos';
import { TargetaCurs } from './TargetaCurs';

type Props = {
  cursos: Curs[];
  preferits?: Set<number>; // els id dels cursos preferits (pas 8)
  onPreferit?: (id: number) => void; // (pas 8)
  onDetall?: (curs: Curs) => void; // (pas 10)
};

export function LlistaCursos({
  cursos,
  preferits = new Set(),
  onPreferit,
  onDetall,
}: Props) {
  // FORAT 5.2 · provisional: només la primera targeta, per provar-la al pas 4
  return <div style={{ maxWidth: 360 }}><TargetaCurs curs={cursos[0]} /></div>;
}
