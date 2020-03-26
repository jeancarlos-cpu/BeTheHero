import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/registrar' component={Register} />
          <Route path='/perfil' component={Profile} />
          <Route path='/casos/novo' component={NewIncident} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
