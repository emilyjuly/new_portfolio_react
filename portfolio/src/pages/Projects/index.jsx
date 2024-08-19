import ProjectCard from '../../components/ProjectCard/index.jsx';
import { FormattedMessage } from 'react-intl';

import './style.css';

const Projects = () => {
  return (
    <div className="container-projects">
      <ProjectCard
        urlImage={'projects/project-quiz-time.png'}
        link={'https://quiztime-taupe.vercel.app/'}
        title={'Quiz Time'}
        description={
          <FormattedMessage
            id="projects.quizTime.description"
            defaultMessage="Um quiz com temas como frontend e backend, desenvolvido usando Reactjs. Ele possui gerenciamento de níveis usando o gerenciamento de estado global do React e o localstorage do navegador. Design responsivo usando mobile first, modelo de design minimalista feito a partir de um protótipo do Figma."
          />
        }
        resources={'REACT - REACT CONTEXT - LOCALSTORAGE - HOOKS - TYPESCRIPT'}
        linkRepo={'https://github.com/emilyjuly/quiztime'}
      />
      <ProjectCard
        urlImage={'projects/project-bosshe-cars.png'}
        link={'https://bosshe-cars.vercel.app/'}
        title={'Bosshe Cars'}
        description={
          <FormattedMessage
            id="projects.bossheCars.description"
            defaultMessage="Uma landing page para uma loja de carros, com a integração de um formulário de contato, que envia um email ao administrador, e também uma área de administração que permite a edição do catálogo de carros, através da integração com a API do Github. Design responsivo, usando mobile first, interface moderna, com menu superior de navegação e botão de dark/light mode."
          />
        }
        resources={'NUXT - VUE 3 - PINIA - TAILWINDCSS - PRIMEVUE'}
        linkRepo={'https://github.com/emilyjuly/bosshe-cars'}
      />
      <ProjectCard
        urlImage={'projects/project-speech-to-notes.png'}
        link={'https://speech-to-text-notes.vercel.app/'}
        title={'Speech to Notes'}
        description={
          <FormattedMessage
            id="projects.speechToNotes.description"
            defaultMessage="Uma aplicação para gerenciar e criar notas usando transcrição de voz. É possível criar uma nota, editar, apagar ou fazer download dela. Também é possível classificar uma nota usando a tag de estado (Novo, Urgente...) e alterar a cor das notas ou da fonte. Todas as notas e preferências de cores ficam salvas no local storage do navegador, ou seja, nada é perdido ao atualizar a tela."
          />
        }
        resources={'NUXT - VUE 3 - PINIA - PRIMEVUE - Transcrição de voz'}
        linkRepo={'https://github.com/emilyjuly/speech-to-text-notes'}
      />
      <ProjectCard
        urlImage={'projects/project-july-invest.png'}
        link={'https://master--july-invest.netlify.app/'}
        title={'July Invest'}
        description={
          <FormattedMessage
            id="projects.julyInvest.description"
            defaultMessage="Uma landing page que disponibiliza informações sobre ações, fundos e BDRs da bolsa de valores, através do consumo de API. Apresentação de gráficos usando a lib Charts.js, página responsiva, que integra a API de pesquisa do Google que trás detalhes sobre cada ativo."
          />
        }
        resources={'VUE 3 - NUXT 3 - PRIMEVUE - PINIA - API - PRIMEFLEX'}
        linkRepo={'https://github.com/emilyjuly/july-invest'}
      />
      <ProjectCard
        urlImage={'projects/project-map-img.png'}
        link={'https://ip-address-july.netlify.app/'}
        title={'IP Address Tracker'}
        description={
          <FormattedMessage
            id="projects.ipAddressTracker.description"
            defaultMessage="Um buscador de localização através do IP informado. Com integração a lib Leaflet para representação no mapa, exibindo também detalhes sobre cada localização, essa aplicação possível um design responsivo."
          />
        }
        resources={'VUE 3 - NUXT 3 - PRIMEVUE - PINIA - API - VITE'}
        linkRepo={'https://github.com/emilyjuly/ip-address-tracker'}
      />
      <ProjectCard
        urlImage={'projects/project-watch-a-movie.png'}
        link={'https://watchamovie-indol.vercel.app/'}
        title={'Watch a Movie'}
        description={
          <FormattedMessage
            id="projects.watchAMovie.description"
            defaultMessage="Uma página web que consome informações sobre filmes, da API do TMDB. Disponibilizando uma pesquisa de filmes no maior banco de dados de filmes do mundo, design responsivo, com integração ao Firebase para armazenar as pesquisas recentes."
          />
        }
        resources={'REACT - REDUX - AXIOS - FIREBASE - API - VITE'}
        linkRepo={'https://github.com/emilyjuly/watchamovie'}
      />
    </div>
  );
};

export default Projects;
