import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import otherProjectImage from '../../assets/port-joysystem-pj.png'
import otherProjectImage2 from '../../assets/port-booksregister-pj.png'
import otherProjectImage3 from '../../assets/comingsoon.png'
import { Project } from "../project";

export const CarouselContainer2 = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 350;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDown = true;
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <CarouselWrapper>
      <ArrowButton position="left" onClick={() => handleScroll("left")}>
        <ChevronLeft size={20} />
      </ArrowButton>

      <ScrollArea
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <Project
          cover={otherProjectImage}
          category="Projeto Pessoal"
          title="TJS: The Joy System"
          description="TJS é uma aplicação web gamificada de gestão de produtividade. Que te permite criar tarefas, acumular moedas, resgatar recompensas, fazer anotações e visualizar um calendário integrado de objetivos."
          rating={4}
          lastUpdated="22/08/2025 - 01:09"
          isFavorite={true}
          repoLink="https://github.com/Seila-dev/joy-system"
          liveLink="https://joy-system.vercel.app/"
        />
        <Project
          cover={otherProjectImage2}
          category="Freelance"
          description="Books Register é uma aplicação full stack desenvolvida com Next.js, onde você pode gerenciar seus livros, filmes e séries de forma organizada. Fiz sozinho, na época sem a startup e peguei a ideia do watchlist a partir desse projeto."
          title="Books Register: Antigo watchlist"
          rating={4}
          lastUpdated="22/08/2025 - 01:09"
          liveLink="https://books-register-v2.vercel.app/home"
          repoLink="https://github.com/Seila-dev/books-register-v2"
          isFavorite={false}
        />
        <Project
          cover={otherProjectImage3}
          category="Outros"
          title="Em breve"
          description="Tenho outros projetos mas são projetos de aprendizados. Se quiser conhecer mais projetos como esses, só acessar o link pro repositório"
          lastUpdated="22/08/2025 - 01:09"
          repoLink="https://github.com/Seila-dev/"
          isFavorite={false}
        />
      </ScrollArea>

      <ArrowButton position="right" onClick={() => handleScroll("right")}>
        <ChevronRight size={20} />
      </ArrowButton>
    </CarouselWrapper>
  );
};

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const CarouselWrapper = styled.div`
  display: flex;
  // align-items: center;
  position: relative;
  gap: 12px;
  animation: ${slideIn} 0.8s ease-out;
`;

const ScrollArea = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 0 12px;

  &::-webkit-scrollbar {
    height: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }

  & > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }

  cursor: grab;
`;

const ArrowButton = styled.button<{ position: "left" | "right" }>`
  background: #1a1a1a;
  border: 1px solid #333;
  color: white;
  padding: 8px;
  position: absolute;
  top: 50%;
  ${({ position }) => (position === "left" ? "left: -2%;" : "right: -2%;")}
  transform: translateY(-50%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }

  // @media (max-width: 450px) {
  //   display: none;
  // }
`;