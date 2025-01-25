import styled from "styled-components"
import backgroundVideo from '../../assets/background.mp4'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'
import whatsappIcon from '../../assets/whatsapp.png'
import { Projects } from "../projects"

export const Main = () => {

    return (
        <>
        <Introduction>
            <div className="info">
                <p>Este é um portifólio de</p>
                <h1>Erick Rodrigues</h1>
                <span> &gt; Desenvolvedor Fullstack</span>
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
        <About>
            <p>Meu nome é Erick e estou em busca da minha primeira oportunidade como Desenvolvedor Fullstack. Com foco em uma criação limpa, com interfaces bem estruturadas que não apenas tem boa aparência como também provêm uma boa experiência para o usuário. Sempre atualizado às tecnológias do mercado, busco projetos desafiadores que melhorem minha habilidade de criar soluções inovadoras. Minhas especialidades são: <strong>TypeScript, ReactJS, Javascript, Styled-components, NodeJS, Express, Content API e Git & GitHub</strong></p>
        </About>
        <Projects />


        <BackgroundPrompt>
            <video src={backgroundVideo} autoPlay muted loop></video>
        </BackgroundPrompt>
        </>
    )
}

const Introduction = styled.main`
    display: flex;
    align-items: center;
    padding: 150px;
    height: 70vh;
    margin-bottom: 150px;
    .info h1{
        font-size: 60px;
    }
    .info span{
        color: var(--light-green);
    }

    .arrow {
        position: absolute;
        left: 50%;
        bottom: 100px;
        animation: anima-seta 2000ms ease-in-out infinite;
        opacity: 0;
    }
    @keyframes anima-seta {
        to {
            opacity:1;
            transform: translateY(88px);
        }
    }
    .arrow p{
        font-size: 100px;
    }

    .social-media{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: white;
        border-radius: 10px 0 0 10px;
        position: absolute;
        right: 0;
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
    }
`

const About = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 30px;
    margin: 250px 0;
    p{
        padding: 0px;
        width: 60%;
        font-size: 30px;
    }

    @media(max-width: 1024px){
        p{
            width: 80%;
        }
    }
    @media(max-width: 768px){
        p{
            font-size: 25px;
            width: 95%;
        }
    }
    @media(max-width: 425px){
        p{
            font-size: 20px;
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