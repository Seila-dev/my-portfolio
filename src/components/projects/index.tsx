// import styled from "styled-components"
// import { pinnedProjectsData } from "../../mocks/pinnedProjectsData"
// import { projectsData } from "../../mocks/projectsData"
// import { Project } from "../project"

// export const Projects = () => {
    

//     return (
//         <ProjectsSection id="projects">
//             <h2>Projetos</h2>
//             <Container>
//                 <Divisor><div className="line b1"></div><span className="span-pin">Projetos em destaque</span> <div className="line b2"></div></Divisor>
//                 <div className="pinned-projects">
//                     {pinnedProjectsData.map((project, index) => (
//                         <Project key={index} {...project} />
//                     ))}
//                 </div>
//                 <div className="progress-projects">
//                     <Divisor><div className="line b1"></div><span className="span-pin">Outros projetos</span> <div className="line b2"></div></Divisor>
//                     <div className="projects">
//                         {projectsData.map((project, index) => (
//                             <Project key={index} {...project} />
//                         ))}
//                     </div>
//                 </div>
//             </Container>
//         </ProjectsSection>
//     )
// }

// const ProjectsSection = styled.section`
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     margin-bottom: 150px;
//     animation: fade-up 0.5s 0.4s backwards;
    
//     h2{
//         text-align: center;
//         margin-bottom: 50px;
//         font-size: 40px;
//         font-weight: 400;
//     }
    
// `

// const Divisor = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
    
//     .span-pin{
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100%;
//         margin: 30px;
//         width: 200px;
//         text-align: center;
//         font-style: italic;
//     }
//     .line{
//         background: #ccc;
//         width: 200px;
//         height: 1px;
//     }
// `

// const Container = styled.div`
//     padding: 10px;
//     .pinned-projects, .projects{
//         display: grid;
//         grid-template-columns: 1fr 1fr 1fr;
//     }
//     .pinned-projects{
//         margin-bottom: 50px;
//     }
//     .project{
//         position: relative;
//         text-align: center;
//         margin-bottom: 20px;
//         .descriptionText{
//             padding: 5px 8%;
//         }
//         .descriptionText p{
//         }
//         .links{
//             margin-top: 10px;
//             display: flex;
//             flex-direction: column;
//             gap: 5px;
//             width: 100%;
//             align-items: center;
//         }
//         .links a{
//             width: fit-content;
//         }
//         .links a:hover{
//             border-bottom: 1px solid white;
//         }
//         .links .description{
//             cursor: pointer;
//         }
//         img{
//             width: 80%;
//             margin-top: 10px;
//             user-select: none;
//         }
//         .mobile-img{
//             position: absolute;
//             right: 10px;
//             top: 125px;
//             width: 30%;
//             z-index: 5;
//         }
//         .technologies{
//             display: flex;
//             justify-content: center;
//             gap: 10px;
//         }
//         .tech-box{
//             padding: 0 20px;
//             border-radius: 5px;
//         }
//         .technologies .logo{
//             width: 40px;
//             border: 1px solid black;
//             border-radius: 5px;
//             padding: 3px;
//             margin: 10px 5px;
//             background: white;
//             opacity: 0.8;
//         }
//         .technologies .logo:hover{
//             opacity: 1;
//         }
//     }

//     @media(max-width: 768px){
        
//         .pinned-projects, .projects{
//             grid-template-columns: 1fr;
//         }
//         .project{
//             margin-bottom: 70px;
//         }
//     }

// `




import styled from "styled-components";
// import { Github, ExternalLink } from "lucide-react";
// import ProjectImage from "../../assets/watchlist.png";
import MainProject from "../MainProject";

const Projects = () => {
  return (
    <AboutSection id="projects">
      {/* <Header>
        <Title>Projeto principal</Title>
        <Subtitle>Desenvolvedor Full Stack & Tech Lead</Subtitle>
      </Header> */}

      <Content>
        <MainProject />
        {/* <ProjectCard>
          <Thumbnail
            src={ProjectImage} // substitua pela sua imagem
            alt="Preview do projeto"
          />
          <Info>
            <h3>Watchlist</h3>
            <p>
              Plataforma para cadastro e gestão de livros com autenticação, relatórios e integração em tempo real.
            </p>
            <Links>
              <a
                href="https://github.com/seu-repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} /> Repositório
              </a>
              <a
                href="https://demo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} /> Demonstração
              </a>
            </Links>
          </Info>
        </ProjectCard> */}
      </Content>
    </AboutSection>
  );
};

export default Projects;

// ---------------------- styled ----------------------

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
//   padding: 60px 150px;
// padding: 60px 0;
  min-height: 100vh;
  background: linear-gradient(to top, #000 0%, #214 50%, #000 100%);
  color: white;
  position: relative;

//   @media (max-width: 1024px) {
//     padding: 40px 20px;
//   }
`;

// const Header = styled.div`
//   margin-bottom: 60px;
//   animation: ${fadeIn} 0.8s ease-out;
// `;

// const Title = styled.h2`
//   font-size: 48px;
//   font-weight: 700;
//   margin-bottom: 10px;
//   background: var(--primary-light);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// `;

// const Subtitle = styled.p`
//   font-size: 18px;
//   color: #9ca3af;
//   margin: 0;
// `;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// const ProjectCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 900px;
//   width: 100%;
//   border-radius: 12px;
//   overflow: hidden;
//   background: #111;
//   box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
//   animation: ${fadeIn} 0.8s ease-out;
// `;

// const Thumbnail = styled.img`
//   width: 100%;
//   height: 500px;
//   object-fit: cover;

//   @media (max-width: 1024px) {
//     height: auto;
//   }
// `;

// const Info = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 12px;

//   h3 {
//     font-size: 24px;
//     margin: 0;
//   }

//   p {
//     color: #d1d5db;
//     font-size: 16px;
//     line-height: 1.4;
//   }
// `;

// const Links = styled.div`
//   display: flex;
//   gap: 16px;

//   a {
//     display: flex;
//     align-items: center;
//     gap: 6px;
//     color: #60a5fa;
//     text-decoration: none;
//     font-weight: 500;
//     transition: opacity 0.2s ease;

//     &:hover {
//       opacity: 0.8;
//     }
//   }
// `;
