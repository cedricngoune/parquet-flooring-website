import React, { FC, useState } from "react";
import { IInfos } from "datas/projects/project-data";
import Lightbox from "react-image-lightbox";

interface IProps {
  showModal: boolean;
  images: Array<string>;
  indexImage: number;
  onClose(): void;
  infos?: IInfos;
}

const ModalComponent: FC<IProps> = ({
  showModal,
  images,
  infos,
  onClose,
  indexImage,
}) => {
  return (
    <div>
      {showModal && (
        <Lightbox
          mainSrc={images[indexImage]}
          nextSrc={images[(indexImage + 1) % images.length]}
          prevSrc={images[(indexImage - 1) % images.length]}
          onCloseRequest={onClose}
          onMovePrevRequest={() =>
            (indexImage = (indexImage + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            (indexImage = (indexImage + images.length + 1) % images.length)
          }
        />
      )}
    </div>
  );
};
export default ModalComponent;
