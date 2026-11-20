// Dades d'exemple (inventades) del catàleg de PratCursos.

export type Familia = 'Informàtica' | 'Màrqueting' | 'Administració' | 'Logística';

export type Curs = {
  id: number;
  nom: string;
  familia: Familia;
  hores: number;
  modalitat: 'Presencial' | 'En línia' | 'Semipresencial';
  valoracio: number; // de 0 a 5
  places: number; // places lliures
  resum: string;
  continguts: string[];
};

export const families: Familia[] = [
  'Informàtica',
  'Màrqueting',
  'Administració',
  'Logística',
];

// Un color per família: el fem servir a la capçalera de cada targeta.
export const colorFamilia: Record<Familia, string> = {
  Informàtica: '#1565C0',
  Màrqueting: '#AD1457',
  Administració: '#2E7D32',
  Logística: '#EF6C00',
};

export const cursos: Curs[] = [
  {
    id: 1,
    nom: 'React amb TypeScript',
    familia: 'Informàtica',
    hores: 40,
    modalitat: 'Presencial',
    valoracio: 4.5,
    places: 6,
    resum: 'Components, estat, hooks i connexió amb APIs per fer interfícies modernes.',
    continguts: [
      'Components i props',
      'Estat i esdeveniments',
      'Hooks',
      'APIs amb fetch',
    ],
  },
  {
    id: 2,
    nom: 'Bases de dades amb SQL',
    familia: 'Informàtica',
    hores: 30,
    modalitat: 'Semipresencial',
    valoracio: 4,
    places: 0,
    resum: 'Disseny de taules, consultes amb JOIN i accés des de Java.',
    continguts: ['Model relacional', 'SELECT i JOIN', 'Transaccions', 'JDBC'],
  },
  {
    id: 3,
    nom: 'Cloud amb Cloudflare',
    familia: 'Informàtica',
    hores: 20,
    modalitat: 'En línia',
    valoracio: 5,
    places: 12,
    resum: 'Publica webs i funcions al núvol sense pagar ni un cèntim.',
    continguts: ['Pages', 'Workers', 'D1', 'Desplegament continu'],
  },
  {
    id: 4,
    nom: 'Xarxes socials per a empreses',
    familia: 'Màrqueting',
    hores: 25,
    modalitat: 'En línia',
    valoracio: 4,
    places: 9,
    resum: 'Planifica continguts, mesura resultats i fes créixer una marca.',
    continguts: ['Calendari editorial', 'Mètriques', 'Publicitat', 'Casos reals'],
  },
  {
    id: 5,
    nom: 'Disseny gràfic amb Penpot',
    familia: 'Màrqueting',
    hores: 30,
    modalitat: 'Presencial',
    valoracio: 3.5,
    places: 4,
    resum: 'Wireframes, prototips i guies d’estil amb una eina lliure.',
    continguts: ['Retícules', 'Tipografia', 'Components', 'Prototips'],
  },
  {
    id: 6,
    nom: 'Comptabilitat bàsica',
    familia: 'Administració',
    hores: 35,
    modalitat: 'Presencial',
    valoracio: 4,
    places: 15,
    resum: 'El pla general comptable explicat des de zero, amb casos pràctics.',
    continguts: ['Comptes', 'Assentaments', 'Balanç', 'IVA'],
  },
  {
    id: 7,
    nom: 'Fulls de càlcul avançats',
    familia: 'Administració',
    hores: 20,
    modalitat: 'En línia',
    valoracio: 4.5,
    places: 20,
    resum: 'Taules dinàmiques, funcions de cerca i quadres de comandament.',
    continguts: ['Funcions', 'Taules dinàmiques', 'Gràfics', 'Macros'],
  },
  {
    id: 8,
    nom: 'Gestió de magatzem',
    familia: 'Logística',
    hores: 30,
    modalitat: 'Semipresencial',
    valoracio: 3.5,
    places: 7,
    resum: 'Organitza estocs, comandes i transport amb eines digitals.',
    continguts: ['Inventaris', 'Codis de barres', 'Rutes', 'Indicadors'],
  },
  {
    id: 9,
    nom: 'Transport internacional',
    familia: 'Logística',
    hores: 40,
    modalitat: 'Presencial',
    valoracio: 4,
    places: 3,
    resum: 'Incoterms, duanes i documentació per moure mercaderies pel món.',
    continguts: ['Incoterms', 'Duanes', 'Assegurances', 'Documentació'],
  },
];
