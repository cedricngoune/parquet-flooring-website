import { uuid } from "utils/generateId";
import cover from "../images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/cover.jpg";
import img_one from "../images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/one.jpg";
import img_two from "../images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/two.jpg";
import img_three from "../images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/three.jpg";

import t_cover from "../images/terrase camaru-cabris/cover.png";
import t_one from "../images/terrase camaru-cabris/20210528_212304.png";
import t_two from "../images/terrase camaru-cabris/terrasse11.png";
import t_three from "../images/terrase camaru-cabris/terrasse14.png";
import t_four from "../images/terrase camaru-cabris/20210514_155956.png";
import t_five from "../images/terrase camaru-cabris/20210519_183011.png";

import scale_cover from "../images/Escaliers/cover.jpg";
import scale_one from "../images/Escaliers/escalier1.jpg";
import scale_two from "../images/Escaliers/escalier2.jpg";
import scale_three from "../images/Escaliers/escalier3.jpg";
import scale_four from "../images/Escaliers/escalier4.jpg";
import scale_five from "../images/Escaliers/escalier5.jpg";

import floor_cover from "../images/Sol-carrières-sur-seines/cover.jpg";
import floor_one from "../images/Sol-carrières-sur-seines/one.jpg";
import floor_two from "../images/Sol-carrières-sur-seines/two.jpg";

type ProjectType = "Particulier" | "Hotel" | "Magasin" | "Commerce";
export interface IInfos {
  name?: string;
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
    images: [cover, img_one, img_two, img_three],
    infos: {
      name: "Vieux campeur",
      location: "Marseilles (13)",
      projectType: "Magasin",
    },
  },

  {
    id: 2,
    title: "Terrasse",
    images: [t_cover, t_one, t_two, t_three, t_four, t_five],
    infos: {
      name: "Terrasse",
      location: "Cabri(35)",
      projectType: "Particulier",
    },
  },
  {
    id: 3,
    title: "Escaliers",
    images: [
      scale_cover,
      scale_one,
      scale_two,
      scale_three,
      scale_four,
      scale_five,
    ],
    infos: {
      name: "Escaliers",
      location: "Carrières sur seine (78)",
      projectType: "Particulier",
    },
  },
  {
    id: 4,
    title: "Pose de sols",
    images: [floor_cover, floor_one, floor_two],
    infos: {
      location: "Carrières sur seines (78)",
      projectType: "Particulier",
    },
  },
];

export const projectsCover = projectGrid.map((image) => image.images[0]);
