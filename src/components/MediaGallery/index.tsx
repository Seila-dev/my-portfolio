import { useState } from "react";
import styled from "styled-components";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const MediaContent = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  .keen-slider__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 180px; /* controla largura mínima do card */
  }

  img {
    width: 100%;
    height: 180px;
    max-width: 250px;
    border-radius: 10px;
    cursor: pointer;
    object-fit: cover;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 1025px) {
    flex-direction: column;
    align-items: flex-end;
    .keen-slider__slide {
      flex: none;
      min-width: auto;
    }
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  @media(min-width: 1024px){
    display: none;
  }
`;

const ArrowLeft = styled(Arrow)`
  left: -10px;
`;

const ArrowRight = styled(Arrow)`
  right: -10px;
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
  }
`;

interface MediaTypes {
    images: string[];
}


const MediaGallery = ({ images }: MediaTypes) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2.2, // mostra 2+ imagens lado a lado no mobile
          spacing: 12,
        },
      },
    },
    slides: {
      perView: "auto", // no desktop desativa layout de slider
      spacing: 12,
    },
  });

  return (
    <>
      <SliderWrapper>
        <MediaContent ref={sliderRef} className="keen-slider">
          {images.map((img, index) => (
            <div
              key={index}
              className="keen-slider__slide"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`media-${index}`} />
            </div>
          ))}
        </MediaContent>

        {/* Botões de navegação */}
        {slider && slider.current && (
          <>
            <ArrowLeft onClick={() => slider.current?.prev()}>&#10094;</ArrowLeft>
            <ArrowRight onClick={() => slider.current?.next()}>&#10095;</ArrowRight>
          </>
        )}
      </SliderWrapper>

      {/* Modal fullscreen */}
      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="full" />
        </Modal>
      )}
    </>
  );
};

export default MediaGallery;
