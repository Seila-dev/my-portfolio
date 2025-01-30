import styled from 'styled-components';
import emailLogo from '../../assets/emaillogo.png'
import { useState } from 'react';

export const Header = () => {
    const [active, setActive] = useState(false);
    
    function copyText() {
        navigator.clipboard.writeText("erickoliveira3975@gmail.com");
        window.alert("Email copiado com sucesso.")
    }

    return (
        <HeaderElement>
            <h1><a href="#">Desenvolvedor Full Stack</a></h1>

            <button onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                    onClick={copyText} className='btn'>
                <img src={emailLogo} alt="email logo"/>
                {active === false && (
                    <p>erickoliveira3975@gmail.com</p>
                )}
                {active === true && (
                    <p>Clique para copiar o email</p>
                )}
                
            </button>
        </HeaderElement>
    )
}

const HeaderElement = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 30px 100px;

    button{
        padding: 5px 10px;
        outline: none;
        border: none;
        background: transparent;
        color: white;
        font-size: 20px;
        display: flex;
        align-items: center;
    }
    button img{
        width: 30px;
        margin-right: 10px;
    }
    button:hover{
        background: #ccc;
        // opacity: 0.6;
        color: black;
        cursor: pointer;
    }
    .menu-btn{
        width: 70px;
        cursor: pointer;
    }

    @media(max-width: 768px){
        padding: 10px;
        flex-direction: column;
        margin-top: 10px;
        h1{
            font-size: 25px;
        }
        .menu-btn{
            width: 50px;
        }
        .btn{
            font-size: 14px;
        }
    }
`