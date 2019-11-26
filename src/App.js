import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Landing from './Components/Pages/Landing/Landing'
import Library from './Components/Pages/Library/Library'
import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/landing' component={Landing}/>
          <Route path='/library' component={Library}/>
          <Route path='/'>
            <Redirect to='/library'/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
