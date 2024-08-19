import React, { useContext } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useState, useEffect } from 'react';
import { LocaleContext } from '../../context/LocaleContext';

import './style.css';

const AboutMe = () => {
  const { locale } = useContext(LocaleContext);

  const [messages, setMessages] = useState({});

  useEffect(() => {
    if (locale !== 'pt-BR') {
      import(`../../locales/${locale}.json`)
        .then((messages) => {
          setMessages(messages.default);
        })
        .catch((error) => {
          setMessages({});
        });
    } else {
      setMessages({});
    }
  }, [locale]);

  return (
    <IntlProvider messages={messages} key={locale} locale={locale}>
      <div className="container-about">
        <div className="text">
          <FormattedMessage
            className="welcome"
            id="app.welcome"
            defaultMessage={'Bem vindo ao meu portfólio'}
          />
          <h1 className="title-text">{`Olá, eu sou Emily July!`}</h1>
          <h3 className="subtitle-text">
            Desenvolvedora <span className="developer">frontend...</span>
          </h3>
          <p className="content-text">{`Vamos saber um pouco mais sobre mim?`}</p>
          <p className="apresentation-text">
            {`Eu sou desenvolvedora frontend, utilizando o framework Vuejs, realizando a produção de páginas web, seguindo protótipos do Figma e priorizando a experiência do usuário.`}
          </p>
        </div>
        <div className="container-profile">
          <div className="profile">
            <img src="/perfil.jpeg" alt="July's picture" />
          </div>
        </div>
      </div>
    </IntlProvider>
  );
};

export default AboutMe;
