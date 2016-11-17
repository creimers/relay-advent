import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import App from './App';
import './index.css';


class AppRoute extends Relay.Route {
  static routeName = 'AppRoute'
  static queries = {
    store: Component => {

      return Relay.QL`
      query {
        calendars(uuid: $uuid) {
          ${Component.getFragment('store')}
        }
      }
    `},
  };
  static paramDefinitions = {
    uuid: {required: true},

  };

}

let uuid = window.location.pathname.split('/')[1]
ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={new AppRoute({uuid: uuid})} />,
  document.getElementById('root')
);
