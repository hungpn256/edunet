import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import List from './components/ProductList/List';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header>{this.showContentMenus(routes)}</Header>
        </div>
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
            component={route.main}
          />
        );
      });
    }

    return <Switch>{result}</Switch>;
  };
}

export default App;
