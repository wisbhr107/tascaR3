import { useState } from 'react';
import { Alert, Container, Snackbar, Typography } from '@mui/material';
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
  const [preferits, setPreferits] = useState<Set<number>>(new Set());
  const [menuObert, setMenuObert] = useState(false);
  const [cursObert, setCursObert] = useState<Curs | null>(null);
  const [missatge, setMissatge] = useState<string | null>(null);

  // --- Dades derivades ---
  const cursosFiltrats = cursos.filter((c) =>
    c.nom.toLowerCase().includes(text.toLowerCase()) &&
    (familia === 'Totes' || c.familia === familia),
  );

  // --- Accions ---
  const canviaPreferit = (id: number) => {
    setPreferits((anteriors) => {
      const nous = new Set(anteriors);
      if (nous.has(id)) nous.delete(id);
      else nous.add(id);
      return nous;
    });
  };
  const inscriu = (curs: Curs) => {
    setCursObert(null);
    setMissatge(`T’has inscrit a «${curs.nom}». Rebràs un correu amb els detalls.`);
  };

  return (
    <>
      <Capcalera
        preferits={preferits.size}
        onObrirMenu={() => setMenuObert(true)}
      />
      <MenuLateral
        obert={menuObert}
        onTancar={() => setMenuObert(false)}
        familia={familia}
        onFamilia={setFamilia}
      />

      <Presentacio />

      <Container maxWidth="lg" id="cursos" sx={{ py: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Catàleg de cursos
        </Typography>
        <Cercador text={text} onText={setText} familia={familia} onFamilia={setFamilia} />
        <LlistaCursos
          cursos={cursosFiltrats}
          preferits={preferits}
          onPreferit={canviaPreferit}
          onDetall={setCursObert}
        />
      </Container>

      <PeuDePagina />

      <DetallCurs
        curs={cursObert}
        onTancar={() => setCursObert(null)}
        onInscriure={inscriu}
      />
      <Snackbar
        open={missatge !== null}
        autoHideDuration={4000}
        onClose={() => setMissatge(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setMissatge(null)}>
          {missatge}
        </Alert>
      </Snackbar>
    </>
  );
}
