import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
          <div className='relative grid grid-cols-1 w-full h-screen md:overflow-hidden'>
            <NavBar />
            <div className="relative flex flex-row font-nunito">
              <Sidebar />
              <Home />
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
