import styled from "styled-components";
import { Code2, SquareDashedMousePointer } from "lucide-react";
import ProjectImage1 from "../../assets/watchlist.png";
import ProjectImage2 from "../../assets/watchlist-4.webp";
import ProjectImage3 from "../../assets/watchlist-3.png";
import cover from "../../assets/watchlist-4.webp";
import MediaGallery from "../MediaGallery";

const content = {
  id: "1",
  title: "Watchlist",
  coverImage: cover,
  description: "Plataforma multimídia para organizar e explorar filmes, séries, animes, mangás e jogos em um só lugar. Foco em personalização, interação com a comunidade e centralização de conteúdo. Lidero a equipe com + de 6 devs e 2 designers construindo um produto robusto e escalável com foco em UX e inclusão digital.",
  note: "Somos uma startup com 6 devs e 2 designers (em breve +2 no time) criando uma plataforma multimídia de entrentenimento. A ideia nasceu da falta de um lugar inclusivo e completo pra acompanhar tudo o que a gente curte, de filmes a mangás.",
  startDate: "2025-06",
  finishDate: "Até o momento",
  repoLink: "https://github.com/Seila-dev/watchlist",
  demoLink: "https://your-watchlist.vercel.app/",
  rating: 4.5,
  categories: [
    { categoryId: "1", category: { name: "Ficção" } },
    { categoryId: "2", category: { name: "Aventura" } },
  ],
  createdAt: "2023-01-01",
  updatedAt: "2023-02-01",
};

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 60px 150px;
  width: 100%;
  color: white;
  padding-top: 150px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.7);
  background: linear-gradient(to bottom right, #0f0f0f, black);

    &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 100%);
    z-index: 2; /* Camada de transição */
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    padding: 40px 20px;
        &::before{
      z-index: 0;
    }
 }
`;

const BackgroundBlur = styled.div<{ bg?: string }>`
  position: absolute;
  inset: 0;
  background-image: ${({ bg }) => (bg ? `url(${bg})` : "none")};
  background-size: cover;
  background-position: top;
  opacity: 0.24;
  filter: blur(0px);
  transform: scale(1.05);
`;

const Container = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%; 
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0.25rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);

    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }

  a {
    color: #d1d5db; 
    transition: color 0.2s;

    &:hover {
      color: #3b82f6; 
    }
  }
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  background: rgba(115, 8, 255, 0.42);
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;

  span {
    color: #8a77f6ff; 
    font-weight: 500;
  }
`;

const Description = styled.p`
  color: #d1d5db;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1.3rem;
  max-width: 42rem;
`;

const Dates = styled.div`
  font-size: 0.875rem;
  color: #9ca3af; 
  margin-bottom: 1.5rem;
`;

const Footer = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ActionMethods = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
    width: fit-content;

    .links {
    display: inline-flex;
    align-items: center;
    padding: 12px 24px;
    background: var(--primary); 
    color: white;
    gap: 10px;
    border-radius: 0.375rem;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.2s;
    &:hover {
      background: var(--primary-light);
        }
    }

    .links.secondary {
      background: transparent;
      border: 2px solid var(--primary);

      &:hover {
        background: var(--primary);
        color: white;
        }
    }

    @media(max-width: 720px){
      flex-direction: column;
    }
`

//   display: flex;
//     gap: 1rem;
//     height: 100%;
//     width: 100%;
//     align-items: flex-start;
//     img {
//         max-width: 250px;
//         height: 180px;
//         width: 100%;
//         border-radius: 10px;
//         cursor: pointer;
//         box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
//         }
//     @media (min-width: 1024px) {
//         flex-direction: column;
//         align-items: flex-end;
//         // img {
//         //     width: 32%;
//         // }
//     }
// `;

// ---------------- Component ----------------
export default function MainProject() {
  return (
    <Section>
      <BackgroundBlur bg={content.coverImage || ""} />
      <Container>
        <Content>
          {content.finishDate && (
            <Status>
              <span>Em desenvolvimento</span>
            </Status>
          )}
          <Header>
            <h1>{content.title}</h1>
          </Header>

          {content.description && <Description>{content.description}</Description>}

          <Dates>
            {content.startDate} - {content.finishDate}
          </Dates>

          <ActionMethods>
            <a href={content.demoLink} className="links" target="BLANK" rel="noopener noreferrer">
              <SquareDashedMousePointer size={18} />
              Demonstração
            </a>
            <a href={content.repoLink} className="links secondary" target="BLANK" rel="noopener noreferrer">
              <Code2 size={18} />
              Repositório
            </a>

          </ActionMethods>

          <Footer>
            <span>Projeto recente criado há +2 meses</span>
          </Footer>
        </Content>
        <Content>
          <MediaGallery
            images={[ProjectImage1, ProjectImage2, ProjectImage3]}
          />
        </Content>
      </Container>
    </Section>
  );
}
