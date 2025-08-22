import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Zap } from 'lucide-react';
import image from '../../assets/plaiades-2.webp'
import video from '../../assets/subaru-stairs.mp4';

const About = () => {

    return (
        <AboutSection id="about">
            <BackgroundVideo autoPlay loop muted playsInline>
  <source src={video} type="video/mp4" />
</BackgroundVideo>
            <Header>
                <Title>Carreira</Title>
                <Subtitle>Desenvolvedor Full Stack & Tech Lead</Subtitle>
            </Header>

            <Content>
            </Content>
        </AboutSection>
    );
};

export default About;

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
    from { transform: translateX(-20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
`;

const AboutSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 60px 150px;
  padding-top: 150px;
  min-height: 100vh;
  color: white;
  overflow: hidden;
  background: linear-gradient(to right, #1a002b, #000, transparent);

  /* Imagem da biblioteca no canto direito */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right;
background-image: 
  linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent 80%),
  url(${image});
    opacity: 0.3;
    pointer-events: none;
    z-index: 1;
  }



/* Sobreposição lateral + topo + bottom */
&::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Combina 3 camadas: top, bottom e lateral (fade suave da imagem) */
  background:
    linear-gradient(to bottom, #000 1px, transparent 50px),   /* Top gradient */
    linear-gradient(to top, #000 1px, transparent 50px),     /* Bottom gradient */
    linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent 0%); /* Fade da imagem para o fundo */
  
  z-index: 3;
  pointer-events: none;
}

  > * {
    position: relative;
    z-index: 3;
  }

  @media (max-width: 1024px) {
    padding: 40px 20px;

    &::before,
    &::after {
      width: 100%;
        background: linear-gradient(to right, #1a002b, #000, transparent);
        z-index: 0;
    }
  }
`;

const Header = styled.div`
    margin-bottom: 60px;
    animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h2`
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 10px;
    background: var(--primary-light);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const Subtitle = styled.p`
    font-size: 18px;
    color: #9ca3af;
    margin: 0;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 80px;
    max-width: 1400px;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 40px;
    }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.20;
  z-index: 0;
  pointer-events: none;
`;