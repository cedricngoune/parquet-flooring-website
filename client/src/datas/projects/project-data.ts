import solCover from "assets/images/Sol-carrières-sur-seines/sol-cover.jpg";
import terrasseCover from "assets/images/terrase camaru-cabris/cover.png";
import scaleCover from "assets/images/Escaliers/cover.jpg";
import img_four from "assets/images/terrase camaru-cabris/20210528_212304.png";
import img_five from "assets/images/terrase camaru-cabris/terrasse11.png";
import img_six from "assets/images/terrase camaru-cabris/terrasse14.png";
import img_seven from "assets/images/GODET-chene contre collé-carrieres sur seine/cover.jpg";
import img_eigt from "assets/images/GODET-chene contre collé-carrieres sur seine/escalier1.jpg";
import img_nine from "assets/images/GODET-chene contre collé-carrieres sur seine/escalier2.jpg";
import img_ten from "assets/images/GODET-chene contre collé-carrieres sur seine/escalier3.jpg";

export interface ProjectProps {
  title: string;
  cover: string;
  images: Array<string>;
}

export const projectData: Array<ProjectProps> = [
  {
    title: "Parquet",
    cover: solCover,
    images: [],
  },
  {
    title: "Terrasse",
    cover: terrasseCover,
    images: [],
  },
  {
    title: "Escaliers",
    cover: scaleCover,
    images: [],
  },
  {
    title: "Magasins",
    cover: terrasseCover,
    images: [],
  },
];
