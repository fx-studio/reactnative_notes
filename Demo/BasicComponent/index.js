/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NewApp from './NewApp';
import NewApp2 from './NewApp2';

//AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => NewApp2);