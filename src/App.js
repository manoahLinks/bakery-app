import React, {Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NewTemplate from './New';

class App extends Component {
  render() {
    return (
      <Router>
          <div className='grid'>
              <Switch>
                  <NewTemplate />
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
