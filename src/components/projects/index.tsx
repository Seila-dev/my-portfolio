import styled from "styled-components";
import { Link2, Settings } from "lucide-react";
import ProjectImage from "../../assets/watchlist.png";
import ProjectImage2 from "../../assets/port-booksregister-pj.png";
import ProjectImage3 from "../../assets/port-joysystem-pj.png";
import MainProject from "../MainProject";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Watchlist",
      description: "Plataforma para cadastro e gestão de livros com autenticação, relatórios e integração em tempo real.",
      thumbnail: ProjectImage3,
      github: "https://github.com/seu-repo",
      demo: "https://demo.com"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "Dashboard completo para gestão de produtos, vendas e relatórios em tempo real.",
      thumbnail: ProjectImage2,
      github: "https://github.com/seu-repo-2",
      demo: "https://demo2.com"
    },
    {
      id: 3,
      title: "Task Manager",
      description: "Aplicativo de gerenciamento de tarefas com drag & drop e colaboração em equipe.",
      thumbnail: ProjectImage,
      github: "https://github.com/seu-repo-3",
      demo: "https://demo3.com"
    }
  ];

  return (
    <Section id="projects">
      <Content>
        <MainProject />
        
        <OtherProjectsSection>
          <SectionTitle>Outros Projetos</SectionTitle>
          <ProjectsGrid>
            {projects.map((project) => (
              <ProjectCard key={project.id}>
                <ProjectThumbnail>
                  <img src={project.thumbnail} alt={`Preview do ${project.title}`} />
                </ProjectThumbnail>
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectLinks>
                    <ProjectLink 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Settings size={16} />
                      Repositório
                    </ProjectLink>
                    <ProjectLink 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Link2 size={16} />
                      Demo
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </OtherProjectsSection>
      </Content>
    </Section>
  );
};

export default Projects;

// ---------------------- styled ----------------------

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(to top, #000 0%, #214 50%, #000 100%);
  color: white;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

const OtherProjectsSection = styled.div`
  margin-top: 60px;
  min-height: 100vh;
  padding-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 600;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProjectCard = styled.div`
  background: #0f0f0f;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectThumbnail = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: #1a1a1a;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectInfo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: white;
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #60a5fa;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;