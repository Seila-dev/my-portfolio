import styled from "styled-components"
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'
import tiktokIcon from '../../assets/tiktok.png'
import youtubeIcon from '../../assets/youtube.png'

export const SocialFooter = () => {
    return (
        <>
            <SectionTransition />
            <FooterContainer id="socialmedia">
                <FooterContent>
                    <SocialSection>
                        <h2>Social Media</h2>
                        <p>Find me on social networks and follow my work</p>
                        
                        <SocialGrid>
                            <SocialLink 
                                href="https://github.com/Seila-dev/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="github"
                            >
                                <img src={githubIcon} alt="GitHub" />
                                <div className="social-info">
                                    <span className="social-name">GitHub</span>
                                    <span className="social-desc">My projects and code</span>
                                </div>
                            </SocialLink>

                            <SocialLink 
                                href="https://www.linkedin.com/in/erickrodrigues-dev/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="linkedin"
                            >
                                <img src={linkedinIcon} alt="LinkedIn" />
                                <div className="social-info">
                                    <span className="social-name">LinkedIn</span>
                                    <span className="social-desc">Career and networking</span>
                                </div>
                            </SocialLink>

                            <SocialLink 
                                href="https://www.tiktok.com/@erick_dev" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="tiktok"
                            >
                                <img src={tiktokIcon} alt="TikTok" />
                                <div className="social-info">
                                    <span className="social-name">TikTok</span>
                                    <span className="social-desc">Tech content (PT-BR)</span>
                                </div>
                            </SocialLink>

                            <SocialLink 
                                href="https://www.youtube.com/@erickrodriguesdev" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="youtube"
                            >
                                <img src={youtubeIcon} alt="YouTube" />
                                <div className="social-info">
                                    <span className="social-name">YouTube</span>
                                    <span className="social-desc">Tutorials and projects (PT-BR)</span>
                                </div>
                            </SocialLink>
                        </SocialGrid>
                    </SocialSection>

                    <FooterBottom>
                        <p>&copy; 2025 Erick Rodrigues. Full Stack Developer & Tech Lead</p>
                        <span>Built with ❤️ and lots of code</span>
                    </FooterBottom>
                </FooterContent>
            </FooterContainer>
        </>
    )
}

const SectionTransition = styled.div`
    position: relative;
    width: 100%;
    height: 0px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent);
    z-index: 1;
    margin-top: -1px;
`;

const FooterContainer = styled.footer`
    background: linear-gradient(135deg, #1a1a1a 0%, #000 100%);
    color: white;
    padding: 80px 0 40px;
    position: relative;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--primary), transparent);
    }
`;

const FooterContent = styled.div`
    // max-width: 1200px;
    margin: 0 auto;
    padding: 0 150px;

    @media (max-width: 1024px) {
        padding: 0 40px;
    }

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

const SocialSection = styled.div`
    // text-align: center;
    margin-bottom: 60px;

    h2 {
        font-size: 48px;
        margin-bottom: 15px;
        background: linear-gradient(45deg, var(--primary), var(--primary-light));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: fade-up 0.5s 0.2s backwards;
    }

    p {
        font-size: 20px;
        color: #c2c2c2;
        margin-bottom: 50px;
        animation: fade-up 0.5s 0.4s backwards;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 32px;
        }
        
        p {
            font-size: 18px;
        }
    }
`;

const SocialGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    // max-width: 800px;
    // margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 25px;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    animation: fade-up 0.5s 0.6s backwards;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s ease;
    }

    &:hover {
        transform: translateY(-5px);
        border-color: var(--primary);
        box-shadow: 0 20px 40px rgba(134, 1, 243, 0.3);
        
        &::before {
            left: 100%;
        }
    }

    img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
        border-radius: 10px;
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.1);
    }

    .social-info {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .social-name {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .social-desc {
        font-size: 14px;
        color: #c2c2c2;
    }

    &.github:hover {
        border-color: #333;
        box-shadow: 0 20px 40px rgba(51, 51, 51, 0.3);
    }

    &.linkedin:hover {
        border-color: #0077b5;
        box-shadow: 0 20px 40px rgba(0, 119, 181, 0.3);
    }

    &.tiktok:hover {
        border-color: #ff0050;
        box-shadow: 0 20px 40px rgba(255, 0, 80, 0.3);
    }

    &.youtube:hover {
        border-color: #ff0000;
        box-shadow: 0 20px 40px rgba(255, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
        padding: 20px;
        
        img {
            width: 40px;
            height: 40px;
            margin-right: 15px;
        }
        
        .social-name {
            font-size: 18px;
        }
    }
`;

const FooterBottom = styled.div`
    text-align: center;
    padding-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    animation: fade-up 0.5s 0.8s backwards;

    p {
        font-size: 16px;
        color: #c2c2c2;
        margin-bottom: 10px;
    }

    span {
        font-size: 14px;
        color: var(--primary-light);
    }

    @media (max-width: 768px) {
        p {
            font-size: 14px;
        }
        
        span {
            font-size: 12px;
        }
    }
`;

// Adicione estas animações ao seu CSS global se ainda não existir
/*
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
*/