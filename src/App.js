import React from 'react';
import routes from './route';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './component/header/Header';
import './css/index.css';

function App() {
  return (
    <React.Fragment>
      <Header token={localStorage.getItem('jwt')}/>
      <Router>
        <Switch>
          {routes.map((prop, key) =>
            (prop.layout === "") &&
            (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            )
          )}
          <Redirect from='/' to='/home' />
        </Switch>
      </Router>
      
    </React.Fragment>
  );
}

export default App;
