import styled from "styled-components"
import { pinnedProjectsData } from "../../mocks/pinnedProjectsData"
import { projectsData } from "../../mocks/projectsData"
import { Project } from "../project"

export const Projects = () => {
    

    return (
        <ProjectsSection id="projects">
            <h2>Projetos</h2>
            <Container>
                <Divisor><div className="line b1"></div><span className="span-pin">Projetos em destaque</span> <div className="line b2"></div></Divisor>
                <div className="pinned-projects">
                    {pinnedProjectsData.map((project, index) => (
                        <Project key={index} {...project} />
                    ))}
                </div>
                <div className="progress-projects">
                    <Divisor><div className="line b1"></div><span className="span-pin">Outros projetos</span> <div className="line b2"></div></Divisor>
                    <div className="projects">
                        {projectsData.map((project, index) => (
                            <Project key={index} {...project} />
                        ))}
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
        margin-bottom: 20px;
        .descriptionText{
            padding: 5px 8%;
        }
        .descriptionText p{
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
            user-select: none;
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

    @media(max-width: 768px){
        
        .pinned-projects, .projects{
            grid-template-columns: 1fr;
        }
        .project{
            margin-bottom: 70px;
        }
    }

`