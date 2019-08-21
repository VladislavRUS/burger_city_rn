import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import * as translations from '../../../translations';
import { App } from '../App';

addLocaleData([...ru]);

class Root extends React.Component {
  public render() {
    return (
      <IntlProvider locale={'ru'} defaultLocale={'ru'} messages={translations}>
        <App />
      </IntlProvider>
    );
  }
}

export default Root;
