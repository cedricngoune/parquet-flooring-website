import * as React from "react";
import { IInfos } from "datas/projects/project-data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface IProps {
  data: Array<string>;
  infos: IInfos | undefined;
}
const CarouselComponent = ({ data, infos }: IProps) => {
  return (
    <section className="relative z-10 font-poppins">
      <Carousel>
        {data.map((image, index) => (
          <div className="w-full" key={index}>
            <img
              src={image}
              alt="Poseur de parquet"
              className="object-contain h-96 w-96"
            />
            <div className="legend">
              <p className="text-lg">Localisation:{infos?.location} </p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
export default CarouselComponent;
