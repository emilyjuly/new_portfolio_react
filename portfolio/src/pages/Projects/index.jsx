import "./style.css"
import ProjectCard from "../../components/ProjectCard/index.jsx";

const Projects = () => {
    return (
        <div className="container-projects">
            <ProjectCard urlImage={'/project-subselect-img.png'} link={'https://sub-select.netlify.app/'} title={'Sub-select'} description={'Um buscador de cidades, que retorna a mesma no mapa, com o intuíto de exemplificar o uso de um sub-select'} resources={'VUE 3 - NUXT 3 - PRIMEVUE - PINIA - API - PRIMEFLEX'} linkRepo={'https://github.com/emilyjuly/sub-select'}/>
            <ProjectCard urlImage={'/project-map-img.png'} link={'https://sub-select.netlify.app/'} title={'IP ADDRESS TRACKER'} description={'Um buscador de localização através do IP informado.'} resources={'VUE 3 - NUXT 3 - PRIMEVUE - PINIA - API - VITE'} linkRepo={'https://github.com/emilyjuly/ip-address-tracker'}/>
        </div>
    );
}

export default Projects