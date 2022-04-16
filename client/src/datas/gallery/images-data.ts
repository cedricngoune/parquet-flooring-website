import img_one from "datas/images/terrase camaru-cabris/20210514_155956.png";
import img_two from "datas/images/terrase camaru-cabris/20210519_183011.png";
import img_three from "datas/images/terrase camaru-cabris/20210528_095906.png";
import img_four from "datas/images/terrase camaru-cabris/20210528_212304.png";
import img_five from "datas/images/terrase camaru-cabris/terrasse11.png";
import img_six from "datas/images/terrase camaru-cabris/terrasse14.png";
import img_seven from "datas/images/GODET-chene contre collé-carrieres sur seine/cover.jpg";
import img_eigt from "datas/images/GODET-chene contre collé-carrieres sur seine/escalier1.jpg";
import img_nine from "datas/images/GODET-chene contre collé-carrieres sur seine/escalier2.jpg";
import img_ten from "datas/images/GODET-chene contre collé-carrieres sur seine/escalier3.jpg";

export interface GalleryProps {
  description: string;
  imageUrl: string;
}

export const galleryData: Array<GalleryProps> = [
  {
    description: "Sol",
    imageUrl: img_one,
  },
  {
    description: "",
    imageUrl: img_two,
  },
  {
    description: "",
    imageUrl: img_three,
  },
  {
    description: "",
    imageUrl: img_four,
  },
  {
    description: "",
    imageUrl: img_five,
  },
  {
    description: "",
    imageUrl: img_six,
  },
  {
    description: "",
    imageUrl: img_seven,
  },
  {
    description: "",
    imageUrl: img_eigt,
  },
  {
    description: "",
    imageUrl: img_nine,
  },
  {
    description: "",
    imageUrl: img_seven,
  },
  {
    description: "",
    imageUrl: img_ten,
  },
];
