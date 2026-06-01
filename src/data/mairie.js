export const mairie = {
  nom: "Mairie de Valojoulx",
  adresse: "1 place de la Mairie",
  codePostal: "24290",
  commune: "Valojoulx",
  telephone: "05 53 50 77 78",
  telephoneLien: "tel:+33553507778",
  email: "contact@mairievalojoulx.fr",
  emailLien: "mailto:contact@mairievalojoulx.fr",
  horaires: [
    { jour: "Lundi",    ouvert: false },
    { jour: "Mardi",    ouvert: true,  matin: "8h–12h", apm: "13h30–17h30" },
    { jour: "Mercredi", ouvert: false },
    { jour: "Jeudi",    ouvert: false },
    { jour: "Vendredi", ouvert: true,  matin: "8h–12h", apm: "13h30–17h30" },
    { jour: "Samedi",   ouvert: false },
    { jour: "Dimanche", ouvert: false },
  ],
  horairesCourt: "Mardi et Vendredi, 8h–12h et 13h30–17h30",
  maire: "Mireille Calvo",
  adjoints: [
    { rang: "1er adjoint",  nom: "Nicolas Duquerroy" },
    { rang: "2e adjointe",  nom: "Martine Derenne" },
    { rang: "3e adjoint",   nom: "Jean-François Blan" },
  ],
  conseillers: [
    "Danielle Avez",
    "Alain Laurent",
    "Brigitte Dartenset",
    "Bruno Bastian",
    "Catherine Beatrix",
    "Jean-Pierre Mège",
    "Philippe Bastide",
  ],
};

export const commune = {
  nom: "Valojoulx",
  departement: "Dordogne (24)",
  region: "Périgord Noir",
  codeInsee: "24563",
  population: 286,
  populationAnnee: 2022,
  superficie: "11,79 km²",
  altitudeMin: 72,
  altitudeMax: 267,
  communauteCommunes: "Vallée de l'Homme",
  distanceLascaux: "7 km",
  distanceSarlat: "~30 km",
};

export const gite = {
  nom: "La Grange de Valojoulx",
  capacite: 14,
  gestionnaire: "Conciergerie Montignac-Lascaux",
  contact: "Alexandre",
  telephone: "07 81 61 08 94",
  telephoneLien: "tel:+33781610894",
  email: "contact@conciergeriemontignaclascaux.com",
  emailLien: "mailto:contact@conciergeriemontignaclascaux.com",
};

export const urgences = [
  { numero: "15",   label: "SAMU" },
  { numero: "17",   label: "Gendarmerie" },
  { numero: "18",   label: "Pompiers" },
  { numero: "112",  label: "Urgences européen" },
  { numero: "3114", label: "Prévention suicide" },
  { numero: "3149", label: "Personnes âgées" },
];
