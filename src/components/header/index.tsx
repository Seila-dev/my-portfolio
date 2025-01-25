// import Menu from '../../assets/menu.png';
import styled from 'styled-components';
// import { useState } from 'react';

export const Header = () => {
    // const [active, setActive] = useState(false);
    // const toggleActive = () => {
    //     setActive(!active);
    // }

    return (
        <HeaderElement>
            <h1><a href="#">Desenvolvedor FullStack</a></h1>
{/* 
            {active === true && (
                <NavigationBurguer>
                    <ul>
                        <li><a href="#introduction" className="link">Introdução</a></li>
                        <li><a href="#about" className="link">Sobre mim</a></li>
                        <li><a href="#projects" className="link">Projetos</a></li>
                    </ul>
                </NavigationBurguer>
            )}
            <img src={Menu} alt="Menu" className='menu-btn' onClick={toggleActive} /> */}

        </HeaderElement>
    )
}

const HeaderElement = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 30px 100px;
    .menu-btn{
        width: 70px;
        cursor: pointer;
    }

    @media(max-width: 768px){
        padding: 10px;
        h1{
            font-size: 25px;
        }
        .menu-btn{
            width: 50px;
        }
    }
`

// const NavigationBurguer = styled.nav`
//     display: flex;
//     position: absolute;
//     right: 160px;
//     top: 100px;
//     background: var(--light-green);
//     padding: 20px;
//     transition: 0.25s ease-in;
//     .link{
//         width: fit-content;
//         transition: 0.3s ease-in-out;
//     }
//     .link:hover{
//         border-bottom: 1px solid black;
//     }
//     li{
//         padding: 10px;
//     }
// `