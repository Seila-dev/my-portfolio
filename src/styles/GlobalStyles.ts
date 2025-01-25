import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --light-green: #27e599;
        --dark-green: #00b193;
        --blue: #00b6ff;
        --white: #fff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body{
        background: var(--white);
        color: #ffffff;
        font-family: "Roboto", sans-serif;
        min-width: 380px;
        cursor: none;

        @media(max-width: 768px){
            cursor: inherit;
        }
    }

    a{
        color: #fff;
    }

    button {
        font-family: "Roboto", sans-serif;
    }
`