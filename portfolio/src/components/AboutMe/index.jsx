import { FormattedMessage } from 'react-intl';

import './style.css';

const AboutMe = () => {
  return (
    <div className="container-about">
      <div className="text">
        <FormattedMessage
          className="welcome"
          id="app.welcome"
          defaultMessage={'Bem vindo ao meu portfólio'}
        />
        <h1 className="title-text">
          <FormattedMessage
            id="aboutme.greeting"
            defaultMessage="Olá, eu sou Emily July!"
          />
        </h1>
        <h3 className="subtitle-text">
          <FormattedMessage
            id="aboutme.subtitle1"
            defaultMessage={'Desenvolvedora '}
          />
          <span className="developer">
            <FormattedMessage
              id="aboutme.subtitle2"
              defaultMessage={'frontend...'}
            />
          </span>
        </h3>
        <p className="content-text">
          <FormattedMessage
            id="aboutme.intro"
            defaultMessage="Vamos saber um pouco mais sobre mim?"
          />
        </p>
        <p className="apresentation-text">
          <FormattedMessage
            id="aboutme.description"
            defaultMessage="Eu sou desenvolvedora frontend, utilizando os frameworks Vuejs e Reactjs, realizando a produção de páginas web, seguindo protótipos do Figma e priorizando a experiência do usuário."
          />
        </p>
      </div>
      <div className="container-profile">
        <div className="profile">
          <img src="/perfil.jpeg" alt="July's picture" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
