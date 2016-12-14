import angular from 'angular';
import './scss/main.scss';

//grabs index.js from components dir
import components from './components';
import services from './services';

//for routing
import uiRouter from 'angular-ui-router';
import routes from './routes';

const app = angular.module('myApp', [
  components,
  services,
  uiRouter
]);

app.config(routes);

const dev = 'http://localhost:3500/api';

//.value serves service obj to angular - could use:
//app.factory('apiUrl', function() {
//  return dev;
//})
app.value('apiUrl', dev); //eslint-disable-line

