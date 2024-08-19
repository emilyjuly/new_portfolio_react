import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LocaleContext } from '../../context/LocaleContext';

import './style.css';

const Header = () => {
  const { locale, setLocale } = useContext(LocaleContext);

  const toggleLocale = () => {
    if (locale === 'en-US') {
      setLocale('pt-BR');
    } else {
      setLocale('en-US');
    }
  };

  return (
    <div className="">
      <div className="header">
        <Link to={'/'} className="link">
          <div className="logo">
            <img src="/favicon.png" alt="" />
            <p>{"July's Portfolio"}</p>
          </div>
        </Link>
        <div className="header-menu">
          <NavLink
            to={'/'}
            className={(nav) => (nav.isActive ? 'active-link' : 'link')}
          >
            <p>Sobre mim</p>
          </NavLink>
          <NavLink
            to={'/certificates'}
            className={(nav) => (nav.isActive ? 'active-link' : 'link')}
          >
            <p>Skills & Certificados</p>
          </NavLink>
          <NavLink
            to={'/projects'}
            className={(nav) => (nav.isActive ? 'active-link' : 'link')}
          >
            <p>Projetos</p>
          </NavLink>
          <NavLink
            to={'/contact-me'}
            className={(nav) => (nav.isActive ? 'active-link' : 'link')}
          >
            <p>Contatos</p>
          </NavLink>
          <button onClick={toggleLocale} className="translate-btn">
            <img src="/translate.png" width="15" />
            {locale === 'pt-BR' ? 'En' : 'Pt'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
