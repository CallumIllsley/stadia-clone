import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Landing from './Components/Pages/Landing/Landing'
import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/landing' component={Landing}/>
          <Route path='/'>
            <Redirect to='/landing'/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
