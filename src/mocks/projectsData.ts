import portGithubDesktop from '../assets/port-github-pj.png'
import portGithubMobile from '../assets/port-github-mob-pj.png'
import portSneakersDesktop from '../assets/port-sneakers-pj.png'
import portSneakersMobile from '../assets/port-sneakers-mob-pj.png'
// import portThemetogglerDesktop from '../assets/port-themetoggler-pj.png'
// import portThemetogglerMobile from '../assets/port-themetoggler-mob-pj.png'
import portPokedexDesktop from '../assets/port-pokedex-pj.png'
import portPokedexMobile from '../assets/port-pokedex-mob-pj.png'
import reactLogo from '../assets/reactlogo.png'
import styledCLogo from '../assets/styled-c.png'
// import typescriptLogo from '../assets/typescriptlogo.png'
import javascriptLogo from '../assets/javascriptlogo.png'
import htmlLogo from '../assets/htmllogo.png'
import cssLogo from '../assets/csslogo.png'

export const projectsData = [
    {
        name: "Projeto Github API",
        liveLink: "https://seila-dev.github.io/projeto-github-api/",
        repoLink: "https://github.com/Seila-dev/projeto-github-api",
        desktopImg: portGithubDesktop,
        mobileImg: portGithubMobile,
        description: "Um projeto feito em um dos módulos do curso de desenvolvimento front-end DevQuest. Ao colocar o nome de um usuário existente no Github, é feito uma requisição da API expondo os dados do usuário dentro deste site, dados como repositórios, eventos, nome, seguidores, etc..",
        technologies: [htmlLogo, cssLogo, javascriptLogo]
    },
    {
        name: "Projeto E-commerce básico",
        liveLink: "https://seila-dev.github.io/ecommerce-product-page/",
        repoLink: "https://github.com/Seila-dev/ecommerce-product-page",
        desktopImg: portSneakersDesktop,
        mobileImg: portSneakersMobile,
        description: "Projeto básico do front-end Mentor. Meu primeiro projeto ecommerce, focado no aprendizado de Lightbox, galeria de imagens e funções de carrinho. Foi uma aplicação muito boa pois foi nele que aprendi a usar Javascript de fato.",
        technologies: [htmlLogo, cssLogo, javascriptLogo]
    },
    // {
    //     name: "Projeto Theme Toggler - Context API",
    //     liveLink: "https://theme-toggler-with-contextapi.vercel.app/",
    //     repoLink: "https://github.com/Seila-dev/theme-toggler-with-contextapi",
    //     desktopImg: portThemetogglerDesktop,
    //     mobileImg: portThemetogglerMobile,
    //     description: "Esse é um projeto pequeno mas com muito valor para mim. Foi nele que aprendi como usar Context API e TypeScript da maneira correta. O objetivo do projeto é a função de trocar o tema do site, do escuro pro claro e vice-versa.",
    //     technologies: [reactLogo, typescriptLogo, styledCLogo]
    // }
    {
        name: "Project Pokedex",
        liveLink: "https://pokedex-react-beta-fawn.vercel.app/",
        repoLink: "https://github.com/Seila-dev/pokedex-react",
        desktopImg: portPokedexDesktop,
        mobileImg: portPokedexMobile,
        description: "É uma aplicação interativa que permite aos usuários buscar informações detalhadas sobre os Pokémons utilizando a API da PokeAPI. A aplicação exibe uma lista de Pokémons paginada, onde cada card é clicável e leva a uma página de perfil com detalhes do Pokémon, como habilidades, movimentos, tipo e imagem. Feito com react. ",
        technologies: [reactLogo, javascriptLogo, styledCLogo]
    },
];
