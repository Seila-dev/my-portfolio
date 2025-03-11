import { ProjectProps } from "@/interfaces/projectProps"

export const Project: React.FC<ProjectProps> = ({ name, liveLink, repoLink, desktopImg, mobileImg, description, technologies }) => {

    return (
    <div className="project">
      <h3 className="name">{name}</h3>
      <div className="links">
        <a href={liveLink} target="blank">Testar website</a>
        <a href={repoLink} target="blank">Ir para repositório</a>
      </div>
      <img src={desktopImg} alt="projeto em destaque" className="desktop-img" />
      <img src={mobileImg} alt="projeto em destaque" className="mobile-img" />
      <div className="technologies">
        <div className="tech-box">
          {technologies.map((logo, index) => (
            <img key={index} src={logo} alt="logo" className="logo" />
          ))}
        </div>
      </div>
      <div className="descriptionText">
        <p>{description}</p>
      </div>
    </div>
    )
}