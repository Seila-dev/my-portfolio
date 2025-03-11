import portEcommerceAdminDesktop from '../assets/port-ecommerce-admin-pj.png'
import portEcommerceAdminMobile from '../assets/port-ecommerce-admin-mob-pj.png'
import portMcdonaldsDesktop from '../assets/port-mcdonald-pj.png'
import portMcdonaldsMobile from '../assets/port-mcdonald-mob-pj.png'
import portMcdonaldsDocsDesktop from '../assets/port-mc-docs-pj.png'
import portMcdonaldsDocsMobile from '../assets/port-mc-docs-mob-pj.png'
import portEcommerceDesktop from '../assets/port-ecommerce-pj.png'
import portPokedexDesktop from '../assets/port-pokedex-pj.png'
import portPortfolioDesktop from '../assets/port-portifolio-pj.png'
import portEcommerceMobile from '../assets/port-ecommerce-mob-pj.png'
import portPokedexMobile from '../assets/port-pokedex-mob-pj.png'
import portPortfolioMobile from '../assets/port-portifolio-mob-pj.png'
import reactLogo from '../assets/reactlogo.png'
import styledCLogo from '../assets/styled-c.png'
import typescriptLogo from '../assets/typescriptlogo.png'
import javascriptLogo from '../assets/javascriptlogo.png'
import postgreLogo from '../assets/postgre.png'
import cockroachdbLogo from '../assets/cockroachdblogo.png'
import prismaLogo from '../assets/prismalogo.png'
import expressLogo from '../assets/expressjs.png'
import nodeLogo from '../assets/nodejs.png'

export const pinnedProjectsData = [
    {
        name: "Projeto E-commerce (EM DESENVOLVIMENTO)",
        liveLink: "https://e-commerce-project-tau-nine.vercel.app/",
        repoLink: "https://github.com/Seila-dev/e-commerce-project",
        desktopImg: portEcommerceDesktop,
        mobileImg: portEcommerceMobile,
        description: "O projeto e-commerce simula uma loja digital real, com seções de login, registro, produto. Funções como carrinho de compras usando Context API e interações em tempo real com Banco de dados. ",
        technologies: [reactLogo, typescriptLogo, styledCLogo, postgreLogo, expressLogo, nodeLogo, prismaLogo]
    },
    {
        name: "Projeto E-commerce Admin (EM DESENVOLVIMENTO)",
        liveLink: "https://e-commerce-project-tau-nine.vercel.app/admin",
        repoLink: "https://github.com/Seila-dev/e-commerce-project",
        desktopImg: portEcommerceAdminDesktop,
        mobileImg: portEcommerceAdminMobile,
        description: "Página Administrador do Ecommerce (ainda em desenvolvimento). ",
        technologies: [reactLogo, typescriptLogo, styledCLogo, postgreLogo, expressLogo, nodeLogo, prismaLogo]
    },
    {
        name: "McDonald's Side App Server",
        liveLink: "https://mcdonalds-server.onrender.com/docs/",
        repoLink: "https://github.com/Seila-dev/McDonalds-server",
        desktopImg: portMcdonaldsDocsDesktop,
        mobileImg: portMcdonaldsDocsMobile,
        description: "Esta API foi criada para gerenciar o processo de autenticação de usuários para a plataforma McDonald's. Ela permite o cadastro de novos usuários, login via email e senha, e a visualização do perfil do usuário autenticado. OBS: A documentação pode demorar abrir",
        technologies: [cockroachdbLogo, typescriptLogo, nodeLogo, expressLogo, prismaLogo]
    },
    {
        name: "McDonald's Side app Authentication",
        liveLink: "https://mc-donalds-authentication.vercel.app/login",
        repoLink: "https://github.com/Seila-dev/McDonalds-authentication",
        desktopImg: portMcdonaldsDesktop,
        mobileImg: portMcdonaldsMobile,
        description: "Um projeto paralelo para testar minhas habilidades de autenticação (React hook form + Zod + JWT + BCrypt) ",
        technologies: [reactLogo, typescriptLogo, styledCLogo]
    },
    {
        name: "Project Pokedex",
        liveLink: "https://pokedex-react-beta-fawn.vercel.app/",
        repoLink: "https://github.com/Seila-dev/pokedex-react",
        desktopImg: portPokedexDesktop,
        mobileImg: portPokedexMobile,
        description: "É uma aplicação interativa que permite aos usuários buscar informações detalhadas sobre os Pokémons utilizando a API da PokeAPI. A aplicação exibe uma lista de Pokémons paginada, onde cada card é clicável e leva a uma página de perfil com detalhes do Pokémon, como habilidades, movimentos, tipo e imagem. Feito com react. ",
        technologies: [reactLogo, javascriptLogo, styledCLogo]
    },
    {
        name: "Meu Portifólio",
        liveLink: "https://my-portfolio-seven-blush-46.vercel.app/",
        repoLink: "https://github.com/Seila-dev/my-portfolio",
        desktopImg: portPortfolioDesktop,
        mobileImg: portPortfolioMobile,
        description: "O portifólio que você está vendo nesse exato momento.",
        technologies: [reactLogo, typescriptLogo, styledCLogo]
    }
];
