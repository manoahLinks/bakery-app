import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NewTemplate from './pages/Home';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <Router>
          <div className='grid w-full'>
            <div className="flex flex-row font-nunito">
              <Sidebar />
              <NewTemplate />
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
