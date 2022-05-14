import { uuid } from "utils/generateId";

type ProjectType = "Particulier" | "Hotel" | "Magasin" | "Commerce";
export interface IInfos {
  location: string;
  area?: number;
  projectType: ProjectType;
}
export interface ProjectProps {
  id: number;
  title: string;
  images: Array<string>;
  infos?: IInfos;
}

export const projectGrid: Array<ProjectProps> = [
  {
    id: 1,
    title: "Professionnels",
    images: [
      "images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/cover.jpg",
      "images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/one.jpg",
      "images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/two.jpg",
      "images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/three.jpg",
    ],
    infos: {
      location: "Marseilles (13)",
      projectType: "Magasin",
    },
  },

  {
    id: 2,
    title: "Terrasse",
    images: [
      "images/terrase camaru-cabris/cover.png",
      "images/terrase camaru-cabris/20210528_212304.png",
      "images/terrase camaru-cabris/terrasse11.png",
      "images/terrase camaru-cabris/terrasse14.png",
      "images/terrase camaru-cabris/20210514_155956.png",
      "images/terrase camaru-cabris/20210519_183011.png",
    ],
    infos: {
      location: "Cabri(35)",
      projectType: "Particulier",
    },
  },
  {
    id: 3,
    title: "Escaliers",
    images: [
      "images/Escaliers/cover.jpg",
      "images/Escaliers/escalier1.jpg",
      "images/Escaliers/escalier2.jpg",
      "images/Escaliers/escalier3.jpg",
      "images/Escaliers/escalier4.jpg",
      "images/Escaliers/escalier5.jpg",
    ],
    infos: {
      location: "Carrières sur seine (78)",
      projectType: "Particulier",
    },
  },
  {
    id: 4,
    title: "Pose de sols",
    images: [
      "images/Sol-carrières-sur-seines/cover.jpg",
      "images/Sol-carrières-sur-seines/one.jpg",
      "images/Sol-carrières-sur-seines/two.jpg",
    ],
    infos: {
      location: "Carrières sur seines (78)",
      projectType: "Particulier",
    },
  },
];

export const projectsCover = projectGrid.map((image) => image.images[0]);
