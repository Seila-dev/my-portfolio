import styled from "styled-components"
import backgroundVideo from '../../assets/plaiades-initial.png'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'
import whatsappIcon from '../../assets/whatsapp.png'
import Projects from "../projects"
import { useEffect, useState } from "react"
import cvDownload from '../../assets/ErickOliveiraRodrigues_DevWebFullStack_PDF.pdf'
import { TechSlider } from "../TechSlider"
import About from "../About"
import MainProject from "../MainProject"

interface MouseMovements {
    clientX: number;
    clientY: number;
}

export const Main = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseMovements) => {
            setCursorPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [])

    useEffect(() => {
        const handleMouseMove = (e: MouseMovements) => {
            const { clientX, clientY } = e;
            // Move o fundo de forma interativa
            const offsetX = (clientX - window.innerWidth / 2) * 0.05;
            const offsetY = (clientY - window.innerHeight / 2) * 0.05;
            document.querySelector('.character img')?.setAttribute(
                'style',
                `transform: translate(${offsetX}px, ${offsetY}px)`
            );
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <Introduction id="home">
                <div className="info">
                    <p>Meu nome é</p>
                    <h1>Erick Rodrigues</h1>
                    <span> &gt; Desenvolvedor Full Stack | Tech Lead</span>
                    <div className="cv-style">
                        <a href={cvDownload} className="download-cv links" download>Baixar Currículo</a>
                        <a href="https://www.linkedin.com/in/erickrodrigues-dev/" className="second-cta links" target="BLANK" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="Icon Linkedin" />
                            Me encontre no LinkedIn
                        </a>
                    </div>
                </div>

                <div className="arrow">
                    <p>↓</p>
                </div>
                <div className="social-media">
                    <a href="https://github.com/Seila-dev" className="logo" target="BLANK">
                        <img src={githubIcon} alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/erickrodrigues-dev/" className="logo" target="BLANK">
                        <img src={linkedinIcon} alt="linkedin icon" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5521980798925" className="logo" target="BLANK">
                        <img src={whatsappIcon} alt="whatsapp icon" />
                    </a>
                </div>
            </Introduction>
            <SectionTransition />
            <TechSlider />
            {/* <About id="about">
                <h2>Sobre mim</h2>
                <div className="content">
                    <div className="text">
                        <p className="description">
                            Desenvolvedor Full Stack com foco em criar <strong>soluções digitais escaláveis, performáticas e centradas na experiência do usuário.</strong>
                        </p>
                        <br />
                        <p className="description">
                            Tenho experiência prática em projetos reais e entregas sob demanda, atuando em todas as camadas da aplicação...
                        </p>
                        <br />
                        <p className="description">
                            Atualmente, aprofundo minha expertise por meio de mentorias individuais...
                        </p>
                        <br />
                        <p className="description">
                            Minhas especialidades: <strong>Next.js, React.js, TypeScript, Javascript, Nest.js...</strong>
                        </p>
                    </div>
                    <div className="character">
                        <img src={characterPng} alt="Personagem Subaru" />
                    </div>
                </div>
            </About> */}
            <About />

            {/* <Project description="descrição foda" desktopImg={backgroundVideo} liveLink="linkzao" mobileImg={backgroundVideo} name="titulo" repoLink="link" technologies={[]} /> */}
            <Projects />
            {/* <MainProject /> */}
            {/* <Skills /> */}


            <BackgroundPrompt>
                {/* <video src={backgroundVideo} autoPlay muted loop></video> */}
                {/* <img src={backgroundVideo} alt="" /> */}
            </BackgroundPrompt>
            <CursorDot style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}></CursorDot>
            <CursorOutline style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}></CursorOutline>
        </>
    )
}

const CursorDot = styled.div`
    width: 5px;
    height: 5px;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 9;
    pointer-events: none;
    @media(max-width: 768px){
        display: none;
    }
`

const CursorOutline = styled.div`
    width: 30px;
    height: 30px;
    border: 2px solid hsla(0, 0%, 100%, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 8;
    pointer-events: none;
    transition: left 0.1s ease, top 0.1s ease;

    @media(max-width: 768px){
        display: none;
    }
`

const Introduction = styled.main`
  display: flex;
  align-items: center;
  padding: 0 150px;
  height: 78vh;
  margin-bottom: 0; 
  position: relative;
  z-index: 1;
  width: 100%;
  background-image: url(${backgroundVideo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 100%;
  background-color: transparent;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.710); /* Ajuste de opacidade do fundo */
    z-index: -1; /* Camada de fundo */
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 100%);
    z-index: 2; /* Camada de transição */
    pointer-events: none;
  }
    .info p{
        font-size: 24px;
        color: #c2c2c2;
    }
    .info h1{
        font-size: 60px;
        margin-bottom: 10px;
    }
    .info span{
        color: var(--primary-light);
        font-size: 24px;
    }
    .info *{
        animation: fade-up 0.5s 0.4s backwards;
    }
    .info .cv-style{
        margin-top: 25px;
    }
    .info .links{
        background: var(--primary);
        color: white;
        width: 100%;
        max-width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--primary);
        border-radius: 5px;
        font-weight: 600;
        padding: 12px 24px;
        margin: 10px 0;
        cursor: pointer;
        animation: fade-up 0.5s 0.4s backwards;
        transition: 0.15s ease-in;
        &:hover{
            background: var(--primary-light);
        }
    }
    .info .links img{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    .info .links.second-cta{
        background: transparent;
        max-width: fit-content;

    }

    .arrow {
        position: absolute;
        left: 50%;
        bottom: 100px;
        animation: anima-seta 2000ms ease-in-out infinite;
        opacity: 0;
    }


    .social-media{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: white;
        border-radius: 10px 0 0 10px;
        position: absolute;
        right: 0;
        z-index: 999999;
        animation: fade-up 0.5s 0.4s backwards;
    }
    .social-media .logo{
        padding: 10px;
    }
    .social-media .logo img{
        width: 50px;
        height: 50px;
    }

    @media (max-width: 1024px) {
        padding: 40px 20px;
    }

    @media(max-width: 768px){
        padding: 10px;
        margin-top: 40px;
        // justify-content: center;
        .info h1{
            font-size: 40px;
        }
        .social-media {
            bottom: 0;
            position: fixed;
            width: 100%;
            justify-content: center;
            flex-direction: row;
            background: rgba(134, 1, 243, 0.26);
            border-radius: 0;
        }
        .arrow {
            left: 43%;
        }
    }
    @media(max-width: 380px){
      &::after {
        background-color: rgba(0, 0, 0, 0.6); /* Ajuste de opacidade do fundo */
  }


        .info h1{
            font-size: 32px;
        }
        .info span{
            font-size: 15px;
        }
        .info p{
            font-size: 20px;
        }
    }
`

// const About = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 60px 30px;
//   min-height: 100vh;
//   background-color: black;
//   color: white;

//   h2 {
//     text-align: center;
//     margin-bottom: 50px;
//     font-size: 40px;
//     font-weight: 400;
//   }

//   .content {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     max-width: 1200px;
//     gap: 50px;
//   }

//   .text {
//     flex: 1;
//   }

//   .text p {
//     font-size: 24px;
//     line-height: 1.6;
//     margin-bottom: 20px;
//   }

//   .character {
//     flex: 1;
//     display: flex;
//     justify-content: center;
//     align-items: flex-end;
//   }

//   .character img {
//     max-height: 500px;
//     width: auto;
//     object-fit: contain;
//   }

//   @media (max-width: 1024px) {
//     .content {
//       flex-direction: column;
//       align-items: center;
//     }

//     .character img {
//       max-height: 350px;
//       margin-top: 30px;
//     }

//     .text p {
//       font-size: 20px;
//     }
//   }
// `;

const BackgroundPrompt = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: -999;
    width: 100%;
    height: 100%;
    background-color: black;
    img{
        // height: 100%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        opacity: 0.675;
    }
`

const SectionTransition = styled.div`
  position: relative;
  width: 100%;
  height: 0px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent);
  z-index: 1;
  margin-top: -1px; /* sobrepõe parte do conteúdo anterior */
`;
