import './style.css';
import ProjectCard from '../../components/ProjectCard/index.jsx';

const Projects = () => {
  return (
    <div className="container-projects">
      <ProjectCard
        urlImage={'projects/project-bosshe-cars.png'}
        link={'https://bosshe-cars.vercel.app/'}
        title={'Bosshe Cars'}
        description={
          'Uma landing page para uma loja de carros, com a integração de um formulário de contato, que envia um email ao administrador, e também uma área de administração que permite a edição do catálogo de carros, através da integração com a API do Github. Design responsivo, usando mobile first, interface moderna, com menu superior de navegação e botão de dark/light mode.'
        }
        resources={'NUXT - VUE 3 - PINIA - TAILWINDCSS - PRIMEVUE'}
        linkRepo={'https://github.com/emilyjuly/bosshe-cars'}
      />
      <ProjectCard
        urlImage={'projects/project-july-invest.png'}
        link={'https://master--july-invest.netlify.app/'}
        title={'July Invest'}
        description={
          'Uma landing page que disponibiliza informações sobre ações, fundos e BDRs da bolsa de valores, através do consumo de API. Apresentação de gráficos usando a lib Charts.js, página responsiva, que integra a API de pesquisa do Google que trás detalhes sobre cada ativo.'
        }
        resources={'VUE 3 - NUXT 3 - PRIMEVUE - PINIA - API - PRIMEFLEX'}
        linkRepo={'https://github.com/emilyjuly/july-invest'}
      />
      {/* <ProjectCard
        urlImage={'projects/project-speech-to-text-img.png'}
        link={'https://speech-to-text-notes.netlify.app/'}
        title={'Speech to text'}
        description={
          'Uma ferramenta para capturar a voz e transcrever para texto, e a partir disso criar notas, que podem ser editadas, excluídas ou baixadas.'
        }
        resources={'VUE 3 - NUXT 3 - PRIMEVUE - PINIA - API - PRIMEFLEX'}
        linkRepo={'https://github.com/emilyjuly/speech-to-text-notes'}
      /> */}
      {/* <ProjectCard
        urlImage={'projects/project-subselect-img.png'}
        link={'https://sub-select.netlify.app/'}
        title={'Sub-select'}
        description={
          'Um buscador de cidades, que retorna a mesma no mapa, com o intuíto de exemplificar o uso de um sub-select'
        }
        resources={'VUE 3 - NUXT 3 - PRIMEVUE - PINIA - API - PRIMEFLEX'}
        linkRepo={'https://github.com/emilyjuly/sub-select'}
      /> */}
      <ProjectCard
        urlImage={'projects/project-map-img.png'}
        link={'https://ip-address-july.netlify.app/'}
        title={'IP ADDRESS TRACKER'}
        description={
          'Um buscador de localização através do IP informado. Com integração a lib Leaflet para representação no mapa, exibindo também detalhes sobre cada localização, essa aplicação possível um design responsivo.'
        }
        resources={'VUE 3 - NUXT 3 - PRIMEVUE - PINIA - API - VITE'}
        linkRepo={'https://github.com/emilyjuly/ip-address-tracker'}
      />
      <ProjectCard
        urlImage={'projects/project-watch-a-movie.png'}
        link={'https://watchamovie-indol.vercel.app/'}
        title={'Watch a Movie'}
        description={
          'Uma página web que consome informações sobre filmes, da API do TMDB. Disponibilizando uma pesquisa de filmes no maior banco de dados de filmes do mundo, design responsivo, com integração ao Firebase para armazenar as pesquisas recentes.'
        }
        resources={'REACT - REDUX - AXIOS - FIREBASE - API - VITE'}
        linkRepo={'https://github.com/emilyjuly/watchamovie'}
      />
    </div>
  );
};

export default Projects;
