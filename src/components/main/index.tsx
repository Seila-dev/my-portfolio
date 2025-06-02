import styled from "styled-components"
import backgroundVideo from '../../assets/background.mp4'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'
import whatsappIcon from '../../assets/whatsapp.png'
import { Projects } from "../projects"
import { Skills } from "../skills"
import { useEffect, useState } from "react"
import cvDownload from '../../assets/ErickOliveiraRodrigues_DevWebFullStack_PDF.pdf'

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

    return (
        <>
            <Introduction id="introduction">
                <div className="info">
                    <p>Este é um portifólio de</p>
                    <h1>Erick Rodrigues</h1>
                    <span> &gt; Desenvolvedor Full Stack</span>
                    <div className="cv-style">
                        <a href={cvDownload} className="download-cv" download>Baixar Currículo</a>
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
            <About id="about">
                <h2>Sobre mim</h2>
                <div>
                    <p className="description">Desenvolvedor Full Stack com foco em criar <strong>soluções digitais escaláveis, performáticas e centradas na experiência do usuário.</strong></p>
                    <br />
                    <p className="description">Tenho experiência prática em projetos reais e entregas sob demanda, atuando em todas as camadas da aplicação, do backend robusto ao frontend moderno. Trabalho com foco em boas práticas, <strong>arquitetura limpa e interfaces bem estruturadas</strong> que entregam <strong>valor</strong> de verdade.</p>
                    <br />
                    <p className="description">Atualmente, aprofundo minha expertise por meio de mentorias individuais e aplico esse conhecimento em contextos que exigem agilidade, responsabilidade e resolução de problemas reais. Estou sempre atualizado com as tecnologias do mercado e busco constantemente desafios que me façam evoluir como profissional.</p>
                    <br />
                    <p className="description">Minhas especialidades: <strong>Next.js, React.js, TypeScript, Javascript, Nest.js, Node.js, Express, PostgreSQL, Docker, Git & Github, Styled Components/Tailwind </strong></p>
                </div>
            </About>
            <Projects />
            <Skills />


            <BackgroundPrompt>
                <video src={backgroundVideo} autoPlay muted loop></video>
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
    padding: 150px;
    height: 70vh;
    margin-bottom: 150px;
    .info p{
        font-size: 24px;
    }
    .info h1{
        font-size: 60px;
    }
    .info span{
        color: var(--light-green);
        font-size: 24px;
    }
    .info *{
        animation: fade-up 0.5s 0.4s backwards;
    }
    .info .cv-style{
        margin-top: 25px;
    }
    .info .download-cv{
        background: white;
        background: #000;
        width: 100%;
        max-width: 200px;
        display: flex;
        opacity: 0.9;
        border-radius: 5px;
        font-weight: 600;
        padding: 10px 20px;
        cursor: pointer;
        color: var(--light-green);
        animation: fade-up 0.5s 0.4s backwards;
        transition: 0.15s ease-in;
        &:hover{
            background: #ccc2;
        }
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
        background: white;
        border-radius: 10px 0 0 10px;
        position: absolute;
        right: 0;
        z-index: 9;
        animation: fade-up 0.5s 0.4s backwards;
    }
    .social-media .logo{
        padding: 10px;
    }
    .social-media .logo img{
        width: 50px;
        height: 50px;
    }

    @media(max-width: 768px){
        padding: 20px;
        justify-content: center;
        .info h1{
            font-size: 40px;
        }
        .social-media {
            bottom: 0;
            position: fixed;
            width: 100%;
            justify-content: center;
            flex-direction: row;
            background: gray;
            border-radius: 0;
        }
        .arrow {
            left: 43%;
        }
    }
    @media(max-width: 380px){
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

const About = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    margin: 250px 0;
    animation: fade-up 0.5s 0.4s backwards;
    h2{
        text-align: center;
        margin-bottom: 50px;
        font-size: 40px;
        font-weight: 400;
    }
    div{
        width: 60%;
        padding: 0px;
    }
    div p{
        font-size: 30px;
    }

    p.paragraph{
        margin-bottom: 20px;
    }

    @media(max-width: 1024px){
        p.paragraph{
            width: 100%;
            font-size: 25px;
        }
    }
    @media(max-width: 768px){
        p.paragraph{
            font-size: 25px;
            width: 100%;
        }
        div {
            width: 100%;
        }
    }
    @media(max-width: 425px){
        div p{
            font-size: 20px;
        }
        div {
            width: 100%;
        }
    }
`

const BackgroundPrompt = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: -999;
    width: 100%;
    height: 100%;
    background-color: black;
    video{
        // height: 100%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        opacity: 0.175;
    }
`