import styled from "styled-components"
import lines from '../../assets/line-to-skills.png'

export const Skills = () => {



    return (
        <>
        <SkillsSection>
            <h2>Habilidades</h2>
            <SkillsHeader>
                <button className="btn">Full Stack</button>
                <div className="image-prompt">
                    <img src={lines} alt="lines" />
                </div>
            </SkillsHeader>
            <SkillsContainer>
                <div className="front-end stacks">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>ReactJS</p>
                    <p>DOM</p>
                    <p>TypeScript</p>
                    <p>Context API</p>
                    <p>Jest</p>
                    <p>Styled Components</p>
                    <p>Git</p>
                </div>
                <div className="back-end stacks">
                    <p>NodeJS</p>
                    <p>Express</p>
                    <p>Rest API</p>
                    <p>PostgreSQL</p>
                    <p>Prisma ORM</p>
                    <p>CockroachDB</p>
                    <p>Docker</p>
                </div>
            </SkillsContainer>
        </SkillsSection>
        </>
    )
}

const SkillsSection = styled.section`
    display: flex;
    flex-direction: column;
    h2{
        text-align: center;
        margin-bottom: 50px;
        font-size: 40px;
        font-weight: 400;
    }
`

const SkillsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    position: relative;
    .image-prompt{
        user-select: none;
        z-index: 1; 
    }
    .btn{
        padding: 20px 150px;
        z-index: 4;
        outline: none;
        border: none;
        border-radius: 4px;
        background: linear-gradient(261deg, #1f2739 5.73%, rgba(23, 38, 71, .98) 93.52%);
        color: #56b6d4;
        font-family: "Poppins", sans-serif;
        font-weight: 6500;
        font-size: 35px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        outline: 2px solid #252f45;
        border: 2px solid #0f172a;
        
    }
    .stack-separation{
        display: flex;
        justify-content: space-around;
        width: 100%;
        position: relative;
        bottom: 0;
        margin-top: 100px;
    }

    @media(max-width: 900px){
        .image-prompt img{
            width: 500px;
        }
    }
    @media(max-width: 768px){
        .image-prompt img{
            width: 300px;
        }
        .btn{
            padding: 20px 100px;
            font-size: 25px;
        }
    }
`

const SkillsContainer = styled.div`
    margin-bottom: 150px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 15%;
    .stacks.front-end{
        align-items: center;
    }
    .stacks{
        margin-top: 20px;
        display: flex;
        height: 100%;
        max-width: 600px;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 50%;
    }
    .stacks p{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        text-align: start;
        padding: 7px 18px;
        border: 2px solid #0f172a;
        color: #56b6d4;
        background: linear-gradient(261deg, #1f2739 5.73%, rgba(23, 38, 71, .98) 93.52%);
        font-size: 17px;
        font-weight: 400;
        text-transform: uppercase;
        border-radius: 5px;
        outline: 2px solid #252f45;
        outline-offset: 0;
        letter-spacing: 1.2px;
        transition: 0.15s ease-in-out;
        user-select: none;
    }
    .stacks p:hover{
        transform: scale(105%);
    }

    @media(max-width: 550px){
        .stacks p {
            padding: 7px 18px;
            font-size: 10px;
        }
    }
`