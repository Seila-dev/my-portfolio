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
          cover={otherProjectImage2}
          category="Freelance"
          title="Books Register: Early Watchlist"
          description="Books Register is a full stack application built with Next.js, where you can manage your books, movies, and TV shows in an organized way. I built it alone, before founding the startup, and the Watchlist idea came from this project."
          rating={4}
          lastUpdated="12/04/2025 - 01:09"
          liveLink="https://books-register-v2.vercel.app/"
          repoLink="https://github.com/Seila-dev/books-register-v2"
          isFavorite={false}
        />

        <Project
          cover={otherProjectImage}
          category="Personal Project"
          title="TJS: The Joy System"
          description="TJS is a gamified web application for productivity management. It allows you to create tasks, earn coins, redeem rewards, take notes, and view an integrated goals calendar."
          rating={3}
          lastUpdated="08/22/2025 - 01:09"
          isFavorite={true}
          repoLink="https://github.com/Seila-dev/joy-system"
          liveLink="https://joy-system.vercel.app/"
        />

        <Project
          cover={otherProjectImage3}
          category="Others"
          title="Coming Soon"
          description="I have other projects, but most are learning-focused. If you'd like to explore more, you can check out my repositories on GitHub."
          lastUpdated="08/22/2025 - 01:09"
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