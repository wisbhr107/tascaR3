# Sessió 15 · PratCursos — esquelet

Projecte de partida de la sessió 15 del mòdul **0488 Desenvolupament d'interfícies** (DAM2, Prat FP, curs 2026-27).

És l'esquelet d'una web (un catàleg de cursos) amb **48 forats** marcats amb `FORAT` als fitxers de `src/`.
Els vas omplint en l'ordre del guió de la sessió i a cada pas hi entra un component nou de **Material UI**.

## Per començar (pas 0 del guió)

```bash
npm install
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
npm run dev     # http://localhost:5173
```

## Com trobar un forat

A VS Code, **Ctrl + Maj + F** i busca el número, per exemple `FORAT 4.2`.
Esborra la línia sencera del forat i escriu al seu lloc el codi del guió.

## Fitxers

```
src/
  main.tsx                  FORATS 1.5–1.6
  tema.ts                   FORATS 1.3–1.4
  App.tsx                   l'estat i la composició de la pàgina (passos 3, 6–11)
  dades/cursos.ts           complet: no l'has de tocar
  components/
    ProvaDelTema.tsx        pas 1
    Capcalera.tsx           pas 2
    Presentacio.tsx         pas 3
    TargetaCurs.tsx         pas 4
    LlistaCursos.tsx        pas 5
    Cercador.tsx            passos 6 i 7
    MenuLateral.tsx         pas 9
    DetallCurs.tsx          pas 10
    PeuDePagina.tsx         pas 12
```

Al final, busca `FORAT` a tot el projecte: no ha de sortir res a `src/`.
