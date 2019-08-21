/**
 * @format
 */

import 'intl';
import { AppRegistry } from 'react-native';
import { Root } from './src/views/Root';
import { name as appName } from './app.json';
import { config } from './config';
import { Store } from './src/store';

Store.init(config);

AppRegistry.registerComponent(appName, () => Root);

console.disableYellowBox = true;
