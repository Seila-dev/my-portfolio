import styled, { keyframes } from "styled-components";
import image from '../../assets/subaru-reinhard.jpg'
import character from '../../assets/me.jpg'
// import video from '../../assets/subaru-stairs.mp4';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import youtube from '../../assets/youtube.png';
import tiktok from '../../assets/tiktok.png'

export const SocialMedia = () => {

    return (
        <Section id="socialmedia">
            {/* <BackgroundVideo autoPlay loop muted playsInline>
  <source src={video} type="video/mp4" />
</BackgroundVideo> */}
            <Header>
                <Title>Redes sociais</Title>
                <Subtitle>Todas as minhas formas de comunicação</Subtitle>
            </Header>
                        <Footer>
              <WidthSettings>
                <Icon src={character} alt="Tiktok link" className="character" />
                <TextWrapper>
                  <Text>Erick Rodrigues</Text>
                  <TextSecondary>Fullstack Developer | Tech Lead</TextSecondary>
                </TextWrapper>
                            
              </WidthSettings>
              </Footer>

            <Content>
                <MediaBox as="a" href="https://github.com/Seila-dev" target="_blank" rel="noopener noreferrer" variant='github'>
                    <Icon src={github} alt="Github link"></Icon>
                                        <TextWrapper>
                        <Text>Erick Rodrigues</Text>
                        <TextSecondary>github.com/Seila-dev/</TextSecondary>
                    </TextWrapper>
                </MediaBox>

                <MediaBox as="a" href="https://linkedin.com/in/erickrodrigues-dev" target="_blank" rel="noopener noreferrer" variant='linkedin'>
                    <Icon src={linkedin} alt="Linkedin link"></Icon>
                                        <TextWrapper>
                        <Text>Erick Rodrigues</Text>
                        <TextSecondary>linkedin.com/in/erickrodrigues-dev/</TextSecondary>
                    </TextWrapper>
                </MediaBox>

                <MediaBox as="a" href="https://www.youtube.com/@erickrodriguesdev" target="_blank" rel="noopener noreferrer" variant='youtube'>
                    <Icon src={youtube} alt="Youtube link"></Icon>
                                        <TextWrapper>
                        <Text>Erick Dev</Text>
                        <TextSecondary>youtube.com/@erickrodriguesdev</TextSecondary>
                    </TextWrapper>
                </MediaBox>

                <MediaBox as="a" href="https://www.tiktok.com/@erick_dev" target="_blank" rel="noopener noreferrer" variant="tiktok">
                    <Icon src={tiktok} alt="Tiktok link" />
                    <TextWrapper>
                        <Text>Erick dev</Text>
                        <TextSecondary>tiktok.com/@erick_dev</TextSecondary>
                    </TextWrapper>
                </MediaBox>
            </Content>

        </Section>
    );
};

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

// const slideIn = keyframes`
//     from { transform: translateX(-20px); opacity: 0; }
//     to { transform: translateX(0); opacity: 1; }
// `;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 60px 150px;
  padding-top: 150px;
  min-height: 100vh;
  color: white;
  gap: 20px;
  z-index: -1;
  overflow: hidden;
  background: linear-gradient(to left, #4c3b3b45, #000, transparent);

  /* Imagem da biblioteca no canto direito */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 70%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right;
background-image: 
  linear-gradient(to left, rgba(0, 0, 0, 0.9), transparent 80%),
  url(${image});
    opacity: 0.2;
    pointer-events: none;
    z-index: -1;
  }



/* Sobreposição lateral + topo + bottom */
&::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Combina 3 camadas: top, bottom e lateral (fade suave da imagem) */
  background:
    linear-gradient(to bottom, #000 1px, transparent 50px),   /* Top gradient */
    // linear-gradient(to top, #000 1px, transparent 50px),     /* Bottom gradient */
    linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent 0%); /* Fade da imagem para o fundo */
  
  z-index: 1;
  pointer-events: none;
}

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    padding: 40px 20px;

    &::before,
    &::after {
      width: 100%;
      background-position: center;
        // background: linear-gradient(to right, #1a002b, #000, transparent);
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
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    // grid-template-rows: 1fr 1fr;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 8px;
    transition: 0.2s ease-out;
    width: 100%;

    @media (max-width: 1024px) {
        margin-bottom: 60px;
    }
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

const MediaBox = styled.div<{ variant: string }>`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${({ variant }) => {
        switch (variant) {
            case 'youtube':
                return 'linear-gradient(to right, #ff0000 10%, #1818185a)';
            case 'tiktok':
                return 'linear-gradient(to right, #717171ff 10%, #18181881)';
            case 'linkedin':
                return 'linear-gradient(to right, #0e76a8 10%, #18181870)';
            case 'github':
                return 'linear-gradient(to right, #333 10%, #1818186e)';
            default:
                return 'linear-gradient(to right, #1a1a1a 10%, #18181871)';
        }
    }};
  border-radius: 8px;
  padding: 14px 28px 14px 20px;
  width: fit-content;
//   min-width: 50px;
//   max-width: 400px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: white;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-4px);
  }
`;


const Icon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const WidthSettings = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;
    width: 100%;
    gap: 14px;

    
  img{
    border-radius: 50%;
    object-fit: cover;
    width: 60px;
    height: 60px;
  }

  span{
    font-size: 1.3rem;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const TextSecondary = styled.span`
  font-size: 13px;
  color: #bbb;
`;

const Footer = styled.footer`
    position: relative;
    bottom: 0;
    left: 0;
    gap: 12px;
    display: flex;
    padding: 30px 14px;
    justify-content: center;
      background: #4e4e4e4d;
    align-items: center;
    width: 100%;
`