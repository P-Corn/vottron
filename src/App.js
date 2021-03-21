import React from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Students from './students/Students'
import Users from './users/Users'
import Courses from './courses/Courses'
import CourseDashboard from './courses/CourseDashboard'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Home path="/" exact component={Home}/> */}
          <Route exact path="/coures/:id" component={CourseDashboard}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/students" component={Students}/>
          <Route path="/users" exact component={Users}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
