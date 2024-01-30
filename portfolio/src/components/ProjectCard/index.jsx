import "./style.css";
import {BsGithub} from "react-icons/bs";

const ProjectCard = () => {
    return (
            <div className="card-project">
                <div className="project-picture">
                    <img src="/project-map-img.png" alt="Imagem preview do projeto"/>
                </div>
                <p className="project-infos">
                    <a href="https://ip-address-july.netlify.app/" target="_blank" title="Acesse o deploy do projeto">IP ADDRESS TRACKER</a>
                    <span className="profissao">Um buscador de localização através do IP informado.</span>
                    <span className="email">VUE 3 - NUXT 3 - PRIMEVUE - PINIA - API - VITE</span>
                </p>
                <div className="social-media">
                    <a href="https://ip-address-july.netlify.app/" target="_blank" title="Acesse o deploy do projeto">
                        <img src="/deploy.png" alt="Foguete" height="20px"/>
                    </a>
                    <a href="https://github.com/emilyjuly/ip-address-tracker" target="_blank" title="Acesse o repositório do projeto">
                        <BsGithub />
                    </a>
                </div>
            </div>
    );
};

export default ProjectCard;
