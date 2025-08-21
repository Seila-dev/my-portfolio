import styled, { keyframes } from "styled-components";

// Exemplo de imagens – substitua pelos seus
import reactLogo from "../../assets/reactlogo.png";
import nodeLogo from "../../assets/nodejs.png";
import typescriptLogo from "../../assets/typescriptlogo.png";
import jsLogo from "../../assets/javascriptlogo.png";
import nextLogo from "../../assets/nextjs.png";
import cssLogo from "../../assets/csslogo.png";
import cockroachLogo from "../../assets/cockroachdblogo.png";
import expressLogo from "../../assets/expressjs.png";
import postgreLogo from "../../assets/postgre.png";
import prismaLogo from "../../assets/prismalogo.png";
import tailwindLogo from "../../assets/tailwindcss.png";
import styledC from "../../assets/styled-c.png";
import htmlLogo from "../../assets/htmllogo.png";
import nestLogo from "../../assets/nestLogo.png";

const logos = [reactLogo, nodeLogo, typescriptLogo, jsLogo, expressLogo, nextLogo, htmlLogo, cssLogo, cockroachLogo, postgreLogo, prismaLogo, tailwindLogo, styledC, nestLogo];

export const TechSlider = () => {
    // Criamos múltiplas cópias para garantir um loop suave
    const repeatedLogos = [...logos, ...logos, ...logos];

    return (
        <SliderWrapper>
            <SliderContent>
                {repeatedLogos.map((logo, index) => (
                    <TechBox key={`${logo}-${index}`}>
                        <img src={logo} alt={`tech-logo-${index}`} />
                    </TechBox>
                ))}
            </SliderContent>
        </SliderWrapper>
    );
};

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3));
  }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  z-index: 0; /* Definindo z-index para não interferir em outros elementos */
  background-color: transparent;
  position: relative; /* Agora o TechSlider será posicionado de forma mais controlada */
  bottom: 0;
  user-select: none;
  padding: 40px 0; /* Você pode ajustar o padding conforme necessário */
  
  @media (max-width: 768px) {
    /* Ajustes para telas menores */
    padding: 20px 0;
  }
`;

const SliderContent = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 15s linear infinite;
  gap: 30px;
  
  @media (max-width: 768px) {
    gap: 15px; /* Ajuste o gap para telas menores */
  }
`;

const TechBox = styled.div`
  background: #5804c593;
  width: 100px;
  height: 100px;
  opacity: 0.6;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  img {
    max-width: 60%;
    max-height: 60%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

