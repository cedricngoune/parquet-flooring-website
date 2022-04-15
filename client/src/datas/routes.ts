interface IRoutes {
  name: string;
  url: string;
}
export const routes: IRoutes[] = [
  {
    name: "Accueil",
    url: "/",
  },
  {
    name: "Réalisations",
    url: "realisations",
  },
  {
    name: "Contacts",
    url: "contact",
  },
];
