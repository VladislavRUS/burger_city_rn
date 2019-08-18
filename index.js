/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { App } from './src/views/App';
import { name as appName } from './app.json';
import { config } from './config';
import { Store } from './src/store';

Store.init(config);

AppRegistry.registerComponent(appName, () => App);

console.disableYellowBox = true;
