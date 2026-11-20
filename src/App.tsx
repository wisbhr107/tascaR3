import { useState } from 'react';
import { Container, Typography } from '@mui/material';
// FORAT 11.1 · importa Alert i Snackbar de MUI
import { Capcalera } from './components/Capcalera';
import { Presentacio } from './components/Presentacio';
import { Cercador } from './components/Cercador';
import { LlistaCursos } from './components/LlistaCursos';
import { MenuLateral } from './components/MenuLateral';
import { DetallCurs } from './components/DetallCurs';
import { PeuDePagina } from './components/PeuDePagina';
import { cursos, type Curs, type Familia } from './dades/cursos';

export default function App() {
  // --- Estat de la pàgina (viu a App perquè el comparteixen diversos fills) ---
  const [text, setText] = useState('');
  const [familia, setFamilia] = useState<Familia | 'Totes'>('Totes');
  // FORAT 8.1 · estat dels preferits
  // FORAT 9.4 · estat del menú lateral
  // FORAT 10.3 · estat del curs obert
  // FORAT 11.2 · estat del missatge

  // --- Dades derivades ---
  const cursosFiltrats = cursos.filter((c) =>
    c.nom.toLowerCase().includes(text.toLowerCase()) &&
    (familia === 'Totes' || c.familia === familia),
  );

  // --- Accions ---
  // FORAT 8.2 · canviaPreferit
  // FORAT 10.4 · inscriu

  return (
    <>
      <Capcalera
        // FORAT 8.3 · prop preferits
        // FORAT 9.5 · prop onObrirMenu
      />
      {/* FORAT 9.6 · el menú lateral */}

      <Presentacio />

      <Container maxWidth="lg" id="cursos" sx={{ py: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Catàleg de cursos
        </Typography>
        <Cercador text={text} onText={setText} familia={familia} onFamilia={setFamilia} />
        <LlistaCursos
          cursos={cursosFiltrats}
          // FORAT 8.4 · props preferits i onPreferit
          // FORAT 10.5 · prop onDetall
        />
      </Container>

      <PeuDePagina />

      {/* FORAT 10.6 · el diàleg amb la fitxa del curs */}
      {/* FORAT 11.4 · l'avís d'inscripció */}
    </>
  );
}
