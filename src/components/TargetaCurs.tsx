// PAS 4 · La targeta d'un curs

// FORAT 4.1 · imports de MUI i de les icones
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
  return null; // FORAT 4.2 · substitueix aquesta línia pel codi del guió
}
