import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NewTemplate from './pages/Home';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
          <div className='relative grid grid-cols-1 w-full'>
            <NavBar></NavBar>
            <div className="relative flex flex-row font-nunito">
              <Sidebar />
              <NewTemplate />
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
