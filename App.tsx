import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import ScanPlugin from '.';

export default ScanPlugin;

AppRegistry.registerComponent(appName, () => App);
