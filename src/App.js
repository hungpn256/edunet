import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>{this.showContentMenus(routes)}</div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={() => {
              return route.hideSideBar ? (
                route.Component
              ) : (
                <Header>{route.Component}</Header>
              );
            }}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
