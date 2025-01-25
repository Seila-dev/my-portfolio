import styled from "styled-components"
import portEcommerceDesktop from '../../assets/port-ecommerce-pj.png'
import portPokedexDesktop from '../../assets/port-pokedex-pj.png'
import portPortfolioDesktop from '../../assets/port-portifolio-pj.png'
import portEcommerceMobile from '../../assets/port-ecommerce-mob-pj.png'
import portPokedexMobile from '../../assets/port-pokedex-mob-pj.png'
import portPortfolioMobile from '../../assets/port-portifolio-mob-pj.png'
import portGithubDesktop from '../../assets/port-github-pj.png'
import portGithubMobile from '../../assets/port-github-mob-pj.png'
import portSneakersDesktop from '../../assets/port-sneakers-pj.png'
import portSneakersMobile from '../../assets/port-sneakers-mob-pj.png'
import portThemetogglerDesktop from '../../assets/port-themetoggler-pj.png'
import portThemetogglerMobile from '../../assets/port-themetoggler-mob-pj.png'
import reactLogo from '../../assets/reactlogo.png'
import styledCLogo from '../../assets/styled-c.png'
import typescriptLogo from '../../assets/typescriptlogo.png'
import javascriptLogo from '../../assets/javascriptlogo.png'
import htmlLogo from '../../assets/htmllogo.png'
import cssLogo from '../../assets/csslogo.png'

export const Projects = () => {

    return (
        <ProjectsSection id="projects">
            <h2>Projetos</h2>
            <Container>
                <Divisor><div className="line b1"></div><span className="span-pin">Projetos em destaque</span> <div className="line b2"></div></Divisor>
                <div className="pinned-projects">
                    <div className="project">
                        <h3 className="name">Projeto E-commerce</h3>
                        <div className="links">
                            <a href="https://e-commerce-project-frontend-delta.vercel.app/" target="blank">Testar website</a>
                            <a href="https://github.com/Seila-dev/e-commerce-project" target="blank">Ir para repositório</a>

                        </div>
                        <img src={portEcommerceDesktop} alt="projeto em destaque" className="desktop-img" />
                        <img src={portEcommerceMobile} alt="projeto em destaque" className="mobile-img" />
                        <div className="technologies">
                            <div className="tech-box">
                                <img src={reactLogo} alt="logo react" className="logo" />
                                <img src={typescriptLogo} alt="logo typescript" className="logo" />
                                <img src={styledCLogo} alt="logo styled-components" className="logo" />
                            </div>
                        </div>
                        <div className="descriptionText">
                            <p>O projeto e-commerce simula uma loja digital real, com seções de login, registro, produto. Funções como carrinho de compras usando Context API e interações em tempo real com Banco de dados. </p>
                        </div>
                    </div>
                    <div className="project">
                        <h3 className="name">Projeto Pokedex</h3>
                        <div className="links">
                            <a href="https://pokedex-react-beta-fawn.vercel.app/" target="blank">Testar website</a>
                            <a href="https://github.com/Seila-dev/pokedex-react" target="blank">Ir para repositório</a>

                        </div>
                        <img src={portPokedexDesktop} alt="projeto em destaque" className="desktop-img" />
                        <img src={portPokedexMobile} alt="projeto em destaque" className="mobile-img" />
                        <div className="technologies">
                            <div className="tech-box">
                                <img src={reactLogo} alt="logo react" className="logo" />
                                <img src={javascriptLogo} alt="logo javascript" className="logo" />
                                <img src={styledCLogo} alt="logo styled-components" className="logo" />
                            </div>
                        </div>
                        <div className="descriptionText">
                            <p>É uma aplicação interativa que permite aos usuários buscar informações detalhadas sobre os Pokémons utilizando a API da PokeAPI. A aplicação exibe uma lista de Pokémons paginada, onde cada card é clicável e leva a uma página de perfil com detalhes do Pokémon, como habilidades, movimentos, tipo e imagem. Feito com react.</p>
                        </div>
                    </div>
                    <div className="project">
                        <h3 className="name">Meu Portifólio</h3>
                        <div className="links">
                            <a href="https://my-portfolio-seven-blush-46.vercel.app/" target="blank">Testar website</a>
                            <a href="https://github.com/Seila-dev/my-portfolio" target="blank">Ir para repositório</a>

                        </div>
                        <img src={portPortfolioDesktop} alt="projeto em destaque" className="desktop-img" />
                        <img src={portPortfolioMobile} alt="projeto em destaque" className="mobile-img" />
                        <div className="technologies">
                            <div className="tech-box">
                                <img src={reactLogo} alt="logo react" className="logo" />
                                <img src={typescriptLogo} alt="logo typescript" className="logo" />
                                <img src={styledCLogo} alt="logo styled-components" className="logo" />
                            </div>
                        </div>
                        <div className="descriptionText">
                            <p>O portifólio que você está vendo nesse exato momento.</p>
                        </div>
                    </div>
                </div>
                <div className="progress-projects">
                    <Divisor><div className="line b1"></div><span className="span-pin">Outros projetos</span> <div className="line b2"></div></Divisor>
                    <div className="projects">
                        <div className="project">
                            <h3 className="name">Projeto Github API</h3>
                            <div className="links">
                                <a href="https://seila-dev.github.io/projeto-github-api/" target="blank">Testar website</a>
                                <a href="https://github.com/Seila-dev/projeto-github-api" target="blank">Ir para repositório</a>

                            </div>
                            <img src={portGithubDesktop} alt="projeto em destaque" className="desktop-img" />
                            <img src={portGithubMobile} alt="projeto em destaque" className="mobile-img" />
                            <div className="technologies">
                                <div className="tech-box">
                                    <img src={htmlLogo} alt="logo html" className="logo" />
                                    <img src={cssLogo} alt="logo css" className="logo" />
                                    <img src={javascriptLogo} alt="logo javascript" className="logo" />
                                </div>
                            </div>
                            <div className="descriptionText">
                                <p>Um projeto feito em um dos módulos do curso de desenvolvimento front-end DevQuest. Ao colocar o nome de um usuário existente no Github, é feito uma requisição da API expondo os dados do usuário dentro deste site, dados como repositórios, eventos, nome, seguidores, etc..</p>
                            </div>
                        </div>
                        <div className="project">
                            <h3 className="name">Projeto E-commerce básico</h3>
                            <div className="links">
                                <a href="https://seila-dev.github.io/ecommerce-product-page/" target="blank">Testar website</a>
                                <a href="https://github.com/Seila-dev/ecommerce-product-page" target="blank">Ir para repositório</a>

                            </div>
                            <img src={portSneakersDesktop} alt="projeto em destaque" className="desktop-img" />
                            <img src={portSneakersMobile} alt="projeto em destaque" className="mobile-img" />
                            <div className="technologies">
                                <div className="tech-box">
                                    <img src={htmlLogo} alt="logo html" className="logo" />
                                    <img src={cssLogo} alt="logo css" className="logo" />
                                    <img src={javascriptLogo} alt="logo javascript" className="logo" />
                                </div>
                            </div>
                            <div className="descriptionText">
                                <p>Projeto básico do front-end Mentor. Meu primeiro projeto ecommerce, focado no aprendizado de Lightbox, galeria de imagens e funções de carrinho. Foi uma aplicação muito boa pois foi nele que aprendi a usar Javascript de fato.</p>
                            </div>
                        </div>
                        <div className="project">
                            <h3 className="name">Projeto Theme Toggler - Context API</h3>
                            <div className="links">
                                <a href="https://theme-toggler-with-contextapi.vercel.app/" target="blank">Testar website</a>
                                <a href="https://github.com/Seila-dev/theme-toggler-with-contextapi" target="blank">Ir para repositório</a>

                            </div>
                            <img src={portThemetogglerDesktop} alt="projeto em destaque" className="desktop-img" />
                            <img src={portThemetogglerMobile} alt="projeto em destaque" className="mobile-img" />
                            <div className="technologies">
                                <div className="tech-box">
                                    <img src={reactLogo} alt="logo html" className="logo" />
                                    <img src={typescriptLogo} alt="logo css" className="logo" />
                                    <img src={styledCLogo} alt="logo javascript" className="logo" />
                                </div>
                            </div>
                            <div className="descriptionText">
                                <p>Esse é um projeto pequeno mas com muito valor para mim. Foi nele que aprendi como usar Context API e TypeScript da maneira correta. O objetivo do projeto é a função de trocar o tema do site, do escuro pro claro e vice-versa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </ProjectsSection>
    )
}

const ProjectsSection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 150px;
    h2{
        text-align: center;
        margin-bottom: 50px;
        font-size: 40px;
        font-weight: 400;
    }
    
`

const Divisor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    .span-pin{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin: 30px;
        width: 200px;
        text-align: center;
        font-style: italic;
    }
    .line{
        background: #ccc;
        width: 200px;
        height: 1px;
    }
`

const Container = styled.div`
    padding: 10px;
    .pinned-projects, .projects{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .pinned-projects{
        margin-bottom: 50px;
    }
    .project{
        position: relative;
        text-align: center;

        .descriptionText{
            padding: 5px 8%;
        }
        .links{
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            width: 100%;
            align-items: center;
        }
        .links a{
            width: fit-content;
        }
        .links a:hover{
            border-bottom: 1px solid white;
        }
        .links .description{
            cursor: pointer;
        }
        img{
            width: 80%;
            margin-top: 10px;
        }
        .mobile-img{
            position: absolute;
            right: 10px;
            top: 125px;
            width: 30%;
            z-index: 5;
        }
        .technologies{
            display: flex;
            justify-content: center;
            gap: 10px;
        }
        .tech-box{
            padding: 0 20px;
            border-radius: 5px;
        }
        .technologies .logo{
            width: 40px;
            border: 1px solid black;
            border-radius: 5px;
            padding: 3px;
            margin: 10px 5px;
            background: white;
            opacity: 0.8;
        }
        .technologies .logo:hover{
            opacity: 1;
        }
        
    }

    .projects{
        
    }
`