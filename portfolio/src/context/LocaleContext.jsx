import React, { createContext, useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';

export const LocaleContext = createContext();

const LocaleProvider = ({ children }) => {
  const browserLocale = navigator.language || 'pt-BR';

  const [locale, setLocale] = useState(browserLocale);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    if (browserLocale !== 'pt') {
      import(`../locales/${locale}.json`)
        .then((messages) => {
          setMessages(messages.default);
        })
        .catch((error) => {
          console.error(
            `Erro ao carregar as mensagens para a locale ${locale}`,
            error,
          );
          setMessages({});
        });
    } else {
      setMessages({});
    }
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider messages={messages} locale={locale} key={locale}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
