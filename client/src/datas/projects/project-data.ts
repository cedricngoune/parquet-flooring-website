import parquetCover from "assets/images/Sol-carrières-sur-seines/cover.jpg";
import terrasseCover from "assets/images/terrase camaru-cabris/cover.png";
import solCover from "assets/images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/cover.jpg";
import scaleCover from "assets/images/Escaliers/cover.jpg";
import terrasse_one from "assets/images/terrase camaru-cabris/20210528_212304.png";
import terrasse_two from "assets/images/terrase camaru-cabris/terrasse11.png";
import terrasse_three from "assets/images/terrase camaru-cabris/terrasse14.png";
import scaleImgOne from "assets/images/Escaliers/escalier1.jpg";
import scaleImgTwo from "assets/images/Escaliers/escalier2.jpg";
import scaleImgThree from "assets/images/Escaliers/escalier3.jpg";
import scaleImgFour from "assets/images/Escaliers/escalier4.jpg";
import scaleImgFive from "assets/images/Escaliers/escalier5.jpg";
import solImgOne from "assets/images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/20181231_114715.jpg";
import solImgTwo from "assets/images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/20181231_114716.jpg";
import solImgThree from "assets/images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/20181231_114725.jpg";

type ProjectType = "Particulier" | "Hotel" | "Magasin" | "Commerce";
export interface IInfos {
  location: string;
  area: string;
  projectType: ProjectType;
}
export interface ProjectProps {
  title: string;
  cover: string;
  images: Array<string>;
  infos?: IInfos;
}

export const projectData: Array<ProjectProps> = [
  {
    title: "Parquet",
    cover: parquetCover,
    images: [
      "assets/images/Sol-carrières-sur-seines/one.jpg",
      "assets/images/Sol-carrières-sur-seines/two.jpg",
    ],
    infos: {
      location: "Carrières sur seine (78)",
      area: "",
      projectType: "Particulier",
    },
  },
  {
    title: "Terrasse",
    cover: terrasseCover,
    images: [terrasse_one, terrasse_two, terrasse_three],
    infos: {
      location: "Cabri(35)",
      area: "",
      projectType: "Particulier",
    },
  },
  {
    title: "Escaliers",
    cover: scaleCover,
    images: [
      scaleImgOne,
      scaleImgTwo,
      scaleImgThree,
      scaleImgFour,
      scaleImgFive,
    ],
    infos: {
      location: "Carrières sur seine (78)",
      area: "",
      projectType: "Particulier",
    },
  },
  {
    title: "Sol",
    cover: solCover,
    images: [],
    infos: {
      location: "Marseilles (13)",
      area: "",
      projectType: "Magasin",
    },
  },
];
