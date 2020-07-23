import { useState } from "react";
import Lightbox from "react-image-lightbox";
import { PROJECTS_DIR } from "../../constants";

const ImageGallery = ({ project, images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const ASSET_PATH = `${PROJECTS_DIR}/${project}`;

  return (
    <div className="flex flex-wrap -mx-2 overflow-x-auto">
      {images.map((image, index) => (
        <div className="w-1/2 px-2" key={index}>
          <img
            src={`${ASSET_PATH}/${image}`}
            className="w-full rounded-lg mb-5 h-32 md:h-64 object-cover"
            onClick={() => {
              setIsLightboxOpen(true);
              setPhotoIndex(index);
            }}
          />
        </div>
      ))}
      {isLightboxOpen && (
        <Lightbox
          mainSrc={`${ASSET_PATH}/${images[photoIndex]}`}
          nextSrc={`${ASSET_PATH}/${images[(photoIndex + 1) % images.length]}`}
          prevSrc={`${ASSET_PATH}/${
            images[(photoIndex + images.length - 1) % images.length]
          }`}
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default ImageGallery;
