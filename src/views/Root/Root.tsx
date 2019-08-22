import { observer } from 'mobx-react';
import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import * as translations from '../../../translations';
import { Store } from '../../store';
import { App } from '../App';

addLocaleData([...ru, ...en]);

@observer
class Root extends React.Component {
  public render() {
    return (
      <IntlProvider
        defaultLocale={'ru'}
        locale={Store.currentLocale.languageCode}
        messages={(translations as any)[Store.currentLocale.languageCode]}
      >
        <App />
      </IntlProvider>
    );
  }
}

export default Root;
