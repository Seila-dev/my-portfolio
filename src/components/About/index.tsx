import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Calendar, Zap } from 'lucide-react';

const About = () => {
    const [currentExperience, setCurrentExperience] = useState<string>(
        "Desenvolvedor Full Stack e Tech Lead com experiência no desenvolvimento, arquitetura, segurança e manutenção de aplicações web modernas e APIs escaláveis. Atualmente, sou Tech Lead na Kosting Services, onde lidero uma equipe de desenvolvedores e designers focada em construir produtos digitais inovadores."
    );

    const experiences = [
        {
            title: "Tech Lead - Kosting Services",
            description: "Atualmente, sou Tech Lead em uma startup SaaS com uma equipe de 7 desenvolvedores e 2 designers. Estou liderando a construção de produtos digitais reais, focando em metodologias ágeis, colaboração constante e sempre entregando o máximo de qualidade possível.",
            date: "06/2025 - Até o momento",
            highlight: "Leadership",
            tags: ["Team Lead", "SaaS", "Metodologias Ágeis"]
        },
        {
            title: "Desenvolvedor Full Stack - Freelancer",
            description: "Atuação em projetos de software sob demanda, com foco em entregas completas de aplicações web, desde a definição da arquitetura até o deploy final. Entreguei soluções funcionais e escaláveis, voltadas à experiência do usuário, otimização de performance e segurança.",
            date: "01/2024 - Até o momento",
            highlight: "Full Stack",
            tags: ["React.js", "Node.js", "PostgreSQL", "JWT"]
        }
    ];

    const currentExp = experiences.find(exp => exp.description === currentExperience) || {
        title: "Visão Geral da Carreira",
        date: "4+ Anos como Desenvolvedor Full Stack",
        icon: <Zap className="w-5 h-5" />,
        highlight: "Overview",
        tags: ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js"]
    };

    // const techStack = [
    //     "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", 
    //     "Express", "PostgreSQL", "JWT", "OAuth 2.0", "Git"
    // ];

    // const studying = ["Nest.js", "Fastify", "Vitest", "C#", ".NET"];

    return (
        <AboutSection id="about">
            <Header>
                <Title>Carreira</Title>
                <Subtitle>Desenvolvedor Full Stack & Tech Lead</Subtitle>
            </Header>

            <Content>
                <MainInfo>
                    <ExperienceHeader>
                        <div>
                            <ExperienceTitle>{currentExp.title}</ExperienceTitle>
                            <ExperienceDate>
                                <Calendar size={20} />
                                {currentExp.date}
                            </ExperienceDate>
                        </div>
                    </ExperienceHeader>

                    <Description>{currentExperience}</Description>

                    {currentExp.tags && (
                        <TagsContainer>
                            {currentExp.tags.map((tag, index) => (
                                <Tag key={index}>{tag}</Tag>
                            ))}
                        </TagsContainer>
                    )}

                </MainInfo>

                <ExperienceContainer>
                    <SectionTitle>Experiências</SectionTitle>
                    {experiences.map((experience, index) => (
                        <ExperienceBox
                            key={index}
                            onClick={() => setCurrentExperience(experience.description)}
                            isActive={currentExperience === experience.description}
                        >
                            <BoxHeader>
                                <BoxTitle>{experience.title}</BoxTitle>
                            </BoxHeader>
                            {/* <BoxDescription>
                                {experience.description.substring(0, 50)}...
                            </BoxDescription> */}
                            <BoxDate>{experience.date.split(' - ')[0]}</BoxDate>
                        </ExperienceBox>
                    ))}
                    
                    <ExperienceBox
                        onClick={() => setCurrentExperience("Desenvolvedor Full Stack e Tech Lead com experiência no desenvolvimento, arquitetura, segurança e manutenção de aplicações web modernas e APIs escaláveis. Atualmente, sou Tech Lead na Kosting Services, onde lidero uma equipe de desenvolvedores e designers focada em construir produtos digitais inovadores.")}
                        isActive={!experiences.find(exp => exp.description === currentExperience)}
                        isOverview
                    >
                        <BoxHeader>
                            <BoxTitle>Visão Geral</BoxTitle>
                        </BoxHeader>
                        <BoxDescription>
                            Resumo da minha carreira como desenvolvedor, destacando minhas habilidades e experiências mais relevantes.
                        </BoxDescription>
                        <BoxDate>4+ Anos</BoxDate>
                    </ExperienceBox>
                </ExperienceContainer>
            </Content>
        </AboutSection>
    );
};

export default About;

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
    from { transform: translateX(-20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
`;

const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 60px 150px;
    min-height: 100vh;
    background: linear-gradient(to top, #000 0%, #214 50%, #000 100%); /* Gradiente suave do topo para baixo */
    color: white;
    position: relative;

    /* Para garantir que o gradiente da seção não sobreponha nada */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, #3b82f6, transparent);
    }

    @media (max-width: 1024px) {
        padding: 40px 20px;
    }
`;

const Header = styled.div`
    margin-bottom: 60px;
    animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h2`
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 10px;
    background: var(--primary-light);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const Subtitle = styled.p`
    font-size: 18px;
    color: #9ca3af;
    margin: 0;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 80px;
    max-width: 1400px;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 40px;
    }
`;

const MainInfo = styled.div`
    flex: 1.2;
    animation: ${slideIn} 0.8s ease-out 0.2s both;
`;

const ExperienceHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
`;

const ExperienceTitle = styled.h3`
    font-size: 32px;
    margin: 0;
    // color: var(--primary-light);
    color: white;
    font-weight: 600;
`;

const ExperienceDate = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #9ca3af;
    font-size: 16px;
    margin-top: 10px;
`;

const Description = styled.p`
    font-size: 20px;
    line-height: 1.7;
    margin-bottom: 30px;
    color: #e5e7eb;
`;

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 40px;
`;

const Tag = styled.span`
    padding: 8px 16px;
    background: rgba(97, 18, 207, 0.41);
    border: 1px solid rgba(117, 64, 190, 1);
    border-radius: 10px;
    font-size: 14px;
    color: #ffffffff;
    font-weight: 500;
`;


const ExperienceContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    // gap: 20px;
    animation: ${slideIn} 0.8s ease-out 0.4s both;
`;

const SectionTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 20px;
    color: #f3f4f6;
    color: var(--primary-light);
    font-weight: 600;
`;

const ExperienceBox = styled.div<{ isActive?: boolean; isOverview?: boolean }>`
    background: ${props => props.isActive 
        ? 'linear-gradient(135deg, transparent, rgba(100, 6, 224, 0.17))'
        : 'transparent'
    };
    border-left: 1px solid ${props => props.isActive 
        ? 'var(--primary)'
        : 'rgba(139, 92, 246, 0.4);'
    };
    padding: 24px;
    // border-radius: 16px;
    cursor: pointer;
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;

    ${props => props.isOverview && `
        border: 1px solid rgba(139, 92, 246, 0.4);
    `}

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 2px;
        background: ${props => props.isActive 
            ? 'linear-gradient(90deg, var(--primary), #8b5cf6)'
            : 'transparent'
        };
        transition: all 0.5s ease;
    }

    &:hover {
        // transform: translateX(-4px);
        border-color: var(--primary);

        &::before {
            background: linear-gradient(90deg, var(--primary), #8b5cf6);
        }
    }
`;

const BoxHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
`;

const BoxTitle = styled.h4`
    font-size: 18px;
    color: var(--primary-light);
    color: white;
    margin: 0;
    font-weight: 600;
`;

const BoxDescription = styled.p`
    font-size: 14px;
    color: #9ca3af;
    line-height: 1.5;
    margin-bottom: 15px;
`;

const BoxDate = styled.span`
    font-size: 12px;
    color: #c9c9c9;
    font-weight: 500;
`;