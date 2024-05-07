import "./style.css";
import ProjectCard from "../../components/ProjectCard/index.jsx";

const Projects = () => {
  return (
    <div className="container-projects">
        <ProjectCard
            urlImage={"projects/project-watch-a-movie.png"}
            link={"https://watchamovie-indol.vercel.app/"}
            title={"Watch a Movie"}
            description={
                "Uma página web que consome informações sobre filmes, da API do TMDB."
            }
            resources={"REACT - REDUX - AXIOS - FIREBASE - API - VITE"}
            linkRepo={"https://github.com/emilyjuly/watchamovie"}
        />
      <ProjectCard
        urlImage={"projects/project-july-invest.png"}
        link={"https://master--july-invest.netlify.app/"}
        title={"July Invest"}
        description={
          "Uma landing page que disponibiliza informações sobre ações de bolsa da valores, através do consumo de API."
        }
        resources={"VUE 3 - NUXT 3 - PRIMEVUE - PINIA - API - PRIMEFLEX"}
        linkRepo={"https://github.com/emilyjuly/july-invest"}
      />
      <ProjectCard
        urlImage={"projects/project-speech-to-text-img.png"}
        link={"https://speech-to-text-notes.netlify.app/"}
        title={"Speech to text"}
        description={
          "Uma ferramenta para capturar a voz e transcrever para texto, e a partir disso criar notas, que podem ser editadas, excluídas ou baixadas."
        }
        resources={"VUE 3 - NUXT 3 - PRIMEVUE - PINIA - API - PRIMEFLEX"}
        linkRepo={"https://github.com/emilyjuly/speech-to-text-notes"}
      />
      <ProjectCard
        urlImage={"projects/project-subselect-img.png"}
        link={"https://sub-select.netlify.app/"}
        title={"Sub-select"}
        description={
          "Um buscador de cidades, que retorna a mesma no mapa, com o intuíto de exemplificar o uso de um sub-select"
        }
        resources={"VUE 3 - NUXT 3 - PRIMEVUE - PINIA - API - PRIMEFLEX"}
        linkRepo={"https://github.com/emilyjuly/sub-select"}
      />
      <ProjectCard
        urlImage={"projects/project-map-img.png"}
        link={"https://ip-address-july.netlify.app/"}
        title={"IP ADDRESS TRACKER"}
        description={"Um buscador de localização através do IP informado."}
        resources={"VUE 3 - NUXT 3 - PRIMEVUE - PINIA - API - VITE"}
        linkRepo={"https://github.com/emilyjuly/ip-address-tracker"}
      />
    </div>
  );
};

export default Projects;
