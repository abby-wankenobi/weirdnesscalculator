import React, { Component } from 'react';
import Home from './containers/Home';
import Results from './components/Results/Results';
import Nav from './components/Nav/Nav';
import Footer from './components/Nav/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import classes from './App.css';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Nav />
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/results" component={Results} />
            </div>
          </Router>
          <Footer />
        </div>
      </Provider>

    )
  }
}

export default App;
