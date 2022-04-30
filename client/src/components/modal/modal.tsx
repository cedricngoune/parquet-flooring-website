import React, { FC } from "react";
import { IInfos } from "datas/projects/project-data";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CarouselComponent from "components/caroussel/carousel";

interface IProps {
  showModal: boolean;
  images: Array<string>;
  onClose(): void;
  infos?: IInfos;
}

const ModalComponent: FC<IProps> = ({ showModal, images, infos, onClose }) => {
  return (
    <>
      <Modal
        open={showModal}
        onClose={() => onClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModal}>
          <Box>
            <CarouselComponent data={images} infos={infos} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
export default ModalComponent;
