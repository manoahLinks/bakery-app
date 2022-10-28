import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Profile from './pages/Profile';
import Home from './pages/Home';
import Task from './pages/Task';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import TaskBar from './components/TaskBar';

class App extends Component {
  render() {
    return (
      <Router>
          <div className='relative grid grid-cols-1 w-full h-screen md:overflow-hidden'>
            <NavBar />
            <div className="relative flex flex-row font-nunito">
              <Sidebar />
              <Switch>
                <Route exact path={`/`} component={Home} />
                <Route path={`/profile`}  component={Profile} />
                <Route path={`/tasks`} component={Task}></Route>
              </Switch>
            </div>
            <TaskBar></TaskBar>
          </div>
      </Router>
    );
  }
}

export default App;
