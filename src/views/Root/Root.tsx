import { computed } from 'mobx';
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
  @computed
  get locale() {
    return Store.currentLocale.languageCode;
  }

  public render() {
    return (
      <IntlProvider
        key={this.locale}
        locale={this.locale}
        messages={(translations as any)[this.locale]}
      >
        <App />
      </IntlProvider>
    );
  }
}

export default Root;
