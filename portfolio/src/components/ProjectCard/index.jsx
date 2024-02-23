import "./style.css";
import {BsGithub} from "react-icons/bs";

const ProjectCard = ({ urlImage, link, title, description, resources, linkRepo}) => {
    return (
            <div className="card-project">
                <div className="project-picture">
                    <img src={urlImage} alt="Imagem preview do projeto"/>
                </div>
                <p className="project-infos">
                    <a href={link} target="_blank" title="Acesse o deploy do projeto">{title}</a>
                    <span className="profissao">{description}</span>
                    <span className="email">{resources}</span>
                </p>
                <div className="social-media">
                    <a href={link} target="_blank" title="Acesse o deploy do projeto">
                        <img src="/deploy.png" alt="Foguete" height="20px"/>
                    </a>
                    <a href={linkRepo} target="_blank" title="Acesse o repositório do projeto">
                        <BsGithub />
                    </a>
                </div>
            </div>
    );
};

export default ProjectCard;
