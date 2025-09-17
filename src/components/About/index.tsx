import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Calendar, Zap } from 'lucide-react';
import image from '../../assets/plaiades-2.webp'
// import video from '../../assets/subaru-stairs.mp4';

const About = () => {
    const [currentExperience, setCurrentExperience] = useState<string>(
        "Full Stack Developer and Tech Lead with experience in building, architecting, securing, and maintaining modern web applications and scalable APIs. Currently, I am Tech Lead at Kosting Services, leading a team of developers and designers focused on delivering innovative digital products."
    );

    const experiences = [
        {
            title: "Tech Lead - Kosting Services",
            description: "Currently working as Tech Lead at a SaaS startup with a team of 5 developers and 2 designers (actively hiring more designers). I am leading the development of real digital products, applying agile methodologies, fostering continuous collaboration, and always aiming to deliver the highest possible quality.",
            date: "06/2025 - Present",
            highlight: "Leadership",
            tags: ["Team Lead", "CI/CD", "SCRUM", "Unit Tests", "Cloudflare R2 & CDN", "Redis" ]
        },
        {
            title: "Full Stack Developer - Freelancer",
            description: "Worked on custom software projects, delivering complete web applications from architecture design to final deployment. Delivered functional and scalable solutions with strong focus on user experience, performance optimization, and security.",
            date: "01/2024 - Present",
            highlight: "Full Stack",
            tags: ["React.js", "Next.js", "TypeScript",  "Node.js", "Nest.js", "PostgreSQL", "OAuth 2.0"]
        }
    ];

    const currentExp = experiences.find(exp => exp.description === currentExperience) || {
        title: "Career Overview",
        date: "4+ Years as a Full Stack Developer",
        icon: <Zap className="w-5 h-5" />,
        highlight: "Overview",
        tags: ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js"]
    };

    return (
        <AboutSection id="about">
            {/* <BackgroundVideo autoPlay loop muted playsInline>
  <source src={video} type="video/mp4" />
</BackgroundVideo> */}
            <Header>
                <Title>Career</Title>
                <Subtitle>Full Stack Developer & Tech Lead</Subtitle>
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
                    <SectionTitle>Experiences</SectionTitle>
                    {experiences.map((experience, index) => (
                        <ExperienceBox
                            key={index}
                            onClick={() => setCurrentExperience(experience.description)}
                            isActive={currentExperience === experience.description}
                        >
                            <BoxHeader>
                                <BoxTitle>{experience.title}</BoxTitle>
                            </BoxHeader>
                            <BoxDate>{experience.date.split(' - ')[0]}</BoxDate>
                        </ExperienceBox>
                    ))}
                    
                    <ExperienceBox
                        onClick={() => setCurrentExperience("Full Stack Developer and Tech Lead with experience in building, architecting, securing, and maintaining modern web applications and scalable APIs. Currently, I am Tech Lead at Kosting Services, leading a team of developers and designers focused on delivering innovative digital products.")}
                        isActive={!experiences.find(exp => exp.description === currentExperience)}
                        isOverview
                    >
                        <BoxHeader>
                            <BoxTitle>Overview</BoxTitle>
                        </BoxHeader>
                        <BoxDescription>
                            Summary of my career as a developer, highlighting my key skills and most relevant experiences.
                        </BoxDescription>
                        <BoxDate>+4 Years</BoxDate>
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
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 60px 150px;
  padding-top: 150px;
  min-height: 100vh;
  color: white;
  overflow: hidden;
  background: linear-gradient(to right, #1a002b, #000, transparent);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right;
background-image: 
  linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent 80%),
  url(${image});
    opacity: 0.3;
    pointer-events: none;
    z-index: 1;
  }


&::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background:
    linear-gradient(to bottom, #000 1px, transparent 50px),  
    linear-gradient(to top, #000 1px, transparent 50px),  
    linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent 0%);
  
  z-index: 3;
  pointer-events: none;
}

  > * {
    position: relative;
    z-index: 3;
  }

  @media (max-width: 1024px) {
    padding: 40px 20px;

    &::before,
    &::after {
      width: 100%;
        background: linear-gradient(to right, #1a002b, #000, transparent);
        z-index: 0;
    }
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

// const BackgroundVideo = styled.video`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   opacity: 0.20;
//   z-index: 0;
//   pointer-events: none;
// `;